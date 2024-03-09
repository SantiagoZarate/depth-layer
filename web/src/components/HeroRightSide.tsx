import { useState } from "react";
import { BooleanSlide } from "./BooleanSlider";
import { DepthLayer } from "./DepthLayer";
import { FakeUI } from "./FakeUI";
import { lightDirectionOptions, opacityOptions } from "../constants";
import { CheckIcon } from "./icons/CheckIcon";
import { UserAdd } from "./icons/UserAdd";

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
      <DepthLayer {...depthSettings}>
        <FakeUI />
      </DepthLayer>
      <DepthLayer {...depthSettings} className="absolute right-24 -top-1/3">
        <div className="w-40 h-40 rounded-xl overflow-hidden bg-red-50 ">
          <span className="absolute right-0 bottom-0 px-4 py-2 text-xs bg-black/80 rounded-tl-3xl">
            <p className="text-green-600 font-bold text-end">Dino NTF</p>
            <p className="text-green-300 text-end">$12.67 USD</p>
          </span>
          <img
            className="w-full h-full object-cover"
            src="https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000"
            alt=""
          />
        </div>
      </DepthLayer>
      <DepthLayer {...depthSettings} className="absolute left-1/2 -bottom-16">
        <div className="rounded-xl overflow-hidden bg-stone-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] flex items-center divide-x divide-border">
          <div className="min-w-fit p-4 text-green-500">
            <CheckIcon />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p className="font-bold text-blue-100">Payment successful</p>
            <p className="text-xs text-blue-400 capitalize">
              thanks for choosing us!
            </p>
          </div>
        </div>
      </DepthLayer>
      <div className="animate-levitate opac absolute left-[10%] -bottom-1/2 flex flex-col items-center bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden">
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
      <div className="animate-levitate-medium absolute left-[20%] -top-1/3 flex flex-col items-center bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden">
        <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
          Hover effect
        </p>
        <BooleanSlide
          isChecked={depthSettings.hoverable}
          onToggle={toggleHoverable}
        />
      </div>
      <div className="animate-levitate-slow opac absolute right-[10%] bottom-12 flex flex-col items-center bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden">
        <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
          opacity
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
