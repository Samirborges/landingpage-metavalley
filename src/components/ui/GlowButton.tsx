"use client";

import { ANALYTICS_CONTEXT } from "@/constants/analytics";
import posthog from "@/lib/posthog";

export const GlowButton = ({ text }: { text: string }) => {
  return (
    <button
      className="px-8 py-3 rounded-full cursor-pointer text-black font-bold bg-gradient-to-r from-[#80dbdd] to-[#b5ed7f] w-full"
      onClick={() => {
        posthog.capture("cta_click", {
          ...ANALYTICS_CONTEXT,
          location: "hero",
          text: "validar_ideia",
        });
      }}
    >
      {text}
    </button>
  );
};
