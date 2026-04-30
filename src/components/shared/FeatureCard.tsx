interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string; // Nome do ícone do Google
}

export default function FeatureCard({
  title,
  description,
  //   iconName,
}: FeatureCardProps) {
  return (
    <div className="relative p-[1px] rounded-[32px] bg-gradient-to-b from-[#6c6f72] via-[#212423] to-[#000000] w-full max-w-[350px] group">
      <div className="bg-[#121212] rounded-[31px] p-8 h-[450px] flex flex-col justify-between overflow-hidden">
        <div className="space-y-4">
          <h3 className="text-white text-2xl font-bold leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Área do Ícone do Google */}
        <div className="flex items-end justify-center h-48 opacity-20 group-hover:opacity-40 transition-all duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#e3e3e3"
            className="w-[300px] h-[300px] mb-[-50px]"
          >
            <path d="M150-170q-46.22 0-78.11-32.08Q40-234.17 40-280v-270q0-24.75 17.63-42.38Q75.25-610 100-610h230v-200h207q45.42 0 77.21 32Q646-746 647-700v180h60v-60q0-11.79 4.6-22.84 4.61-11.05 12.4-19.16l70-71 166 313H767q-24.75 0-42.37-17.63Q707-415.25 707-440v-20h-60v95q19 16 29.5 38.21T687-280q0 45.83-32.08 77.92Q622.83-170 577-170q-37 0-65.5-22T472-249H255q-11 35-39.5 57T150-170Zm-.19-60q20.81 0 35.5-14.32Q200-258.65 200-279.82q0-21.18-14.32-35.68-14.33-14.5-35.5-14.5-21.18 0-35.68 14.32-14.5 14.33-14.5 35.5 0 21.18 14.5 35.68t35.31 14.5Zm462.69-14.32q14.5-14.33 14.5-35.5 0-21.18-14.32-35.68-14.33-14.5-35.5-14.5-21.18 0-35.68 14.32-14.5 14.33-14.5 35.5 0 21.18 14.32 35.68 14.33 14.5 35.5 14.5 21.18 0 35.68-14.32ZM330-310v-240H100v173q11-6 24-9.5t26-3.5q37 0 66 22.5t39 57.5h75Zm60 0h81q10-35 39.5-57.5T577-390h10v-70H390v150Zm471-130-84-154q-5 3-7.5 8t-2.5 11v135h94Zm-471-80h197v-180q0-21.25-14.37-35.63Q558.25-750 537-750H390v230Zm-60 210v-80 13-173 240Zm60 0v-150 150Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
