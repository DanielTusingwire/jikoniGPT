"use client"

import { useState } from "react"
import { ChefHeader } from "@/components/chef-header"
import { RecipeInput } from "@/components/recipe-input"
import { RecipeOverview } from "@/components/recipe-overview"
import { CookingInterface } from "@/components/cooking-interface"
import { LoadingModal } from "@/components/loading-modal"
import { AppLoader } from "@/components/app-loader"
import { useAction } from "convex/react"
import { api } from "@/convex/_generated/api"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<"home" | "overview" | "cooking">("home")
  const [generatedRecipe, setGeneratedRecipe] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingType, setLoadingType] = useState<"text" | "youtube">("text")
  const generateRecipeAction = useAction(api.actions.generateRecipe)

  const handleGenerateRecipe = async (input: string, inputType: "youtube" | "text") => {
    setIsLoading(true)
    setLoadingType(inputType)
    try {
      // const response = await fetch("/api/generate-recipe", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ input, inputType }),
      // })

      // if (!response.ok) {
      //   const errorData = await response.json()
      //   throw new Error(errorData.error || "Failed to generate recipe")
      // }

      // const recipe = await response.json()
      const recipe = await generateRecipeAction({ input, inputType })
      setGeneratedRecipe(recipe)
      setCurrentPage("overview")
    } catch (error: any) {
      console.error("Error generating recipe:", error)
      alert(error.message || "Failed to generate recipe. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleStartCooking = () => {
    setCurrentPage("cooking")
  }

  const handleBackHome = () => {
    setCurrentPage("home")
    setGeneratedRecipe(null)
  }

  const handleBackToOverview = () => {
    setCurrentPage("overview")
  }

  const handleCancelLoading = () => {
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <AppLoader />
      {/* Header removed as per request */}

      {isLoading && <LoadingModal onCancel={handleCancelLoading} inputType={loadingType} />}

      {currentPage === "home" ? (
        <RecipeInput onGenerate={handleGenerateRecipe} isLoading={isLoading} />
      ) : currentPage === "overview" ? (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <RecipeOverview recipe={generatedRecipe} onStartCooking={handleStartCooking} onBack={handleBackHome} />
        </div>
      ) : (
        <CookingInterface recipe={generatedRecipe} onBack={handleBackToOverview} />
      )}
    </main>
  )
}
