import { ANALYTICS_CONTEXT } from "@/constants/analytics";
import posthog from "@/lib/posthog";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean; // botão preenchido ou outline
  typePlan: "basic" | "pro" | "enterprise";
}

export default function PricingCard({
  title,
  price,
  features,
  highlighted = false,
  typePlan,
}: PricingCardProps) {
  return (
    <div className="flex flex-col gap-6 w-80 max-w-[380px]">
      {/* CARD */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-[#1f2937] to-[#111827]">
        <div className="bg-[#1f2324] rounded-2xl p-8">
          <h3 className="text-white text-2xl font-semibold mb-6">{title}</h3>

          <p className="text-white text-3xl font-bold mb-6">{price}</p>

          <ul className="space-y-2 text-gray-400">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-gray-500">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTÃO */}
      <button
        className={`
          rounded-xl py-3 font-semibold transition-all duration-300 border cursor-pointer 
          
          ${
            highlighted
              ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
              : "bg-transparent text-white border-white hover:bg-white hover:text-black"
          }
        `}
        onClick={() =>
          posthog.capture("payment_intent", {
            ...ANALYTICS_CONTEXT,
            type: "payment_intent",
            plan: typePlan,
          })
        }
      >
        Começar agora
      </button>
    </div>
  );
}
