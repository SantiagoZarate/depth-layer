export type LightDirectionType = "top" | "topLeft" | "topRight";
export type OpacityType = "full" | "medium" | "low" | "none";

export type Settings = {
  hoverable: boolean;
  lightDirection: LightDirectionType;
  opacity: OpacityType;
};
