"use client";

import { ANALYTICS_CONTEXT } from "@/constants/analytics";
import posthog from "@/lib/posthog";
import Link from "next/link";

export const GlowButton = ({ text }: { text: string }) => {
  return (
    <Link
      href="https://tally.so/r/2E1kvM?location=hero"
      rel="noopener noreferrer"
      className="block w-full px-8 py-3 rounded-full cursor-pointer text-black font-bold bg-gradient-to-r from-[#80dbdd] to-[#b5ed7f] text-center"
      onClick={() => {
        posthog.capture("cta_click", {
          ...ANALYTICS_CONTEXT,
          location: "hero",
          text: "validar_ideia",
        });
      }}
    >
      {text}
    </Link>
  );
};
