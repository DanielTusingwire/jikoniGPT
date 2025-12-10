"use client";

import { useState, useEffect } from "react";

export function LoadingModal({
  onCancel,
  inputType = "text",
}: {
  onCancel?: () => void;
  inputType?: "text" | "youtube";
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        const increment = Math.random() * 30;
        return Math.min(prev + increment, 95);
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Food icons for the spinner circle
  const foodEmojis = ["🍗", "🍅", "🍎", "🥦", "🍲", "🥕", "🍄", "🥒"];

  return (
    <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 max-w-sm w-full mx-4 text-center space-y-8">
        <div className="flex justify-center items-center h-40">
          <div className="relative w-40 h-40">
            {/* Rotating circular background */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "4s" }}
            >
              {foodEmojis.map((emoji, i) => {
                const angle = (i / foodEmojis.length) * 360;
                return (
                  <div
                    key={i}
                    className="absolute w-12 h-12 flex items-center justify-center text-2xl"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
                      top: "50%",
                      left: "50%",
                      marginLeft: "-24px",
                      marginTop: "-24px",
                    }}
                  >
                    <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full w-12 h-12 flex items-center justify-center">
                      {emoji}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center circle with spinner */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-neutral-200 dark:border-neutral-700 border-t-neutral-900 dark:border-t-neutral-100 rounded-full animate-spin" />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-2">
          <p className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            {inputType === "youtube"
              ? "JikoniGPT is watching the video..."
              : "JikoniGPT is generating recipe..."}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Estimated time: 15 to 25 seconds
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-neutral-900 dark:bg-neutral-100 h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Cancel button */}
        {onCancel && (
          <button
            onClick={onCancel}
            className="w-full py-3 px-4 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors text-sm font-medium"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
