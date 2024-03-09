import { useRef, useState } from "react";
import { initSettings, noStyles } from "../constants";
import type { Settings, OpacityType, LightDirectionType } from "../types";

export function useWidgets() {
  const defaultSettings = useRef<Settings>(initSettings);
  const [depthSettings, setDepthSettings] = useState<Settings>(initSettings);
  const [applyStyles, setApplyStykes] = useState(true);

  const updateOpacity = (type: OpacityType) => {
    if (!applyStyles) return;
    const newSettings = {
      ...depthSettings,
      opacity: type,
    };
    setDepthSettings(newSettings);
  };

  const toggleHoverable = () => {
    if (!applyStyles) return;
    setDepthSettings((prevState) => {
      return {
        ...prevState,
        hoverable: !prevState.hoverable,
      };
    });
  };

  const updateLightDirection = (value: LightDirectionType) => {
    if (!applyStyles) return;
    const newSettings = {
      ...depthSettings,
      lightDirection: value,
    };
    setDepthSettings(newSettings);
  };

  const handleTurnOffStyles = () => {
    setDepthSettings(applyStyles ? noStyles : defaultSettings.current);
    setApplyStykes(!applyStyles);
  };

  return {
    handleTurnOffStyles,
    updateLightDirection,
    toggleHoverable,
    updateOpacity,
    applyStyles,
    depthSettings,
  };
}
