"use client";

import { useEffect } from "react";
import posthog from "@/lib/posthog";
import { usePathname, useSearchParams } from "next/navigation";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (!key) {
      console.error(
        "PostHog key is missing. Please set NEXT_PUBLIC_POSTHOG_KEY in your environment variables.",
      );
      return;
    }

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    });
  }, []);

  useEffect(() => {
    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return <>{children}</>;
}
