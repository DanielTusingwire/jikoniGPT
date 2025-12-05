"use client";
import { useState, useEffect } from "react";

export function useTimeBasedGreeting() {
  const [greetingInfo, setGreetingInfo] = useState({
    greeting: "",
    placeholder: "", // Initial empty to match hydration or loading state
    mealType: "dinner" as "breakfast" | "lunch" | "dinner",
  });

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreetingInfo({
          greeting: "Good morning, Chef!",
          placeholder: "What delicious meal are you preparing for breakfast?",
          mealType: "breakfast",
        });
      } else if (hour >= 12 && hour < 17) {
        setGreetingInfo({
          greeting: "Good afternoon, Chef!",
          placeholder: "What delicious meal are you preparing for lunch?",
          mealType: "lunch",
        });
      } else {
        setGreetingInfo({
          greeting: "Good evening, Chef!",
          placeholder: "What delicious meal are you preparing for dinner?",
          mealType: "dinner",
        });
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  return greetingInfo;
}
