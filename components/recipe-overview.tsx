"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { ScrollAwareHeader } from "@/components/scroll-aware-header";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import chefAnimation from "../public/chef.json";

interface RecipeOverviewProps {
  recipe: {
    recipe_name: string;
    summary: string;
    prep_time: string;
    servings: string;
    difficulty?: string;
    cuisine?: string;
    meal_type?: string;
    dietary_tags?: string[];
    active_time?: string;
    passive_time?: string;
    total_time?: string;
    image?: string;
    nutritional_info?: {
      calories: string;
      fat?: string;
      carbs?: string;
      protein?: string;
    };
    tools?: string[];
    allergens?: string[];
    image_keywords?: string;
    youtube_thumbnail?: string;
  };
  onStartCooking: () => void;
  onBack: () => void;
}

export function RecipeOverview({
  recipe,
  onStartCooking,
  onBack,
}: RecipeOverviewProps) {
  const originalServings = Number.parseInt(recipe.servings) || 4;
  const [currentServings, setCurrentServings] = useState(originalServings);
  const [imageLoaded, setImageLoaded] = useState(false);

  const servingsMultiplier = currentServings / originalServings;

  const decreaseServings = () => {
    setCurrentServings(Math.max(1, currentServings - 1));
  };

  const increaseServings = () => {
    setCurrentServings(currentServings + 1);
  };

  // Calculate adjusted calories based on servings
  const adjustedCalories = recipe.nutritional_info?.calories
    ? Math.round(
        Number.parseInt(recipe.nutritional_info.calories) * servingsMultiplier
      )
    : null;

  // Determine which image to use: YouTube thumbnail or AI-generated
  const imageUrl = recipe.youtube_thumbnail
    ? recipe.youtube_thumbnail
    : `https://pollinations.ai/p/${encodeURIComponent(recipe.image_keywords || recipe.recipe_name)}?width=1280&height=720&seed=42&model=flux`;

  // Helper to scale values like "30g"
  const scaleValue = (val: string | undefined) => {
    if (!val) return null;
    const num = parseInt(val);
    if (isNaN(num)) return val;
    return Math.round(num * servingsMultiplier) + val.replace(/^[0-9.]+/, "");
  };

  const adjustedProtein = scaleValue(recipe.nutritional_info?.protein);
  const adjustedCarbs = scaleValue(recipe.nutritional_info?.carbs);
  const adjustedFat = scaleValue(recipe.nutritional_info?.fat);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <ScrollAwareHeader
        maxWidth="max-w-4xl"
        rightContent={
          <button
            onClick={onBack}
            className="p-2 -mr-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        }
      />

      {/* Main Content Container */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-24">
        {/* Hero Image */}
        <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden mb-8 shadow-sm relative">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 z-10">
              <div className="w-32 h-32 sm:w-48 sm:h-48">
                <Lottie animationData={chefAnimation} loop={true} />
              </div>
            </div>
          )}
          <img
            src={imageUrl}
            alt={recipe.recipe_name}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-700",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        {/* Title and Link */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
              {recipe.recipe_name}
            </h1>
            <button className="text-2xl text-muted-foreground hover:text-foreground transition-colors">
              🔗
            </button>
          </div>
        </div>

        {/* Description */}
        {/* Summary Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-5 sm:p-6 mb-8">
          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            {recipe.summary}
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {/* Enhanced Time Display */}
            {(recipe.active_time || recipe.total_time || recipe.prep_time) && (
              <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-4 rounded-2xl">
                <p className="text-sm text-muted-foreground mb-1">Time</p>
                {recipe.active_time && recipe.passive_time ? (
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground text-base sm:text-lg">
                      {recipe.total_time || recipe.prep_time}
                    </p>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span title="Active cooking time">
                        Active: {recipe.active_time}
                      </span>
                      {recipe.passive_time !== "0 mins" &&
                        recipe.passive_time !== "0" && (
                          <span title="Passive waiting time">
                            Passive: {recipe.passive_time}
                          </span>
                        )}
                    </div>
                  </div>
                ) : (
                  <p className="font-semibold text-foreground text-base sm:text-lg">
                    {recipe.total_time || recipe.prep_time}
                  </p>
                )}
              </div>
            )}
            <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-4 rounded-2xl">
              <p className="text-sm text-muted-foreground mb-1">Servings</p>
              <p className="font-semibold text-foreground text-base sm:text-lg">
                {currentServings}
              </p>
            </div>
            {adjustedCalories && (
              <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-4 rounded-2xl">
                <p className="text-sm text-muted-foreground mb-1">Calories</p>
                <p className="font-semibold text-foreground text-base sm:text-lg">
                  {adjustedCalories} kcal
                </p>
              </div>
            )}
            {adjustedProtein && (
              <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-4 rounded-2xl">
                <p className="text-sm text-muted-foreground mb-1">Protein</p>
                <p className="font-semibold text-foreground text-base sm:text-lg">
                  {adjustedProtein}
                </p>
              </div>
            )}
            {adjustedCarbs && (
              <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-4 rounded-2xl">
                <p className="text-sm text-muted-foreground mb-1">Carbs</p>
                <p className="font-semibold text-foreground text-base sm:text-lg">
                  {adjustedCarbs}
                </p>
              </div>
            )}
            {adjustedFat && (
              <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-4 rounded-2xl">
                <p className="text-sm text-muted-foreground mb-1">Fat</p>
                <p className="font-semibold text-foreground text-base sm:text-lg">
                  {adjustedFat}
                </p>
              </div>
            )}
          </div>

          {/* Serving Adjuster */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={decreaseServings}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-lg sm:text-xl font-semibold transition-colors"
            >
              −
            </button>
            <span className="text-lg font-semibold text-foreground">
              Cooking for {currentServings}
            </span>
            <button
              onClick={increaseServings}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-lg sm:text-xl font-semibold transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Things to Note Section */}
        {/* Things to Note Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 pl-2">
            Things to note
          </h2>

          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-5 sm:p-6">
            {/* Tools */}
            {recipe.tools && recipe.tools.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-xl text-sm text-foreground font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Allergens */}
            {recipe.allergens && recipe.allergens.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-foreground">
                    Potential Allergens
                  </h3>
                  <span
                    className="text-muted-foreground cursor-help"
                    title="Allergen information"
                  >
                    ⓘ
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recipe.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-xl text-sm font-medium border border-yellow-100"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recipe Details Section - Minimal Design */}
        {(recipe.difficulty ||
          recipe.cuisine ||
          recipe.meal_type ||
          (recipe.dietary_tags && recipe.dietary_tags.length > 0)) && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 pl-2">
              Recipe details
            </h2>

            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-5 sm:p-6">
              {/* Main Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {/* Difficulty */}
                {recipe.difficulty && (
                  <div className="space-y-1">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wide">
                      Difficulty
                    </p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {recipe.difficulty}
                    </p>
                  </div>
                )}

                {/* Cuisine */}
                {recipe.cuisine && (
                  <div className="space-y-1">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wide">
                      Cuisine
                    </p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {recipe.cuisine}
                    </p>
                  </div>
                )}

                {/* Meal Type */}
                {recipe.meal_type && (
                  <div className="space-y-1">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wide">
                      Meal Type
                    </p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {recipe.meal_type}
                    </p>
                  </div>
                )}
              </div>

              {/* Dietary Tags */}
              {recipe.dietary_tags && recipe.dietary_tags.length > 0 && (
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wide mb-3">
                    Dietary
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.dietary_tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-xs font-medium border border-neutral-200 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Start Cooking Button */}
        {/* Floating Start Cooking Button */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
          <button
            onClick={onStartCooking}
            className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-full shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg flex items-center justify-center gap-2"
          >
            <span>Lest's Start</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
