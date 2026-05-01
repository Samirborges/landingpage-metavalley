import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  colorBorder?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  iconColor = "#6366f1",
  colorBorder = "border-[#ff3131]",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-[#1f2324] p-6 rounded-lg w-80 border-2 border-dashed ${colorBorder} flex flex-col items-start`}
    >
      {/* ÍCONE */}
      <div className="mb-4">
        <div className="bg-[#1f2324] w-10 h-10 flex items-center justify-center rounded-full">
          <Icon size={20} color={iconColor} strokeWidth={2} />
        </div>
      </div>

      {/* TEXTO */}
      <h3 className="text-gray-300 text-left text-lg font-radio mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-left text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
