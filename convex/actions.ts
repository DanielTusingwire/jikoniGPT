"use node";
import { action } from "./_generated/server";
import { v } from "convex/values";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateRecipe = action({
    args: {
        input: v.string(),
        inputType: v.union(v.literal("youtube"), v.literal("text")),
    },
    handler: async (ctx, args) => {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is not defined. Please add it to your environment variables.");
        }

        let textToProcess = args.input;
        let youtubeThumbnail: string | null = null;

        if (args.inputType === "youtube") {
            try {
                // Extract video ID from URL
                const videoId = extractVideoId(args.input);
                if (!videoId) {
                    throw new Error("Invalid YouTube URL. Please provide a valid YouTube video link.");
                }

                // Fetch video metadata using oEmbed API (no API key required)
                const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
                const response = await fetch(oembedUrl);

                if (!response.ok) {
                    throw new Error("Could not fetch video information. Please check the URL and try again.");
                }

                const metadata = await response.json();
                const title = metadata.title || "";

                // Also try to get description from the video page
                let description = "";
                try {
                    const pageResponse = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
                    const pageHtml = await pageResponse.text();

                    // Extract description from meta tags
                    const descMatch = pageHtml.match(/<meta name="description" content="([^"]*)">/);
                    if (descMatch && descMatch[1]) {
                        description = descMatch[1];
                    }
                } catch (e) {
                    console.log("Could not fetch description, using title only");
                }

                textToProcess = `Video Title: ${title}\n${description ? `Description: ${description}` : ''}`;

                // Store YouTube thumbnail URL (maxresdefault for best quality, fallback to hqdefault)
                youtubeThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

                if (!title) {
                    throw new Error("Could not extract video information. Please try a different video.");
                }
            } catch (error: any) {
                console.error("YouTube metadata error:", error);
                throw new Error(error.message || "Failed to process YouTube video. Please check the URL and try again.");
            }
        }

        // Helper function to extract video ID from various YouTube URL formats
        function extractVideoId(url: string): string | null {
            const patterns = [
                /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
                /^([a-zA-Z0-9_-]{11})$/  // Direct video ID
            ];

            for (const pattern of patterns) {
                const match = url.match(pattern);
                if (match && match[1]) {
                    return match[1];
                }
            }
            return null;
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
        You are **SmartChef AI**, a world-class professional chef and culinary instructor.
        Your job is to create highly accurate, practical, and well-structured recipes based on ANY cooking-related content provided by the user.

        -------------------------
        ### CORE BEHAVIOR
        -------------------------

        You must:
        - Understand what the user wants even if they give **very little information**.
        - If the user gives **dish names only**, you must generate:
        - a complete recipe
        - accurate, realistic measurements
        - correct serving sizes
        - proper cooking times (with ranges)
        - clear tools & allergen list
        - high-quality instructions in the correct order
        - If the user gives a **YouTube link, title, or description**, infer the dish and produce the recipe.
        - If the user gives **raw text of a recipe**, clean it, structure it, and fix mistakes.
        - If you cannot identify ANY dish from the content, return the error schema.

        -------------------------
        ### TIMING RULES
        -------------------------

        TIMING GUIDELINES:
        - For cooking/baking times in instructions, USE TIME RANGES when appropriate (e.g., "14-20 minutes", "1-2 hours")
        - Time ranges are PREFERRED because they account for equipment variations and personal preferences
        - Only use single times when the timing is very specific (e.g., "boil for exactly 3 minutes")
        - Format: Use natural language like "15-20 minutes" or "1-2 hours" (our app handles these intelligently)

        INSTRUCTION STEP GUIDELINES (CRITICAL):
        - Each instruction step MUST be 35 words or fewer (strictly enforced)
        - Keep steps concise, clear, and action-focused
        - Use short sentences with active verbs (e.g., "Heat oil", "Mix until combined")
        - If a step is complex, break it into multiple shorter steps
        - Prioritize essential actions and timing information
        - Avoid unnecessary adjectives or explanations

        RULES:
        1. Return ONLY valid JSON. No markdown formatting, no code blocks.
        2. Follow this exact schema:
        {
        "recipe_name": "string",
        "summary": "string (brief description, max 2 sentences)",
        "prep_time": "string (e.g. '15 mins' or '15-20 mins')",
        "servings": "string (e.g. '4')",
        "ingredients": ["string (quantity + item)"],
        "instructions": ["string (MAX 35 WORDS per step - break long steps into multiple steps)"],
        "tools": ["string (list of kitchen tools needed, e.g. 'Whisk', 'Large Bowl')"],
        "allergens": ["string (potential allergens, e.g. 'Dairy', 'Nuts', 'Gluten')"],
        "image_keywords": "string (visual description for AI image generation, e.g. 'roasted chicken with herbs on a plate')"
        }
        3. Make the recipe realistic, detailed, and easy to follow.
        4. Each instruction step MUST NOT EXCEED 35 words. Break complex steps into multiple shorter steps.
        5. Include time ranges in instructions where cooking times may vary (e.g., "Bake for 25-30 minutes until golden brown")
        6. If you cannot determine what dish to make from the content, return:
        { "error": "Could not identify a recipe from this content. Please provide more specific cooking information." }

        -------------------------
        ### INTELLIGENCE RULES
        -------------------------

        You must behave like a real chef:
        - Choose realistic ingredient measurements.
        - Scale ingredients logically based on servings.
        - Write instructions like a cooking teacher — clear flow, no missing steps.
        - Add helpful details when needed (e.g., “until tender”, “until golden brown”).
        - Automatically detect allergens from ingredients.
        - Always give the tools needed (even basic ones like knife, pot, pan).
        - Generate a good visual description for image generation.

        Content to process:
      ${textToProcess}
    `;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            // Aggressive JSON cleanup
            let cleanText = text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            // Remove any text before the first { and after the last }
            const firstBrace = cleanText.indexOf('{');
            const lastBrace = cleanText.lastIndexOf('}');

            if (firstBrace !== -1 && lastBrace !== -1) {
                cleanText = cleanText.substring(firstBrace, lastBrace + 1);
            }

            // Fix common JSON issues
            cleanText = cleanText
                // Remove trailing commas in arrays and objects
                .replace(/,(\s*[}\]])/g, '$1')
                // Remove comments
                .replace(/\/\/.*/g, '')
                .replace(/\/\*[\s\S]*?\*\//g, '');

            let json;
            try {
                json = JSON.parse(cleanText);
            } catch (parseError: any) {
                // If parsing fails, log the problematic JSON for debugging
                console.error("Failed to parse JSON. Raw response:", text);
                console.error("Cleaned JSON:", cleanText);
                console.error("Parse error:", parseError.message);

                throw new Error(
                    "The AI returned invalid data. Please try again or rephrase your input."
                );
            }

            if (json.error) {
                throw new Error(json.error);
            }

            // Add YouTube thumbnail if available
            if (youtubeThumbnail) {
                json.youtube_thumbnail = youtubeThumbnail;
            }

            return json;
        } catch (e: any) {
            console.error("AI/Parse error:", e);
            throw new Error(e.message || "Failed to generate recipe from AI.");
        }
    },
});

export const getIngredientSubstitutions = action({
    args: {
        ingredient: v.string(),
        recipeName: v.string(),
    },
    handler: async (ctx, args) => {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is not defined.");
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        You are a professional chef.
        Suggest 3 practical substitutes for "${args.ingredient}" specifically for the recipe "${args.recipeName}".
        
        Return ONLY valid JSON in this format:
        {
          "substitutes": [
            {
              "name": "Substitute Name",
              "description": "Why it works and how to use it (e.g. 'Use 1:1 ratio, adds a nuttier flavor')"
            }
          ]
        }
        `;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            // Basic cleanup
            const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
            const firstBrace = cleanText.indexOf('{');
            const lastBrace = cleanText.lastIndexOf('}');
            const jsonStr = cleanText.substring(firstBrace, lastBrace + 1);

            return JSON.parse(jsonStr);
        } catch (e: any) {
            console.error("Substitution error:", e);
            throw new Error("Failed to get substitutions.");
        }
    }
});
