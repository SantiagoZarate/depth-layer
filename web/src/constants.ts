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

export const cvaExampleCode = `import { cva } from 'class-variance-authority'

export const depthLayerStyles = cva(
  {
    variants: {
      variant: {
        default: "before:border-black/40 after:border-white/50",
        inner: "before:border-[hsl(0deg,0%,85%)]",
      },
      elevation: {
        high: "drop-shadow-2xl",
        medium: "drop-shadow-lg",
        flat: "drop-shadow",
      },
      lightDirection: {
        top: "drop-shadow-[...]",
        topLeft:"drop-shadow-[...]",
        topRight:"drop-shadow-[...]",
      },
...
**not the actual code**`;

export const stepOneCode = `npm i depth-decorator`;

export const stepTwoCode = `export default {
  content: [
    "src/**/*.{js,jsx,ts,tsx}",
    "node_modules/depth-decorator/dist/**/*.{js,ts,jsx,tsx}",
  ],
  ...
};`;

export const stepThreeCode = `export function App(){
  return(
    <DepthLayer>
      <AwesomePieceOfUI />
    </DepthLayer>
  )
}
`;

export const steps = [
  {
    code: stepOneCode,
    title: "install package",
    description:
      "To incorporate DepthDecorator into your project, simply download the library from the npm registry using the command",
    codeLang: "npm",
    filename: "terminal",
  },
  {
    code: stepTwoCode,
    title: "tailwind configuration",
    description:
      "Prior to utilizing DepthDecorator, ensure that you have Tailwind CSS installed. Follow the official installation guide for Tailwind CSS. Additionally, integrate the following code into your tailwind.config.(js,ts,mjs) file:",
    codeLang: "ts",
    filename: "tailwind.config.ts",
  },
  {
    code: stepThreeCode,
    title: "ready to go!",
    description: "now our DepthDecorator is ready to use!",
    codeLang: "tsx",
    filename: "App.tsx",
  },
];
