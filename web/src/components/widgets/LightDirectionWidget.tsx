import { lightDirectionOptions } from "../../constants";
import type { LightDirectionType } from "../../types";

type Props = {
  onClick: (value: LightDirectionType) => void;
  currentLightDirection: string;
};

export function LightDirectionWidget({
  currentLightDirection,
  onClick,
}: Props) {
  return (
    <div className="animate-levitate opac absolute left-[10%] -bottom-1/2 flex flex-col items-center bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden">
      <p className="text-xs text-text-secondary py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
        light direction
      </p>
      <ul className="flex flex-col gap-1 p-1 w-full">
        {lightDirectionOptions.map((opt) => (
          <button
            onClick={() => onClick(opt.value as LightDirectionType)}
            className={`px-6 py-2 text-xs capitalize w-full hover:bg-black/60 duration-150 transition rounded-full ${
              currentLightDirection === opt.value && "bg-black/80"
            }`}
          >
            {opt.text}
          </button>
        ))}
      </ul>
    </div>
  );
}
