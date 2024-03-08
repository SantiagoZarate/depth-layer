import { useState } from "react";
import { BooleanSlide } from "./BooleanSlider";
import { DepthLayer } from "./DepthLayer";
import { FakeUI } from "./FakeUI";
import { lightDirectionOptions, opacityOptions } from "../constants";

type LightDirectionType = "top" | "topLeft" | "topRight";
type OpacityType = "full" | "medium" | "low";

type Settings = {
  hoverable: boolean;
  lightDirection: LightDirectionType;
  opacity: OpacityType;
};

const initSettings: Settings = {
  hoverable: true,
  lightDirection: "top",
  opacity: "medium",
};

export function HeroRightSide() {
  const [depthSettings, setDepthSettings] = useState<Settings>(initSettings);

  const updateOpacity = (type: OpacityType) => {
    const newSettings = {
      ...depthSettings,
      opacity: type,
    };
    setDepthSettings(newSettings);
  };

  const toggleHoverable = () => {
    setDepthSettings((prevState) => {
      return {
        ...prevState,
        hoverable: !prevState.hoverable,
      };
    });
  };

  const updateLightDirection = (value: LightDirectionType) => {
    const newSettings = {
      ...depthSettings,
      lightDirection: value,
    };
    setDepthSettings(newSettings);
  };

  return (
    <article className="relative flex-1 w-full h-full flex justify-center">
      <DepthLayer
        lightDirection={depthSettings.lightDirection}
        hoverable={depthSettings.hoverable}
        opacity={depthSettings.opacity}
      >
        <FakeUI />
      </DepthLayer>
      <div className="animate-levitate opac absolute left-[10%] -bottom-1/2 flex flex-col items-center bg-black/50 rounded-2xl overflow-hidden">
        <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
          light direction
        </p>
        <ul className="flex flex-col gap-1 p-1 w-full">
          {lightDirectionOptions.map((opt) => (
            <button
              onClick={() =>
                updateLightDirection(opt.value as LightDirectionType)
              }
              className={`px-6 py-2 text-xs capitalize w-full hover:bg-black/60 duration-150 transition rounded-full ${
                depthSettings.lightDirection === opt.value && "bg-black/80"
              }`}
            >
              {opt.text}
            </button>
          ))}
        </ul>
      </div>
      <div className="animate-levitate-medium absolute left-[20%] -top-1/3 flex flex-col items-center bg-black/50 rounded-2xl overflow-hidden">
        <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
          Hover effect
        </p>
        <BooleanSlide
          isChecked={depthSettings.hoverable}
          onToggle={toggleHoverable}
        />
      </div>
      <div className="animate-levitate-slow opac absolute right-[10%] bottom-12 flex flex-col items-center bg-black/50 rounded-2xl overflow-hidden">
        <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
          Hover effect
        </p>
        <ul className="flex divide-x divide-border w-full text-xs">
          {opacityOptions.map((op) => (
            <button
              key={op.text}
              onClick={() => updateOpacity(op.value as OpacityType)}
              className={`min-w flex-1 uppercase p-3 ${
                op.value === depthSettings.opacity && "bg-black/80"
              }`}
            >
              {op.text}
            </button>
          ))}
        </ul>
      </div>
    </article>
  );
}
