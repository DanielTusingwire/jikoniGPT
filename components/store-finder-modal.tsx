"use client";

import { useState, useEffect } from "react";
import { X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Store {
  id: string;
  name: string;
  distance: string;
  phone: string;
  address: string;
}

interface StoreFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data based on the user's image
const MOCK_STORES: Store[] = [
  {
    id: "1",
    name: "Kenjoy Supermarket Nansana",
    distance: "2.0 miles",
    phone: "0753 399658",
    address: "Nansana, Wakiso",
  },
  {
    id: "2",
    name: "Payless Supermarket",
    distance: "0.9 miles",
    phone: "0758 321034",
    address: "Hoima Rd, Kampala",
  },
  {
    id: "3",
    name: "Hommez Joy Supermarket",
    distance: "1.1 miles",
    phone: "0752 801238",
    address: "Nansana",
  },
  {
    id: "4",
    name: "Depetals",
    distance: "1.1 miles",
    phone: "Call for info",
    address: "Kampala",
  },
  {
    id: "5",
    name: "Lukaya",
    distance: "1.1 miles",
    phone: "0751 589802",
    address: "Lukaya Road",
  },
];

export function StoreFinderModal({ isOpen, onClose }: StoreFinderModalProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    // Check immediately
    if (typeof window !== "undefined") {
      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      return () => window.removeEventListener("resize", checkDesktop);
    }
  }, []);

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal / Bottom Sheet */}
          <motion.div
            initial={isDesktop ? { opacity: 0, scale: 0.95 } : { y: "100%" }}
            animate={isDesktop ? { opacity: 1, scale: 1 } : { y: 0 }}
            exit={isDesktop ? { opacity: 0, scale: 0.95 } : { y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "fixed z-[101] bg-white shadow-2xl overflow-hidden flex flex-col",
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
                "bg-white border-b border-neutral-100 sticky top-0 z-10",
                isDesktop ? "p-6" : "px-6 pb-6 pt-2"
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Available stores
                  </h2>
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
            <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar">
              {MOCK_STORES.map((store) => (
                <div
                  key={store.id}
                  className="flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="space-y-1">
                    <h3 className="font-bold text-neutral-900 text-lg">
                      {store.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-neutral-500">{store.distance}</span>
                      <span className="text-neutral-300">•</span>
                      <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded-md font-medium">
                        {store.phone}
                      </span>
                    </div>
                  </div>

                  <button
                    className="p-3 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors text-neutral-900"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + " " + store.address)}`,
                        "_blank"
                      )
                    }
                  >
                    <MapPin className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer Padding for Mobile */}
            {!isDesktop && <div className="h-8 shrink-0" />}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
