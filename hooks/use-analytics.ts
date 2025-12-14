"use client";

import { useEffect, useState, useCallback } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { sendGAEvent } from "@next/third-parties/google";

export function useAnalytics() {
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const logEventMutation = useMutation(api.analytics.logEvent);

  useEffect(() => {
    // Initialize Visitor ID
    if (typeof window !== "undefined") {
      let id = localStorage.getItem("onechef_visitor_id");
      if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("onechef_visitor_id", id);
      }
      setVisitorId(id);
    }
  }, []);

  const trackEvent = useCallback(
    (eventName: string, details?: any) => {
      // 1. Log to Google Analytics
      try {
        sendGAEvent("event", eventName, details || {});
      } catch (e) {
        // Ignore GA errors (e.g. ad blockers)
      }

      // 2. Log to Internal DB (only if we have a visitor ID)
      if (visitorId) {
        logEventMutation({
          visitor_id: visitorId,
          event_type: eventName,
          details: details,
        }).catch((err) => {
          // Silent fail for analytics
          console.warn("Internal logging failed", err);
        });
      }
    },
    [visitorId, logEventMutation]
  );

  return { visitorId, trackEvent };
}
