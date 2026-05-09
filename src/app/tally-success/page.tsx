"use client";
import { useEffect } from "react";
import posthog from "@/lib/posthog";
import { ANALYTICS_CONTEXT } from "@/constants/analytics";

export default function TallySuccessPage() {
  useEffect(() => {
    const alreadyTracked = sessionStorage.getItem("lead_tracked");

    if (alreadyTracked) return;

    const params = new URLSearchParams(window.location.search);

    const email = params.get("email");
    const name = params.get("name");
    const location = params.get("location");

    if (email) {
      posthog.identify(email, {
        email,
        name,
      });

      posthog.capture("lead_submitted", {
        source: "tally",
        location,
        submitted_at: new Date().toISOString(),
        ...ANALYTICS_CONTEXT,
      });

      sessionStorage.setItem("lead_tracked", "true");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-400">
        Obrigado por se inscrever! 🎉
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Sua inscrição foi recebida com sucesso. Em breve, entraremos em contato
        com mais detalhes.
      </p>
    </div>
  );
}
