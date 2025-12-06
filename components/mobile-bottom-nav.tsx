"use client";

import { cn } from "@/lib/utils";
import { ChefHat, List, Mic, MicOff, ClipboardCheck } from "lucide-react";

interface MobileBottomNavProps {
  activeTab: "ingredients" | "prep" | "directions";
  onTabChange: (tab: "ingredients" | "prep" | "directions") => void;
  currentStep: number;
  totalSteps: number;
  progressPercentage: number;
  isScrollingDown: boolean;
  isVoiceListening: boolean;
  isVoiceSupported: boolean;
  onVoiceToggle: () => void;
}

export function MobileBottomNav({
  activeTab,
  onTabChange,
  currentStep,
  totalSteps,
  progressPercentage,
  isScrollingDown,
  isVoiceListening,
  isVoiceSupported,
  onVoiceToggle,
}: MobileBottomNavProps) {
  return (
    <>
      {/* Floating/Docked Voice Button */}
      {isVoiceSupported && (
        <button
          onClick={onVoiceToggle}
          className={cn(
            "md:hidden fixed z-[60] transition-all duration-500 ease-in-out flex flex-col items-center justify-center rounded-full shadow-xl active:scale-95 text-white overflow-hidden w-16 h-16 bg-neutral-900 dark:bg-neutral-800 border-0",
            isScrollingDown ? "bottom-8 right-6" : "bottom-24 right-6",
            isVoiceListening &&
            "bg-red-500 dark:bg-red-600 animate-pulse ring-4 ring-red-200 dark:ring-red-900 border-red-100 dark:border-red-900"
          )}
        >
          {isVoiceListening ? (
            <MicOff className="w-7 h-7" />
          ) : (
            <Mic className="w-7 h-7" />
          )}
        </button>
      )}

      {/* Navigation Bar Container */}
      <div
        className={cn(
          "md:hidden fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex flex-col",
          isScrollingDown ? "translate-y-[150%]" : "translate-y-0",
          "bottom-0"
        )}
      >
        {/* Progress Bar - Only show on directions tab */}
        {activeTab === "directions" && (
          <div className="w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800">
            <div className="h-1 w-full bg-neutral-100 dark:bg-neutral-800">
              <div
                className="h-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="px-4 py-1.5 flex justify-between text-[10px] text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wider">
              <span>
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span>{progressPercentage}%</span>
            </div>
          </div>
        )}

        {/* Navigation Bar */}
        <div
          className={cn(
            "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800 pb-[env(safe-area-inset-bottom)]",
            activeTab !== "directions" &&
            activeTab !== "prep" && // Also show shadow on prep tab? Or consistent?
            "shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]"
          )}
        >
          <div className="flex items-center justify-between px-8 py-3">
            {/* Ingredients Tab */}
            <button
              onClick={() => onTabChange("ingredients")}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all min-w-[80px]",
                activeTab === "ingredients"
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
              )}
            >
              <List
                className={cn(
                  "w-6 h-6",
                  activeTab === "ingredients" && "stroke-[2.5px]"
                )}
              />
              <span className="text-[10px] font-bold">Ingredients</span>
            </button>

            {/* Prep Tab */}
            <button
              onClick={() => onTabChange("prep")}
              className={cn(
                "flex flex-col items-center gap-1 px-2 py-1 rounded-xl transition-all min-w-[60px]",
                activeTab === "prep"
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
              )}
            >
              <ClipboardCheck
                className={cn(
                  "w-6 h-6",
                  activeTab === "prep" && "stroke-[2.5px]"
                )}
              />
              <span className="text-[10px] font-bold">Prep</span>
            </button>

            {/* Spacer removed */}

            {/* Directions Tab */}
            <button
              onClick={() => onTabChange("directions")}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all min-w-[80px]",
                activeTab === "directions"
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
              )}
            >
              <ChefHat
                className={cn(
                  "w-6 h-6",
                  activeTab === "directions" && "stroke-[2.5px]"
                )}
              />
              <span className="text-[10px] font-bold">Directions</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
