interface PillButtonProps {
  text: string;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
}

export default function PillButton({
  text,
  fromColor,
  toColor,
  textColor,
}: PillButtonProps) {
  return (
    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
      <span
        className={`
          text-sm font-medium tracking-wide
          ${
            textColor
              ? textColor
              : `bg-gradient-to-r bg-clip-text text-transparent ${fromColor} ${toColor}`
          }
        `}
      >
        {text}
      </span>
    </div>
  );
}
