"use client";

import { useState, useEffect } from "react";
import { X, ChefHat, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Substitute {
  name: string;
  description: string;
}

interface SubstitutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  ingredient: string;
  substitutes: Substitute[] | null;
  isLoading: boolean;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

export function SubstitutionModal({
  isOpen,
  onClose,
  ingredient,
  substitutes,
  isLoading,
}: SubstitutionModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Modal / Bottom Sheet */}
          <motion.div
            initial={isDesktop ? { opacity: 0, scale: 0.95 } : { y: "100%" }}
            animate={isDesktop ? { opacity: 1, scale: 1 } : { y: 0 }}
            exit={isDesktop ? { opacity: 0, scale: 0.95 } : { y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "fixed z-[70] bg-white shadow-2xl overflow-hidden flex flex-col",
              isDesktop
                ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-3xl max-h-[85vh]"
                : "bottom-0 left-0 right-0 rounded-t-[2.5rem] max-h-[85vh]"
            )}
            drag={!isDesktop ? "y" : false}
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (!isDesktop && info.offset.y > 100) {
                onClose();
              }
            }}
          >
            {/* Mobile Drag Handle */}
            {!isDesktop && (
              <div className="w-full flex justify-center pt-4 pb-2 bg-neutral-900">
                <div className="w-12 h-1.5 bg-neutral-700 rounded-full" />
              </div>
            )}

            {/* Header */}
            <div
              className={cn(
                "bg-neutral-900 text-white flex items-center justify-between shrink-0",
                isDesktop ? "p-6" : "px-6 pb-6 pt-2"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-xl">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Substitutions</h3>
                  <p className="text-neutral-400 text-sm">For {ingredient}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                  <div className="w-8 h-8 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin" />
                  <p className="text-neutral-500 text-sm animate-pulse">
                    Chef is thinking of alternatives...
                  </p>
                </div>
              ) : substitutes && substitutes.length > 0 ? (
                <div className="space-y-4">
                  {substitutes.map((sub, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 hover:border-neutral-200 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 p-1.5 bg-green-100 text-green-700 rounded-lg">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900">
                            {sub.name}
                          </h4>
                          <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                            {sub.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-neutral-500">
                  No substitutions found.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-neutral-50 border-t border-neutral-100 text-center shrink-0 safe-area-bottom">
              <p className="text-xs text-neutral-400">
                AI-generated suggestions. Use your best judgment.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
