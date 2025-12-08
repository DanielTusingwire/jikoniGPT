"use client";
import { useState, useEffect } from "react";

export function useTimeBasedGreeting() {
  const [greetingInfo, setGreetingInfo] = useState({
    greeting: "",
    icon: "sun" as "sun" | "moon",
  });

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      // Morning: 12 AM - 11 AM (Sun)
      // Afternoon/Evening: 12 PM - 11 PM (Moon)
      if (hour >= 0 && hour < 12) {
        setGreetingInfo({
          greeting: "Wasuze otya, Chef?",
          icon: "sun",
        });
      } else {
        setGreetingInfo({
          greeting: "Osibye otya, Chef?",
          icon: "moon",
        });
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  return greetingInfo;
}
