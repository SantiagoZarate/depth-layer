import type { Settings } from "./types";

export const lightDirectionOptions = [
  {
    text: "top",
    value: "top",
  },
  {
    text: "top left",
    value: "topLeft",
  },
  {
    text: "top right",
    value: "topRight",
  },
];

export const opacityOptions = [
  {
    text: "full",
    value: "full",
  },
  {
    text: "mid",
    value: "medium",
  },
  {
    text: "low",
    value: "low",
  },
];

export const companies = [
  {
    name: "Facebook",
    years: 3,
  },
  {
    name: "Amazon",
    years: 2,
  },
  {
    name: "Apple",
    years: 2,
  },
];

export const initSettings: Settings = {
  hoverable: true,
  lightDirection: "top",
  opacity: "medium",
};

export const noStyles: Settings = {
  hoverable: false,
  lightDirection: "top",
  opacity: "none",
};
