"use client";

import { useEffect } from "react";
import posthog from "@/lib/posthog";
import { ANALYTICS_CONTEXT } from "@/constants/analytics";

export function useScrollTracking() {
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const triggered = new Set();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / height) * 100;

      thresholds.forEach((t) => {
        if (percent >= t && !triggered.has(t)) {
          triggered.add(t);

          posthog.capture("scroll_depth", {
            percentage: t,
            ...ANALYTICS_CONTEXT,
            location: "home_page",
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
