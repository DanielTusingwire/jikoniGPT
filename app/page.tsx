"use client";

import { useState, useEffect } from "react";
import { ChefHeader } from "@/components/chef-header";
import { RecipeInput } from "@/components/recipe-input";
import { RecipeOverview } from "@/components/recipe-overview";
import { CookingInterface } from "@/components/cooking-interface";
import { LoadingModal } from "@/components/loading-modal";
import { AppLoader } from "@/components/app-loader";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAnalytics } from "@/hooks/use-analytics";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "overview" | "cooking"
  >("home");
  const [generatedRecipe, setGeneratedRecipe] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingType, setLoadingType] = useState<"text" | "youtube">("text");
  const [error, setError] = useState<string | null>(null);
  const generateRecipeAction = useAction(api.actions.generateRecipe);
  const { trackEvent } = useAnalytics();

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Track App Open
  useEffect(() => {
    trackEvent("app_open");
  }, [trackEvent]);

  const getFriendlyErrorMessage = (error: any) => {
    const message = error.message || String(error);

    // Map common Convex/Network errors to friendly messages
    if (message.includes("Network") || message.includes("offline")) {
      return "It seems you're offline. Please check your internet connection.";
    }
    if (message.includes("GEMINI_API_KEY")) {
      return "OChef is missing their secret ingredient (API Key). Please check the server configuration.";
    }
    if (message.includes("Invalid YouTube")) {
      return "That video URL doesn't look quite right. Please try a different one.";
    }
    if (message.includes("Could not identify a recipe")) {
      return "I couldn't find a recipe in that content. Please try being more specific!";
    }
    if (message.includes("Convex")) {
      return "Our kitchen is a bit busy right now. Please try again in a moment.";
    }

    return "Something went wrong in the kitchen. Please try again.";
  };

  const handleGenerateRecipe = async (
    input: string,
    inputType: "youtube" | "text"
  ) => {
    setIsLoading(true);
    setError(null);
    setLoadingType(inputType);
    trackEvent("generate_recipe_start", { inputType });

    try {
      const recipe = await generateRecipeAction({ input, inputType });
      setGeneratedRecipe(recipe);
      setCurrentPage("overview");
      trackEvent("generate_recipe_success", { recipeName: recipe.recipe_name });
    } catch (err: any) {
      console.error("Error generating recipe:", err);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartCooking = () => {
    setCurrentPage("cooking");
  };

  const handleBackHome = () => {
    setCurrentPage("home");
    setGeneratedRecipe(null);
    setError(null);
  };

  const handleBackToOverview = () => {
    setCurrentPage("overview");
  };

  const handleCancelLoading = () => {
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <AppLoader />
      {/* Header removed as per request */}

      {isLoading && (
        <LoadingModal onCancel={handleCancelLoading} inputType={loadingType} />
      )}

      {currentPage === "home" ? (
        <RecipeInput
          onGenerate={handleGenerateRecipe}
          isLoading={isLoading}
          externalError={error}
        />
      ) : currentPage === "overview" ? (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <RecipeOverview
            recipe={generatedRecipe}
            onStartCooking={handleStartCooking}
            onBack={handleBackHome}
          />
        </div>
      ) : (
        <CookingInterface
          recipe={generatedRecipe}
          onBack={handleBackToOverview}
        />
      )}
    </main>
  );
}
