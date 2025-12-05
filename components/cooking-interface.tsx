"use client";

import { useState, useRef, useEffect } from "react";
import {
  Download,
  MapPin,
  ArrowLeft,
  X,
  HelpCircle,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";
import { generateRecipePDF } from "@/lib/pdf-generator";
import { cn } from "@/lib/utils";
import { ScrollAwareHeader } from "@/components/scroll-aware-header";
import {
  VoiceControlButton,
  VoiceHelpModal,
} from "@/components/voice-control-button";
import { useVoiceControl } from "@/hooks/use-voice-control";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { SubstitutionModal } from "@/components/substitution-modal";
import { StoreFinderModal } from "@/components/store-finder-modal";

function AutoFitText({
  children,
  className,
  isActive,
}: {
  children: React.ReactNode;
  className?: string;
  isActive: boolean;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!isActive || !textRef.current) return;

    const el = textRef.current;

    // Reset to initial state (remove inline style) to check if default size fits
    el.style.fontSize = "";

    const checkOverflow = () => {
      // Check if content height is greater than visible height
      // 1px buffer for sub-pixel rendering differences
      return el.scrollHeight > el.clientHeight + 1;
    };

    // If it fits naturally, do nothing!
    if (!checkOverflow()) return;

    // Safety check: If content is WAY too long (e.g. > 1.3x container),
    // don't even try to shrink it. Just let it scroll.
    // This prevents shrinking text for massive paragraphs where it won't help anyway.
    if (el.scrollHeight > el.clientHeight * 1.3) return;

    // Start from the computed style
    let size = parseFloat(window.getComputedStyle(el).fontSize);
    const minSize = 24; // High floor - keep text readable!

    // Reduce incrementally until it fits or hits minimum
    while (checkOverflow() && size > minSize) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
      el.style.lineHeight = "1.4"; // Ensure tight but readable line height
    }
  }, [isActive, children]);

  return (
    <p
      ref={textRef}
      className={cn(
        className,
        isActive && "flex-1 overflow-y-auto scrollbar-hide"
      )}
    >
      {children}
    </p>
  );
}

interface CookingInterfaceProps {
  recipe: {
    recipe_name: string;
    ingredients: string[];
    instructions: string[];
  };

  onBack: () => void;
}

export function CookingInterface({ recipe, onBack }: CookingInterfaceProps) {
  const [activeTab, setActiveTab] = useState<"ingredients" | "directions">(
    "ingredients"
  );
  const [checkedIngredients, setCheckedIngredients] = useState<
    Record<number, boolean>
  >({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // Store timers as a map: "stepIndex-partIndex" -> { remaining: number, isRunning: boolean, minTime: number, maxTime: number }
  const [timers, setTimers] = useState<
    Record<
      string,
      {
        remaining: number;
        isRunning: boolean;
        minTime: number;
        maxTime: number;
      }
    >
  >({});
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showVoiceHelp, setShowVoiceHelp] = useState(false);

  // Substitution State

  // Substitution State
  const [subModalOpen, setSubModalOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [substitutions, setSubstitutions] = useState<any[] | null>(null);
  const [isSubLoading, setIsSubLoading] = useState(false);

  const getSubstitutions = useAction(api.actions.getIngredientSubstitutions);

  const handleSubstitute = async (ingredient: string) => {
    // Extract just the name part for better AI results
    const name = ingredient.split(",")[0].trim();

    setSelectedIngredient(name);
    setSubstitutions(null);
    setSubModalOpen(true);
    setIsSubLoading(true);

    try {
      const result = await getSubstitutions({
        ingredient: name,
        recipeName: recipe.recipe_name,
      });
      setSubstitutions(result.substitutions);
    } catch (error) {
      console.error("Failed to get substitutions", error);
    } finally {
      setIsSubLoading(false);
    }
  };

  const directionsContainerRef = useRef<HTMLDivElement>(null);
  const stepRefsRef = useRef<(HTMLDivElement | null)[]>([]);

  // For TikTok-style snap scroll
  const isSnappingRef = useRef(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Touch handling refs
  const touchStartYRef = useRef<number | null>(null);
  const touchLastYRef = useRef<number | null>(null);
  const touchStartTimeRef = useRef<number | null>(null);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Keep a ref of currentStepIndex for handlers (avoid stale closures)
  const currentStepIndexRef = useRef(currentStepIndex);
  useEffect(() => {
    currentStepIndexRef.current = currentStepIndex;
  }, [currentStepIndex]);

  // Helper function to find and control timer in current step
  const findCurrentStepTimer = (): string | null => {
    if (activeTab !== "directions") return null;

    const instruction = recipe.instructions[currentStepIndex];
    const timeMatch = instruction.match(
      /(\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?))/i
    );

    if (timeMatch) {
      // Find the index of this time text in the split instruction
      const parts = instruction.split(
        /(\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?))/gi
      );
      const timePartIndex = parts.findIndex((part) =>
        /\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?)/i.test(part)
      );

      if (timePartIndex !== -1) {
        return `${currentStepIndex}-${timePartIndex}`;
      }
    }

    return null;
  };

  const startCurrentStepTimer = () => {
    const timerKey = findCurrentStepTimer();
    if (!timerKey) {
      console.log("No timer found in current step");
      return;
    }

    const instruction = recipe.instructions[currentStepIndex];
    const t = extractTimer(instruction);

    if (t) {
      setTimers((prev) => {
        const current = prev[timerKey];
        if (current) {
          // Timer exists, start it if paused
          if (!current.isRunning) {
            return {
              ...prev,
              [timerKey]: {
                ...current,
                isRunning: true,
              },
            };
          }
          return prev;
        } else {
          // Initialize and start new timer
          return {
            ...prev,
            [timerKey]: {
              remaining: t.min,
              isRunning: true,
              minTime: t.min,
              maxTime: t.max,
            },
          };
        }
      });
      console.log("Timer started for step", currentStepIndex + 1);
    }
  };

  const pauseCurrentStepTimer = () => {
    const timerKey = findCurrentStepTimer();
    if (!timerKey) {
      console.log("No timer found in current step");
      return;
    }

    setTimers((prev) => {
      const current = prev[timerKey];
      if (current && current.isRunning) {
        return {
          ...prev,
          [timerKey]: {
            ...current,
            isRunning: false,
          },
        };
      }
      return prev;
    });
    console.log("Timer paused for step", currentStepIndex + 1);
  };

  const resumeCurrentStepTimer = () => {
    const timerKey = findCurrentStepTimer();
    if (!timerKey) {
      console.log("No timer found in current step");
      return;
    }

    setTimers((prev) => {
      const current = prev[timerKey];
      if (current && !current.isRunning) {
        return {
          ...prev,
          [timerKey]: {
            ...current,
            isRunning: true,
          },
        };
      }
      return prev;
    });
    console.log("Timer resumed for step", currentStepIndex + 1);
  };

  // Voice Control Integration
  const voiceControl = useVoiceControl({
    onNextStep: () => {
      if (
        activeTab === "directions" &&
        currentStepIndex < recipe.instructions.length - 1
      ) {
        const nextIndex = currentStepIndex + 1;
        setCurrentStepIndex(nextIndex);
        stepRefsRef.current[nextIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    onPreviousStep: () => {
      if (activeTab === "directions" && currentStepIndex > 0) {
        const prevIndex = currentStepIndex - 1;
        setCurrentStepIndex(prevIndex);
        stepRefsRef.current[prevIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    onGoToStep: (stepIndex: number) => {
      if (
        activeTab === "directions" &&
        stepIndex >= 0 &&
        stepIndex < recipe.instructions.length
      ) {
        setCurrentStepIndex(stepIndex);
        stepRefsRef.current[stepIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    onStartTimer: startCurrentStepTimer,
    onPauseTimer: pauseCurrentStepTimer,
    onResumeTimer: resumeCurrentStepTimer,
    onShowIngredients: () => setActiveTab("ingredients"),
    onShowDirections: () => setActiveTab("directions"),
    onReadStep: undefined, // The hook handles reading internally
    currentStepText:
      activeTab === "directions"
        ? recipe.instructions[currentStepIndex]
        : undefined,
    totalSteps: recipe.instructions.length,
  });

  const extractTimer = (text: string): { min: number; max: number } | null => {
    // Match time ranges like "14-20 minutes" or "1-2 hours"
    const rangeMatch = text.match(
      /(\d+)\s*[-–to]+\s*(\d+)\s*(minutes?|mins?|hours?|hrs?)/i
    );
    if (rangeMatch) {
      const minVal = parseInt(rangeMatch[1]);
      const maxVal = parseInt(rangeMatch[2]);
      const unit = rangeMatch[3].toLowerCase();
      const multiplier = unit.includes("hour") ? 3600 : 60;
      return { min: minVal * multiplier, max: maxVal * multiplier };
    }

    // Match single time like "15 minutes" - treat as both min and max
    const singleMatch = text.match(/(\d+)\s*(minutes?|mins?|hours?|hrs?)/i);
    if (!singleMatch) return null;
    const val = parseInt(singleMatch[1]);
    const unit = singleMatch[2].toLowerCase();
    const seconds = unit.includes("hour") ? val * 3600 : val * 60;
    return { min: seconds, max: seconds };
  };

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Timer Logic - Decrement all running timers
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        const next = { ...prev };
        let hasChanges = false;

        Object.keys(next).forEach((key) => {
          if (next[key].isRunning && next[key].remaining > 0) {
            next[key] = { ...next[key], remaining: next[key].remaining - 1 };
            hasChanges = true;

            // Don't auto-pause - let it continue to maxTime
            // User can manually pause/stop
          }
        });

        return hasChanges ? next : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStepIngredients = (step: string): string[] =>
    recipe.ingredients.filter((ing) =>
      step.toLowerCase().includes(ing.split(",")[0].toLowerCase())
    );

  // Detect active step (keep this untouched)
  useEffect(() => {
    if (activeTab !== "directions") return;

    const observer = new IntersectionObserver(
      (entries) => {
        let topIndex = currentStepIndexRef.current;
        let maxRatio = 0;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const idx = Number(entry.target.getAttribute("data-step-index"));
            if (!isNaN(idx)) topIndex = idx;
          }
        }

        if (maxRatio > 0.4) setCurrentStepIndex(topIndex);
      },
      { threshold: 0.5 }
    );

    stepRefsRef.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, [activeTab]);

  // 👉 **TikTok Vertical Feed Scroll (wheel + touch)**
  useEffect(() => {
    if (activeTab !== "directions") return;

    const container = directionsContainerRef.current;
    if (!container) return;

    /* ---------- WHEEL (desktop) ---------- */
    const onWheel = (e: WheelEvent) => {
      // If already snapping, prevent default and ignore
      if (isSnappingRef.current) {
        e.preventDefault();
        return;
      }

      // Prevent the browser's default smooth continuous scroll
      e.preventDefault();

      const direction = e.deltaY > 0 ? "down" : "up";

      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);

      // Buffer multiple wheel events into one snapping action
      wheelTimeoutRef.current = setTimeout(() => {
        isSnappingRef.current = true;

        const idx = currentStepIndexRef.current;
        if (direction === "down" && idx < recipe.instructions.length - 1) {
          stepRefsRef.current[idx + 1]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        } else if (direction === "up" && idx > 0) {
          stepRefsRef.current[idx - 1]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }

        // keep snapping locked briefly while animation runs
        setTimeout(() => {
          isSnappingRef.current = false;
        }, 450);
      }, 50);
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    /* ---------- TOUCH (mobile / touch devices) ---------- */
    const SWIPE_THRESHOLD = 40; // px — Option A: very sensitive (TikTok-like)
    const FLING_VELOCITY_THRESHOLD = 0.3; // px per ms, if user flicks quickly

    const onTouchStart = (ev: TouchEvent) => {
      if (isSnappingRef.current) {
        // If snapping in progress, do nothing
        ev.preventDefault();
        return;
      }
      const t = ev.touches[0];
      touchStartYRef.current = t.clientY;
      touchLastYRef.current = t.clientY;
      touchStartTimeRef.current = Date.now();

      // clear any pending timeouts
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = null;
      }
    };

    const onTouchMove = (ev: TouchEvent) => {
      // Prevent native scroll while we're detecting a vertical swipe for our feed
      // Only prevent if we have a single touch (no pinch)
      if (ev.touches.length === 1) {
        ev.preventDefault();
        const t = ev.touches[0];
        touchLastYRef.current = t.clientY;
      }
    };

    const attemptSnap = (direction: "up" | "down") => {
      if (isSnappingRef.current) return;
      isSnappingRef.current = true;

      const idx = currentStepIndexRef.current;
      if (direction === "down" && idx < recipe.instructions.length - 1) {
        stepRefsRef.current[idx + 1]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else if (direction === "up" && idx > 0) {
        stepRefsRef.current[idx - 1]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      // unlock after animation time
      setTimeout(() => {
        isSnappingRef.current = false;
      }, 450);
    };

    const onTouchEnd = (ev: TouchEvent) => {
      const startY = touchStartYRef.current;
      const lastY = touchLastYRef.current;
      const startTime = touchStartTimeRef.current;
      touchStartYRef.current = null;
      touchLastYRef.current = null;
      touchStartTimeRef.current = null;

      if (startY == null || lastY == null || startTime == null) return;

      const deltaY = startY - lastY;
      const elapsed = Date.now() - startTime;
      const velocity = Math.abs(deltaY) / Math.max(1, elapsed); // px per ms

      // Quick fling with small move => should still count
      if (
        Math.abs(deltaY) >= SWIPE_THRESHOLD ||
        velocity >= FLING_VELOCITY_THRESHOLD
      ) {
        if (deltaY > 0) {
          // swipe up -> go to next (down direction)
          attemptSnap("down");
        } else {
          // swipe down -> go to previous (up direction)
          attemptSnap("up");
        }
      } else {
        // Not enough movement — snap back to current card to avoid partial scroll
        const idx = currentStepIndexRef.current;
        stepRefsRef.current[idx]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      // tiny safety unlock if something went wrong
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = setTimeout(() => {
        isSnappingRef.current = false;
        touchTimeoutRef.current = null;
      }, 800);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: false });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd, { passive: false });
    container.addEventListener("touchcancel", onTouchEnd, { passive: false });

    // Clean up
    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("touchcancel", onTouchEnd);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = null;
      }
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = null;
      }
    };
  }, [activeTab, recipe.instructions.length]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleAllIngredients = () =>
    setCheckedIngredients((prev) => {
      const allChecked = recipe.ingredients.every((_, i) => prev[i]);
      if (allChecked) return {};
      return Object.fromEntries(recipe.ingredients.map((_, i) => [i, true]));
    });

  const handleDownloadPDF = () => generateRecipePDF(recipe as any);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-950">
      <style>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .timer-shine {
          background: linear-gradient(to right, #15803d 20%, #fbbf24 40%, #fbbf24 60%, #15803d 80%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2s linear 1 forwards;
        }
      `}</style>
      <ScrollAwareHeader
        maxWidth="max-w-4xl"
        rightContent={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowVoiceHelp(true)}
              className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
              title="Voice Commands Help"
            >
              <HelpCircle className="w-6 h-6" />
            </button>
            <button
              onClick={onBack}
              className="p-2 -mr-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        }
      />

      {/* Tabs */}
      <div
        className={cn(
          "sticky z-30 hidden md:flex justify-center px-4 py-4 pointer-events-none transition-all duration-500 ease-in-out",
          isScrollingDown ? "top-2" : "top-[80px]"
        )}
      >
        <div className="pointer-events-auto bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl shadow-lg rounded-full p-1.5 flex items-center gap-1 border border-white/20 dark:border-neutral-700/20 ring-1 ring-black/5 dark:ring-white/5">
          <button
            onClick={() => setActiveTab("ingredients")}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
              activeTab === "ingredients"
                ? "bg-neutral-900 text-white shadow-md transform scale-105"
                : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
            )}
          >
            Ingredients
          </button>

          <button
            onClick={() => setActiveTab("directions")}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
              activeTab === "directions"
                ? "bg-neutral-900 text-white shadow-md transform scale-105"
                : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
            )}
          >
            Directions
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="pt-24 px-4 sm:px-6 pb-4 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          {recipe.recipe_name}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "ingredients" ? (
          // -------------------------
          // INGREDIENTS TAB (unchanged)
          // -------------------------
          <div className="px-4 sm:px-6 py-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex items-end justify-between mb-2">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    Recommended Ingredients
                  </h2>
                  <p className="text-neutral-500 text-sm mt-1">
                    Select the ingredients you have missing to view nearby store
                    options or add to your list.
                  </p>
                </div>
                <button
                  onClick={toggleAllIngredients}
                  className="text-sm font-semibold text-neutral-900 underline decoration-2 underline-offset-4 hover:text-neutral-600 whitespace-nowrap ml-4"
                >
                  Select All
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-2 border border-neutral-100 dark:border-neutral-800 mb-24">
              <div className="space-y-1">
                {recipe.ingredients.map((ingredient, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    onClick={() =>
                      setCheckedIngredients((prev) => ({
                        ...prev,
                        [idx]: !prev[idx],
                      }))
                    }
                  >
                    <div className="flex-1">
                      {(() => {
                        // Split ingredient into name and measurement
                        const parts = ingredient.split(",");
                        const name = parts[0]?.trim() || ingredient;
                        const measurement = parts.slice(1).join(",").trim();

                        return (
                          <div>
                            <p
                              className={cn(
                                "text-lg font-semibold transition-all",
                                checkedIngredients[idx]
                                  ? "text-neutral-400 dark:text-neutral-500 line-through"
                                  : "text-neutral-900 dark:text-neutral-100"
                              )}
                            >
                              {name}
                            </p>
                            {measurement && (
                              <p
                                className={cn(
                                  "text-sm mt-1 transition-all",
                                  checkedIngredients[idx]
                                    ? "text-neutral-300 dark:text-neutral-600 line-through"
                                    : "text-neutral-500 dark:text-neutral-400"
                                )}
                              >
                                {measurement}
                              </p>
                            )}
                          </div>
                        );
                      })()}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubstitute(ingredient);
                      }}
                      className="p-2 text-neutral-300 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
                      title="Find substitutes"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>

                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all",
                        checkedIngredients[idx]
                          ? "bg-neutral-900 border-neutral-900"
                          : "border-neutral-200 group-hover:border-neutral-300"
                      )}
                    >
                      {checkedIngredients[idx] && (
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop FABs */}
            <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 gap-4 w-full max-w-md px-6">
              <button
                onClick={handleDownloadPDF}
                className="flex-1 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 font-bold py-4 px-6 rounded-full shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-95"
              >
                <Download className="w-5 h-5" />
                Save
              </button>
              <button
                onClick={() => setStoreModalOpen(true)}
                className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 px-6 rounded-full shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-95"
              >
                <MapPin className="w-5 h-5" />
                Stores
              </button>
            </div>

            {/* Mobile FABs (Icons Only) */}
            {activeTab === "ingredients" && (
              <div className="md:hidden fixed bottom-24 left-6 z-40 flex flex-col gap-3">
                <button
                  onClick={() => setStoreModalOpen(true)}
                  className="w-12 h-12 bg-neutral-900 text-white rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform"
                >
                  <MapPin className="w-5 h-5" />
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="w-12 h-12 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          // -------------------------
          // DIRECTIONS TAB
          // -------------------------
          <div
            ref={directionsContainerRef}
            className="h-full overflow-y-scroll px-4 sm:px-6 py-8 max-w-4xl mx-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            <div className="pb-32">
              {recipe.instructions.map((instruction, idx) => {
                const isActive = idx === currentStepIndex;
                const stepIngredients = getStepIngredients(instruction);

                return (
                  <div
                    key={idx}
                    ref={(el) => (stepRefsRef.current[idx] = el)}
                    data-step-index={idx}
                    className={cn(
                      "transition-all duration-500 rounded-3xl overflow-hidden snap-center snap-always mb-6 last:mb-0",
                      "h-[calc(100vh-280px)] md:h-auto md:min-h-[calc(100vh-280px)]",
                      isActive
                        ? "bg-white dark:bg-neutral-900 scale-100 opacity-100"
                        : "bg-neutral-200 dark:bg-neutral-800 scale-95 opacity-50 cursor-pointer hover:opacity-70"
                    )}
                    onClick={() =>
                      !isActive &&
                      stepRefsRef.current[idx]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className={cn(
                            "px-3 py-1 rounded-lg flex items-center gap-2",
                            isActive ? "bg-neutral-100 dark:bg-neutral-800" : "bg-neutral-300 dark:bg-neutral-700"
                          )}
                        >
                          <span className="font-bold text-neutral-900 dark:text-neutral-100">
                            Step {idx + 1}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                        </div>
                      </div>

                      {isActive && stepIngredients.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {stepIngredients.map((ing, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-sm text-neutral-600 dark:text-neutral-300 font-medium"
                            >
                              {ing.split(",")[0]}
                            </span>
                          ))}
                        </div>
                      )}

                      {(() => {
                        // Extract subheader if present (pattern: **Title:** at start)
                        const subheaderMatch =
                          instruction.match(/^\*\*(.+?):\*\*\s*/);
                        const subheader = subheaderMatch
                          ? subheaderMatch[1]
                          : null;
                        const mainText =
                          subheader && subheaderMatch
                            ? instruction.slice(subheaderMatch[0].length)
                            : instruction;

                        return (
                          <>
                            {subheader && isActive && (
                              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                                {subheader}
                              </h3>
                            )}

                            <AutoFitText
                              isActive={isActive}
                              className={cn(
                                "font-medium transition-all",
                                isActive
                                  ? "text-3xl sm:text-4xl leading-[1.5] text-neutral-900 dark:text-neutral-100"
                                  : "text-lg text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed"
                              )}
                            >
                              {isActive
                                ? mainText
                                  .split(
                                    /(\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?))/gi
                                  )
                                  .map((part, i) => {
                                    if (
                                      /\d+(?:\s*[-–to]+\s*\d+)?\s*(?:minutes?|mins?|hours?|hrs?)/i.test(
                                        part
                                      )
                                    ) {
                                      const t = extractTimer(part);
                                      const timerKey = `${idx}-${i}`;
                                      const timerState = timers[timerKey];
                                      const hasTimer =
                                        timerState &&
                                        timerState.remaining > 0;

                                      // Determine timer state for color coding
                                      let timerStatus:
                                        | "inactive"
                                        | "running"
                                        | "check"
                                        | "max" = "inactive";
                                      if (hasTimer) {
                                        const elapsed =
                                          timerState.minTime -
                                          timerState.remaining;
                                        if (elapsed < 0) {
                                          // Still counting down to minTime
                                          timerStatus = "running";
                                        } else {
                                          // Past minTime - check if we're in the range or past maxTime
                                          const totalRange =
                                            timerState.maxTime -
                                            timerState.minTime;
                                          const timeIntoRange = elapsed;
                                          if (timeIntoRange <= totalRange) {
                                            // Still in check zone (between min and max)
                                            timerStatus = "check";
                                          } else {
                                            // Past max time
                                            timerStatus = "max";
                                          }
                                        }
                                      }

                                      return (
                                        <span
                                          key={i}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            if (t) {
                                              setTimers((prev) => {
                                                const current =
                                                  prev[timerKey];
                                                if (current) {
                                                  // Toggle running state
                                                  return {
                                                    ...prev,
                                                    [timerKey]: {
                                                      ...current,
                                                      isRunning:
                                                        !current.isRunning,
                                                    },
                                                  };
                                                } else {
                                                  // Initialize and start at minTime
                                                  return {
                                                    ...prev,
                                                    [timerKey]: {
                                                      remaining: t.min,
                                                      isRunning: true,
                                                      minTime: t.min,
                                                      maxTime: t.max,
                                                    },
                                                  };
                                                }
                                              });
                                            }
                                          }}
                                          className={cn(
                                            "font-bold cursor-pointer inline-flex items-center gap-2 px-3 py-1 rounded-2xl transition-all",
                                            timerStatus === "running" &&
                                            "bg-green-50 text-green-600 border-2 border-green-200",
                                            timerStatus === "check" &&
                                            "bg-yellow-50 text-yellow-700 border-2 border-yellow-300 animate-pulse",
                                            timerStatus === "max" &&
                                            "bg-red-50 text-red-600 border-2 border-red-300 animate-pulse",
                                            timerStatus === "inactive" &&
                                            "text-green-600 hover:bg-green-50",
                                            isActive &&
                                            timerStatus === "inactive" &&
                                            "timer-shine"
                                          )}
                                          style={{
                                            WebkitTextFillColor:
                                              isActive &&
                                                timerStatus === "inactive"
                                                ? "transparent"
                                                : "initial",
                                          }}
                                        >
                                          {hasTimer ? (
                                            <span className="font-mono flex items-center gap-1.5">
                                              {formatTime(
                                                timerState.remaining
                                              )}
                                              {timerStatus === "check" && (
                                                <span className="text-xs font-bold">
                                                  ✓ Check
                                                </span>
                                              )}
                                              {timerStatus === "max" && (
                                                <span className="text-xs font-bold">
                                                  ⚠ Max
                                                </span>
                                              )}
                                              {!timerState.isRunning && (
                                                <span className="text-xs">
                                                  (Paused)
                                                </span>
                                              )}
                                            </span>
                                          ) : (
                                            part
                                          )}
                                        </span>
                                      );
                                    }
                                    return <span key={i}>{part}</span>;
                                  })
                                : instruction}
                            </AutoFitText>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {activeTab === "directions" && (
        <div className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200 dark:border-neutral-700 shadow-2xl rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Step {currentStepIndex + 1}{" "}
                <span className="text-neutral-400 dark:text-neutral-500">
                  of {recipe.instructions.length}
                </span>
              </span>
              <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                {Math.round(
                  ((currentStepIndex + 1) / recipe.instructions.length) * 100
                )}
                %
              </span>
            </div>

            <div className="flex gap-1.5 h-3">
              {recipe.instructions.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-full flex-1 rounded-full transition-all duration-300",
                    i <= currentStepIndex ? "bg-neutral-900 dark:bg-neutral-100" : "bg-neutral-100 dark:bg-neutral-800"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Voice Control */}
      <div className="hidden md:block">
        <VoiceControlButton
          isListening={voiceControl.isListening}
          isSupported={voiceControl.isSupported}
          lastCommand={voiceControl.lastCommand}
          error={voiceControl.error}
          onStartListening={voiceControl.startListening}
          onStopListening={voiceControl.stopListening}
          onShowHelp={() => setShowVoiceHelp(true)}
        />
      </div>

      <VoiceHelpModal
        isOpen={showVoiceHelp}
        onClose={() => setShowVoiceHelp(false)}
      />

      {/* Mobile Bottom Nav */}
      <MobileBottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        currentStep={currentStepIndex}
        totalSteps={recipe.instructions.length}
        progressPercentage={Math.round(
          ((currentStepIndex + 1) / recipe.instructions.length) * 100
        )}
        isScrollingDown={isScrollingDown}
        isVoiceListening={voiceControl.isListening}
        isVoiceSupported={voiceControl.isSupported}
        onVoiceToggle={() => {
          if (voiceControl.isListening) {
            voiceControl.stopListening();
          } else {
            voiceControl.startListening();
          }
        }}
      />

      <SubstitutionModal
        isOpen={subModalOpen}
        onClose={() => setSubModalOpen(false)}
        ingredient={selectedIngredient}
        substitutes={substitutions}
        isLoading={isSubLoading}
      />

      <StoreFinderModal
        isOpen={storeModalOpen}
        onClose={() => setStoreModalOpen(false)}
      />
    </div>
  );
}
