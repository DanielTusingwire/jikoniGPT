"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTimeBasedGreeting } from "@/lib/time-greeting";
import { ScrollAwareHeader } from "@/components/scroll-aware-header";
import { FeedbackModal } from "@/components/feedback-modal";
import { ThemeToggle } from "@/components/theme-toggle";
import { MessageSquare, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

import { useTypewriter } from "@/hooks/use-typewriter";

interface RecipeInputProps {
  onGenerate: (input: string, inputType: "youtube" | "text") => Promise<void>;
  isLoading: boolean;
  externalError?: string | null;
}

export function RecipeInput({
  onGenerate,
  isLoading,
  externalError,
}: RecipeInputProps) {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [recipeText, setRecipeText] = useState("");
  const [inputType, setInputType] = useState<"youtube" | "text">("text");
  const [error, setError] = useState("");
  const { greeting, icon } = useTimeBasedGreeting();
  const [isFocused, setIsFocused] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);

  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    if (externalError) {
      setError(externalError);
    }
  }, [externalError]);

  // Transition from greeting to "Find Recipe" after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Dynamic Typewriter Phrases
  const textPhrases = [
    "What are you craving right now?",
    "List ingredients like 'Chicken, Rice, Peppers'...",
    "Enter a dish name like 'Spaghetti Carbonara'...",
    "Describe the meal you want to cook...",
    "What shall we cook today?",
  ];

  const youtubePhrases = [
    "Paste a YouTube video URL here...",
    "Found a great recipe video? Drop the link...",
    "Enter the link to a cooking video...",
  ];

  const placeholderText = useTypewriter(
    inputType === "text" ? textPhrases : youtubePhrases
  );

  useEffect(() => {
    // Show tooltip after a short delay for effect, then hide after 30s
    const showTimer = setTimeout(() => setShowMobileTooltip(true), 20000);
    const hideTimer = setTimeout(() => setShowMobileTooltip(false), 11000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const input = inputType === "youtube" ? youtubeUrl : recipeText;

    if (!input.trim()) {
      setError("Please enter a YouTube URL or recipe text");
      return;
    }

    try {
      await onGenerate(input, inputType);
    } catch {
      // Error is handled by parent props now, but keep fallback
      setError("Failed to generate recipe. Please try again.");
    }
  };

  const textareaClass =
    "flex-grow text-2xl sm:text-3xl lg:text-4xl font-medium placeholder:text-neutral-300 dark:placeholder:text-neutral-600 text-neutral-900 dark:text-neutral-100 " +
    "bg-transparent border-none outline-none focus:outline-none focus-visible:outline-none " +
    "focus:ring-0 focus:ring-transparent shadow-none resize-none p-0 leading-tight";

  return (
    <>
      <div className="h-screen bg-neutral-100 dark:bg-neutral-950 flex flex-col overflow-hidden">
        <ScrollAwareHeader
          rightContent={
            <div className="flex items-center gap-2">
              {/* Desktop: Show both buttons */}
              <div className="hidden sm:flex items-center gap-1 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-700 rounded-full px-2 py-1">
                <ThemeToggle />
                <button
                  onClick={() => setShowFeedback(true)}
                  className="px-4 py-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-semibold rounded-full transition-colors"
                >
                  Feedback
                </button>
              </div>

              {/* Mobile: Pill icons */}
              <div className="sm:hidden flex items-center gap-3 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-700 rounded-full px-2 py-1">
                <ThemeToggle />
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowFeedback(true);
                      setShowMobileTooltip(false);
                    }}
                    className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </button>
                  {showMobileTooltip && (
                    <div className="absolute top-full right-0 mt-4 w-32 p-2.5 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-[10px] font-bold text-center rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 animate-in fade-in slide-in-from-top-2 z-50 pointer-events-none">
                      {/* Floating Bubbles Pointer */}
                      <div className="absolute -top-1 right-4 w-2.5 h-2.5 bg-white dark:bg-neutral-800 border-t border-l border-neutral-100 dark:border-neutral-700 rounded-full" />
                      <div className="absolute -top-2.5 right-3 w-1.5 h-1.5 bg-white dark:bg-neutral-800 rounded-full" />
                      Send your feedback
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        />

        <div className="flex-1 flex flex-col px-4 pt-20 pb-4">
          <div className="w-full max-w-2xl mx-auto space-y-3 sm:space-y-4">
            {/* Greeting Header with Transition */}
            <div className="text-left pl-2 min-h-[45px] sm:min-h-[55px] lg:min-h-[65px]">
              {showGreeting ? (
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  {icon === "sun" ? (
                    <Sun className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-500 animate-[spin_1s_ease-in-out]" />
                  ) : (
                    <Moon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-400 animate-[spin_1s_ease-in-out]" />
                  )}
                  <span
                    className={
                      showGreeting
                        ? ""
                        : "animate-out slide-out-to-top-full duration-500"
                    }
                  >
                    {greeting}
                  </span>
                </h1>
              ) : (
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-500">
                  What are you craving?
                </h2>
              )}
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* Tabs */}
              <div className="flex items-center gap-8 border-b border-transparent px-2">
                <button
                  onClick={() => setInputType("text")}
                  className={cn(
                    "pb-2 text-base sm:text-lg font-semibold transition-all relative",
                    inputType === "text"
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300"
                  )}
                >
                  Describe
                  {inputType === "text" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 dark:bg-neutral-100 rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setInputType("youtube")}
                  className={cn(
                    "pb-2 text-base sm:text-lg font-semibold transition-all relative",
                    inputType === "youtube"
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300"
                  )}
                >
                  Youtube
                  {inputType === "youtube" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 dark:bg-neutral-100 rounded-full" />
                  )}
                </button>
              </div>

              {/* Input Card */}
              <form onSubmit={handleSubmit} className="relative">
                <div
                  className={cn(
                    "bg-white dark:bg-neutral-900 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-7 min-h-[400px] sm:min-h-[380px] lg:min-h-[520px] flex flex-col transition-all duration-200",
                    isFocused
                      ? "border-2 border-neutral-900 dark:border-neutral-100 shadow-md"
                      : "border border-transparent"
                  )}
                >
                  {/* TEXTAREA */}
                  {inputType === "youtube" ? (
                    <textarea
                      placeholder={placeholderText}
                      value={youtubeUrl}
                      onChange={(e) => setYoutubeUrl(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className={textareaClass}
                      disabled={isLoading}
                    />
                  ) : (
                    <textarea
                      placeholder={placeholderText}
                      value={recipeText}
                      onChange={(e) => {
                        const val = e.target.value;
                        setRecipeText(
                          val.charAt(0).toUpperCase() + val.slice(1)
                        );
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className={textareaClass}
                      disabled={isLoading}
                    />
                  )}

                  {/* ERROR */}
                  {error && (
                    <div className="flex items-center gap-2 mt-3 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10 px-4 py-2.5 rounded-2xl animate-in fade-in slide-in-from-top-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-sm font-medium">{error}</span>
                    </div>
                  )}

                  {/* BUTTON */}
                  <div className="mt-4 sm:mt-5">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-11 sm:h-12 lg:h-13 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-base sm:text-lg font-medium rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Cooking..." : "Generate Recipe"}
                    </Button>
                  </div>
                </div>
              </form>

              <div className="text-center sm:text-left pt-1 pb-1">
                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed max-w-lg mx-auto sm:mx-0">
                  Enter a dish name (e.g., "Pasta Carbonara"), or list
                  ingredients, or paste a YouTube cooking video URL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
      />
    </>
  );
}
