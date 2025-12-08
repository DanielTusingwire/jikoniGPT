"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ScrollAwareHeaderProps {
  rightContent?: React.ReactNode;
  maxWidth?: string;
  className?: string;
}

export function ScrollAwareHeader({
  rightContent,
  maxWidth = "max-w-2xl",
  className,
}: ScrollAwareHeaderProps) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-neutral-100/80 dark:bg-neutral-950/80 backdrop-blur-md px-4 py-4 transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      <div
        className={cn("mx-auto flex items-center justify-between", maxWidth)}
      >
        <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          JikoniGPT
        </span>
        {rightContent}
      </div>
    </div>
  );
}
