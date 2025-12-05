"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AppLoader() {
  const fullText = "Preparing your kitchen...";
  const [displayedText, setDisplayedText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Typing animation logic
  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typingInterval);

        // Wait 2 seconds before hiding loader
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    }, 70); // typing speed

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[200] bg-neutral-100 flex items-center justify-center"
        >
          <div className="text-center">

            {/* PULSE LOGO */}
            <motion.img
              src="/loadLogo.png"
              alt="Chef Logo"
              className="w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-6 object-contain"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Typing Subtitle */}
            <motion.p
              className="text-neutral-900 text-sm sm:text-base font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {displayedText}
              <span className="animate-pulse">|</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
