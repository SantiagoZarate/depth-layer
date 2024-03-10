import { useState } from "react";
import { IntelisenseIcon } from "./IntelisenseIcon";
import { DepthLayer } from "../DepthLayer";
import { FakeSnippetCode } from "./FakeSnippetCode";

const variants = ["top", "topLeft", "topRight"] as const;
type Variant = (typeof variants)[number];

export function SnippetCodeVariants() {
  const [currentVariant, setCurrentVariant] = useState<Variant>(variants[0]);

  const handleChangeVariant = (index: number) => {
    setCurrentVariant(variants[index]);
  };

  return (
    <DepthLayer lightDirection={currentVariant} opacity={"medium"}>
      <div className="w-full px-4 py-12 bg-zinc-900">
        <ul className="absolute z-30 w-full animate-levitate left-[50%] top-[45%] bg-zinc-900 max-w-xs shadow-lg text-sm rounded-md overflow-hidden border border-border flex flex-col">
          {variants.map((variant, index) => (
            <li
              key={index}
              onClick={() => handleChangeVariant(index)}
              className={`${
                variant === currentVariant
                  ? "bg-blue-600/40"
                  : "hover:bg-white/10"
              } font-mono tracking-wide cursor-pointer  px-1 py-[2px] flex justify-between items-center `}
            >
              <div className="flex gap-2 items-center">
                <IntelisenseIcon />
                {variant}
              </div>
              {variant === currentVariant && (
                <span className="text-xs self-end opacity-45">{variant}</span>
              )}
            </li>
          ))}
        </ul>
        <FakeSnippetCode />
      </div>
    </DepthLayer>
  );
}
