"use client";

import { ANALYTICS_CONTEXT } from "@/constants/analytics";
import { Send } from "lucide-react";
import posthog from "@/lib/posthog";
import { useState } from "react";

export default function ContactInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log(message);
    setMessage("");
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-[500px]">
      <span className="text-black text-lg">Entrar em contato</span>

      <div className="flex items-center border border-gray-400 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Digite a sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />

        <button
          onClick={() => {
            handleSend();
            posthog.capture("lead_contact", {
              type: "lead",
              ...ANALYTICS_CONTEXT,
              location: "contact_input",
            });
          }}
          className="p-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
        >
          <Send size={18} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
