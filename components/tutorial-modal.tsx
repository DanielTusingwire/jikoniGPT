"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MousePointer2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TutorialModal({ isOpen, onClose }: TutorialModalProps) {
  // Main view state
  const [view, setView] = useState<"input" | "loading" | "result" | "finished">(
    "input"
  );

  // Input View State
  const [inputTab, setInputTab] = useState<"text" | "youtube">("text");
  const [typedText, setTypedText] = useState("");

  // Result View State
  const [resultTab, setResultTab] = useState<
    "overview" | "ingredients" | "directions"
  >("overview");

  // Animation State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [stepLabel, setStepLabel] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    let isActive = true;

    const runAnimationLoop = async () => {
      while (isActive) {
        // RESET
        setView("input");
        setInputTab("text");
        setTypedText("");
        setResultTab("overview");

        // --- STEP 1: DESCRIBE INPUT ---
        setStepLabel("1. Describe what you want");
        setCursorPos({ x: 20, y: 15 }); // Start at Describe tab
        await wait(1000);

        // Move to Textarea
        setCursorPos({ x: 50, y: 40 });
        await wait(800);

        // Type text
        const textToType = "Chicken, Rice, Peppers";
        for (let i = 0; i <= textToType.length; i++) {
          if (!isActive) break;
          setTypedText(textToType.slice(0, i));
          await wait(50);
        }
        await wait(800);

        // --- STEP 2: YOUTUBE INPUT ---
        setStepLabel("2. Or use a YouTube link");
        // Move to Youtube Tab
        setCursorPos({ x: 75, y: 15 });
        await wait(800);

        // Click Tab
        setIsClicking(true);
        setInputTab("youtube");
        setTypedText(""); // Clear previous
        await wait(200);
        setIsClicking(false);
        await wait(500);

        // Move to Textarea
        setCursorPos({ x: 50, y: 40 });
        await wait(800);

        // Type Youtube Link
        const urlToType = "youtube.com/watch?v=...";
        for (let i = 0; i <= urlToType.length; i++) {
          if (!isActive) break;
          setTypedText(urlToType.slice(0, i));
          await wait(30);
        }
        await wait(500);

        // --- STEP 3: GENERATE ---
        setStepLabel("3. Generate Recipe");
        // Move to Button
        setCursorPos({ x: 50, y: 85 });
        await wait(800);

        // Click Generate
        setIsClicking(true);
        await wait(200);
        setIsClicking(false);

        // Show Loader
        setView("loading");
        setStepLabel("Creating your recipe...");
        await wait(2000);

        // --- STEP 4: OVERVIEW ---
        setView("result");
        setResultTab("overview");
        setStepLabel("4. View Recipe Card");
        setCursorPos({ x: 50, y: 50 }); // Center cursor
        await wait(1500);

        // --- STEP 5: INGREDIENTS ---
        setStepLabel("5. Check Ingredients");
        // Move to Ingredients Tab (Middle tab)
        setCursorPos({ x: 50, y: 15 });
        await wait(1000);

        // Click Tab
        setIsClicking(true);
        setResultTab("ingredients");
        await wait(200);
        setIsClicking(false);
        await wait(1500);

        // --- STEP 6: DIRECTIONS ---
        setStepLabel("6. Follow Directions");
        // Move to Directions Tab (Right tab)
        setCursorPos({ x: 80, y: 15 });
        await wait(1000);

        // Click Tab
        setIsClicking(true);
        setResultTab("directions");
        await wait(200);
        setIsClicking(false);
        await wait(1000);

        // Scroll Reading simulaton
        setCursorPos({ x: 80, y: 80 });
        await wait(1000);

        // --- STEP 7: FINISHED ---
        setView("finished");
        setStepLabel("7. You are ready!");
        await wait(2500);

        await wait(500); // End of loop
      }
    };

    runAnimationLoop();

    return () => {
      isActive = false;
    };
  }, [isOpen]);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 pb-2 flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Quick Tutorial
                </h2>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={stepLabel}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm font-medium text-primary mt-1"
                  >
                    {stepLabel}
                  </motion.p>
                </AnimatePresence>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            {/* Animation Container */}
            <div className="p-6 pt-4">
              <div className="relative bg-neutral-100 dark:bg-neutral-950 rounded-3xl p-6 aspect-[4/3] overflow-hidden border border-neutral-200 dark:border-neutral-800 flex flex-col">
                {/* --- VIEW CONTENT --- */}
                {view === "input" && (
                  <MockInput
                    activeTab={inputTab}
                    typedText={typedText}
                    isClicking={isClicking}
                    cursorPos={cursorPos}
                  />
                )}

                {view === "loading" && <MockLoader />}

                {view === "result" && <MockResult activeTab={resultTab} />}

                {view === "finished" && <MockFinished />}

                {/* --- CURSOR OVERLAY (Global) --- */}
                {view !== "loading" && view !== "finished" && (
                  <motion.div
                    className="absolute pointer-events-none z-50 text-neutral-900 dark:text-neutral-100 drop-shadow-xl"
                    animate={{
                      left: `${cursorPos.x}%`,
                      top: `${cursorPos.y}%`,
                    }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 200,
                      restDelta: 0.001,
                    }}
                  >
                    <MousePointer2
                      className={cn(
                        "w-6 h-6 fill-neutral-900 dark:fill-neutral-100 stroke-white dark:stroke-neutral-900 stroke-2",
                        isClicking && "scale-90"
                      )}
                    />
                    {isClicking && (
                      <span className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-neutral-400/30 animate-ping" />
                    )}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-0">
              <button
                onClick={onClose}
                className="w-full bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-bold py-3.5 rounded-xl transition-all active:scale-[0.98]"
              >
                Got it, let's cook!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- SUB COMPONENTS ---

function MockInput({ activeTab, typedText, isClicking, cursorPos }: any) {
  return (
    <div className="flex flex-col h-full gap-4 relative z-10 w-full animate-in fade-in zoom-in-95 duration-300">
      {/* Tabs */}
      <div className="flex items-center gap-6 px-2">
        <div
          className={cn(
            "pb-2 font-semibold text-xs relative",
            activeTab === "text"
              ? "text-neutral-900 dark:text-neutral-100"
              : "text-neutral-400"
          )}
        >
          Describe
          {activeTab === "text" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 dark:bg-neutral-100 rounded-full" />
          )}
        </div>
        <div
          className={cn(
            "pb-2 font-semibold text-xs relative",
            activeTab === "youtube"
              ? "text-neutral-900 dark:text-neutral-100"
              : "text-neutral-400"
          )}
        >
          YouTube
          {activeTab === "youtube" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 dark:bg-neutral-100 rounded-full" />
          )}
        </div>
      </div>

      {/* Input Box */}
      <div className="flex-1 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 flex flex-col items-center justify-center relative">
        <div className="w-full text-left font-medium text-base text-neutral-900 dark:text-neutral-100 break-words absolute top-4 left-4 right-4">
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
        {!typedText && (
          <span className="text-neutral-300 dark:text-neutral-700 text-sm">
            {activeTab === "text"
              ? "What are you craving?"
              : "Paste video link..."}
          </span>
        )}

        {/* Button */}
        <div
          className={cn(
            "absolute bottom-4 left-4 right-4 h-8 bg-neutral-900 dark:bg-neutral-100 rounded-full flex items-center justify-center transition-transform",
            isClicking && cursorPos.y > 70 ? "scale-95" : "scale-100"
          )}
        >
          <span className="text-white dark:text-neutral-900 text-xs font-bold">
            Generate
          </span>
        </div>
      </div>
    </div>
  );
}

function MockLoader() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 w-full h-full animate-in fade-in duration-300">
      {/* Creating wireframe loader feel */}
      <div className="w-12 h-12 rounded-full border-4 border-neutral-200 dark:border-neutral-800 border-t-neutral-900 dark:border-t-neutral-100 animate-spin" />
      <div className="space-y-2 w-1/2">
        <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full w-full animate-pulse" />
        <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full w-2/3 mx-auto animate-pulse delay-75" />
      </div>
    </div>
  );
}

function MockResult({
  activeTab,
}: {
  activeTab: "overview" | "ingredients" | "directions";
}) {
  return (
    <div className="flex flex-col h-full gap-3 relative z-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Wireframe */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        <div className="space-y-1 flex-1">
          <div className="h-2 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
          <div className="h-1.5 w-1/4 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
        </div>
      </div>

      {/* Tabs Wireframe */}
      <div className="flex bg-neutral-200 dark:bg-neutral-800 p-1 rounded-lg">
        <div
          className={cn(
            "flex-1 h-6 rounded-md transition-colors text-[8px] flex items-center justify-center font-bold text-neutral-400",
            activeTab === "overview" &&
              "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100"
          )}
        >
          Info
        </div>
        <div
          className={cn(
            "flex-1 h-6 rounded-md transition-colors text-[8px] flex items-center justify-center font-bold text-neutral-400",
            activeTab === "ingredients" &&
              "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100"
          )}
        >
          Ingr
        </div>
        <div
          className={cn(
            "flex-1 h-6 rounded-md transition-colors text-[8px] flex items-center justify-center font-bold text-neutral-400",
            activeTab === "directions" &&
              "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100"
          )}
        >
          Prep
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm overflow-hidden relative">
        {/* OVERVIEW CONTENT */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-2 gap-2 animate-in fade-in duration-300">
            <div className="bg-neutral-100 dark:bg-neutral-800 h-16 rounded-lg p-2 space-y-2">
              <div className="h-1.5 w-8 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
              <div className="h-4 w-12 bg-neutral-400 dark:bg-neutral-500 rounded-md" />
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 h-16 rounded-lg p-2 space-y-2">
              <div className="h-1.5 w-8 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
              <div className="h-4 w-12 bg-neutral-400 dark:bg-neutral-500 rounded-md" />
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 h-16 rounded-lg p-2 space-y-2">
              <div className="h-1.5 w-8 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
              <div className="h-4 w-12 bg-neutral-400 dark:bg-neutral-500 rounded-md" />
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 h-16 rounded-lg p-2 space-y-2">
              <div className="h-1.5 w-8 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
              <div className="h-4 w-12 bg-neutral-400 dark:bg-neutral-500 rounded-md" />
            </div>
          </div>
        )}

        {/* INGREDIENTS CONTENT */}
        {activeTab === "ingredients" && (
          <div className="space-y-2 animate-in fade-in slide-in-from-right-4 duration-300">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-neutral-300 dark:border-neutral-600" />
                <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full flex-1" />
              </div>
            ))}
          </div>
        )}

        {/* DIRECTIONS CONTENT */}
        {activeTab === "directions" && (
          <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-300">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-2 space-y-1"
              >
                <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full w-6" />
                <div className="h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full w-full" />
                <div className="h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full w-4/5" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MockFinished() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 w-full h-full animate-in fade-in zoom-in duration-500 text-center p-4">
      <div className="w-16 h-16 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center mb-2">
        <Check className="w-8 h-8" strokeWidth={3} />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          That's all!
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 font-medium">
          Let's get started
        </p>
      </div>
    </div>
  );
}
