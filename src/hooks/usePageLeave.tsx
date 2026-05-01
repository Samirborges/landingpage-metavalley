"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function usePageLeave() {
  useEffect(() => {
    const start = Date.now();

    return () => {
      const duration = Date.now() - start;

      posthog.capture("page_leave", {
        duration,
      });
    };
  }, []);
}
