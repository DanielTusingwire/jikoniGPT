"use client";

import { useEffect, useState } from "react";
import { X, Download, Share } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isInStandaloneMode = () => {
      return (
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone ||
        document.referrer.includes("android-app://")
      );
    };

    setIsStandalone(isInStandaloneMode());

    // Detect iOS
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Listen for beforeinstallprompt event (Chrome, Edge, Samsung Internet)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);

      // Show prompt after 5 seconds if not dismissed before
      setTimeout(() => {
        const dismissed = localStorage.getItem("pwa-install-dismissed");
        if (!dismissed) {
          setShowPrompt(true);
        }
      }, 5000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // For iOS, show instructions if not installed
    if (iOS && !isInStandaloneMode()) {
      setTimeout(() => {
        const dismissed = localStorage.getItem("pwa-install-dismissed");
        if (!dismissed) {
          setShowPrompt(true);
        }
      }, 5000);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }

    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-dismissed", "true");
  };

  if (isStandalone || !showPrompt) return null;

  return (
    <>
      {/* Install Prompt Banner */}
      <AnimatePresence>
        {showPrompt && !showIOSInstructions && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:max-w-md"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 dark:bg-neutral-100 rounded-xl flex items-center justify-center">
                  <img
                    src="/app_icon.png"
                    alt="OChef"
                    className="w-8 h-8 dark:invert"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-1">
                    Install JikoniGPT App
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {isIOS
                      ? "Add to your home screen for quick access and offline cooking"
                      : "Install for quick access, offline recipes, and a better experience"}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={handleInstallClick}
                      className="flex-1 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold py-2 px-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      {isIOS ? (
                        <>
                          <Share className="w-4 h-4" />
                          Show How
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Install
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleDismiss}
                      className="px-3 py-2 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS Installation Instructions Modal */}
      <AnimatePresence>
        {showIOSInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
            onClick={() => setShowIOSInstructions(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Install OChef
                </h2>
                <button
                  onClick={() => setShowIOSInstructions(false)}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-neutral-500 dark:text-neutral-400" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-neutral-900 dark:text-neutral-100 font-medium mb-1">
                      Tap the Share button
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Look for the <Share className="w-4 h-4 inline" /> share
                      icon in Safari's toolbar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-neutral-900 dark:text-neutral-100 font-medium mb-1">
                      Select "Add to Home Screen"
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Scroll down and tap "Add to Home Screen"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-neutral-900 dark:text-neutral-100 font-medium mb-1">
                      Tap "Add"
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Confirm to add OChef to your home screen
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 mt-6">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    <strong>Note:</strong> This only works in Safari browser on
                    iOS devices.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setShowIOSInstructions(false);
                    handleDismiss();
                  }}
                  className="w-full bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
