"use client";

import { useEffect } from "react";
import posthog from "@/lib/posthog";

interface PageLeaveProps {
  experimentId?: string;
  landingVersion?: string;
}

export function usePageLeave({
  experimentId = "mv_landing",
  landingVersion = "v1",
}: PageLeaveProps) {
  useEffect(() => {
    const start = Date.now();

    const handleBeforeUnload = () => {
      const duration = Date.now() - start;
      posthog.capture("page_leave", {
        duration_in_seconds: Math.round(duration / 1000),
        experiment_id: experimentId,
        landing_version: landingVersion,
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [experimentId, landingVersion]);
}
