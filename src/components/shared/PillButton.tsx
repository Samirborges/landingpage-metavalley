interface PillButtonProps {
  text: string;
  fromColor: string;
  toColor: string;
}

export default function PillButton({
  text,
  fromColor,
  toColor,
}: PillButtonProps) {
  return (
    <div className="rounded-full w-[20rem] bg-gradient-to-b from-[#6c6f72] via-[#212423] to-[#000000] inline-block p-1 hover:scale-105 active:scale-95">
      <button
        className="
          cursor-pointer
          relative px-8 py-4 rounded-full font-bold text-xl
          bg-gradient-to-r from-[#6c6f72] via-[#212423] to-[#000000] inline-block
          transition-all 
          w-full
        "
      >
        <span
          className={`
            bg-gradient-to-r bg-clip-text text-transparent  /* Truque para texto em degradê */
            ${fromColor} ${toColor}
          `}
        >
          {text}
        </span>
      </button>
    </div>
  );
}
