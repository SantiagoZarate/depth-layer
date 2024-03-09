import { BooleanSlide } from "./BooleanSlider";
import { DepthLayer } from "./DepthLayer";
import { FakeUI } from "./fakeuis/FakeUI";
import { StarsIcon } from "./icons/StarsIcon";
import { FakeNftCard } from "./fakeuis/FakeNftCard";
import { FakeNotification } from "./fakeuis/FakeNotification";
import { LightDirectionWidget } from "./widgets/LightDirectionWidget";
import { HoverEffectWidget } from "./widgets/HoverEffectWidget";
import { OpacityWidget } from "./widgets/OpacityWidget";
import { useWidgets } from "../hooks/useWidgets";

export function HeroRightSide() {
  const {
    applyStyles,
    depthSettings,
    handleTurnOffStyles,
    toggleHoverable,
    updateLightDirection,
    updateOpacity,
  } = useWidgets();

  return (
    <article className="relative flex-1 w-full h-full flex justify-center">
      <DepthLayer {...depthSettings}>
        <FakeUI />
      </DepthLayer>
      <DepthLayer {...depthSettings} className="absolute right-24 -top-1/3">
        <FakeNftCard />
      </DepthLayer>
      <DepthLayer {...depthSettings} className="absolute left-1/2 -bottom-16">
        <FakeNotification />
      </DepthLayer>
      <LightDirectionWidget
        currentLightDirection={depthSettings.lightDirection}
        onClick={updateLightDirection}
      />
      <HoverEffectWidget>
        <BooleanSlide
          isChecked={depthSettings.hoverable}
          onToggle={toggleHoverable}
        />
      </HoverEffectWidget>
      <OpacityWidget
        currentOpacity={depthSettings.opacity}
        onChangeOpacity={updateOpacity}
      />
      <button
        onClick={handleTurnOffStyles}
        className={`absolute -bottom-1/2 right-12 flex gap-2 items-center backdrop-blur-sm rounded-2xl overflow-hidden duration-150 transition-all hover:scale-[1.03] ${
          !applyStyles && "opacity-50"
        }`}
      >
        {applyStyles ? "Turn off styles" : "Turn on styles"}
        <StarsIcon />
      </button>
    </article>
  );
}
