import { opacityOptions } from "../../constants";
import type { OpacityType } from "../../types";

type Props = {
  onChangeOpacity: (value: OpacityType) => void;
  currentOpacity: string;
};

export function OpacityWidget({ currentOpacity, onChangeOpacity }: Props) {
  return (
    <div className="animate-levitate-slow opac absolute right-[10%] bottom-12 flex flex-col items-center bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden">
      <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
        opacity
      </p>
      <ul className="flex divide-x divide-border w-full text-xs">
        {opacityOptions.map((op) => (
          <button
            key={op.text}
            onClick={() => onChangeOpacity(op.value as OpacityType)}
            className={`min-w flex-1 uppercase p-3 ${
              op.value === currentOpacity && "bg-black/80"
            }`}
          >
            {op.text}
          </button>
        ))}
      </ul>
    </div>
  );
}
