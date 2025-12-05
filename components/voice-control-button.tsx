"use client";

import { Mic, MicOff, Volume2, HelpCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VoiceControlButtonProps {
  isListening: boolean;
  isSupported: boolean;
  lastCommand: string | null;
  error: string | null;
  onStartListening: () => void;
  onStopListening: () => void;
  onShowHelp?: () => void;
}

export function VoiceControlButton({
  isListening,
  isSupported,
  lastCommand,
  error,
  onStartListening,
  onStopListening,
  onShowHelp,
}: VoiceControlButtonProps) {
  const [showFeedback, setShowFeedback] = useState(false);

  if (!isSupported) {
    return null; // Don't show if browser doesn't support voice
  }

  const handleClick = () => {
    if (isListening) {
      onStopListening();
    } else {
      onStartListening();
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 3000);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6 z-50 pointer-events-none">
      <div className="flex flex-col items-end gap-3">
        {/* Feedback Toast */}
        <AnimatePresence>
          {(showFeedback || lastCommand || error) && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className={cn(
                "px-4 py-2 rounded-2xl shadow-lg backdrop-blur-xl border text-sm font-medium max-w-xs pointer-events-auto",
                error
                  ? "bg-red-50/90 border-red-200 text-red-700"
                  : isListening
                    ? "bg-blue-50/90 border-blue-200 text-blue-700"
                    : "bg-green-50/90 border-green-200 text-green-700"
              )}
            >
              {error || (isListening ? "Listening..." : lastCommand || "Ready")}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Help Button */}
        <button
          onClick={onShowHelp}
          className="p-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 pointer-events-auto"
          title="Voice commands help"
        >
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* Main Voice Button */}
        <button
          onClick={handleClick}
          className={cn(
            "relative p-5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 pointer-events-auto",
            isListening
              ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
              : "bg-neutral-900 hover:bg-neutral-800 text-white"
          )}
          title={isListening ? "Stop listening" : "Start voice control"}
        >
          {/* Listening Animation Rings */}
          {isListening && (
            <>
              <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75" />
              <span className="absolute inset-0 rounded-full bg-red-400 animate-pulse opacity-50" />
            </>
          )}

          {/* Icon */}
          <div className="relative z-10">
            {isListening ? (
              <MicOff className="w-7 h-7" />
            ) : (
              <Mic className="w-7 h-7" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

interface VoiceHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export function VoiceHelpModal({ isOpen, onClose }: VoiceHelpModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const commands = [
    {
      category: "Navigation",
      items: [
        { command: "Next step", description: "Move to the next cooking step" },
        { command: "Previous step", description: "Go back to previous step" },
        {
          command: "Go to step [number]",
          description: "Jump to a specific step",
        },
        { command: "Repeat", description: "Read current step again" },
      ],
    },
    {
      category: "Timers",
      items: [
        {
          command: "Start timer",
          description: "Start the timer for current step",
        },
        { command: "Pause timer", description: "Pause the running timer" },
        { command: "Resume timer", description: "Resume the paused timer" },
      ],
    },
    {
      category: "View",
      items: [
        {
          command: "Show ingredients",
          description: "Switch to ingredients tab",
        },
        { command: "Show directions", description: "Switch to directions tab" },
        { command: "Read step", description: "Read current step aloud" },
      ],
    },
  ];

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
                ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl rounded-3xl max-h-[85vh]"
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
                "bg-white border-b border-neutral-100 sticky top-0 z-10",
                isDesktop ? "p-6 rounded-t-3xl" : "px-6 pb-6 pt-2"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Volume2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">
                      Voice Commands
                    </h2>
                    <p className="text-sm text-neutral-500">
                      Hands-free cooking made easy
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-neutral-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar">
              {commands.map((section) => (
                <div key={section.category}>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {section.category}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div
                        key={item.command}
                        className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <div className="p-1.5 bg-blue-100 rounded-lg mt-0.5">
                          <Mic className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-neutral-900">
                            "{item.command}"
                          </p>
                          <p className="text-sm text-neutral-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-900">
                  <strong>💡 Tip:</strong> Click the microphone button and speak
                  clearly. The app will confirm what it heard and execute the
                  command.
                </p>
              </div>
            </div>

            {/* Footer Padding for Mobile */}
            {!isDesktop && <div className="h-8 shrink-0" />}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
