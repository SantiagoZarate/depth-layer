import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, type PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

export const depthLayerStyles = cva(
  `[&:has(relative)]:static [&>span]:block [&>*]:rounded-[inherit]
  before:absolute before:rounded-[inherit] before:pointer-events-none before:inset-0 before:border-b 
  after:absolute after:rounded-[inherit] after:pointer-events-none after:border-t after:inset-0 shadow`,
  {
    variants: {
      variant: {
        default: "before:border-black/40 after:border-white/50",
        inner:
          "before:border-[hsl(0deg,0%,85%)] after:border-t-black/30 after:shadow-[0px_5px_15px_rgba(0,0,0,0.35)_inset]",
      },
      elevation: {
        high: "drop-shadow-2xl",
        medium: "drop-shadow-lg",
        flat: "drop-shadow",
        none: "",
      },
      light: {
        radial:
          "before:bg-[radial-gradient(ellipse_at_50%_-150%,_var(--tw-gradient-stops))] before:from-white before:via-white/25 before:to-[rgba(0,0,0,0.25)]",
        linear: "",
        none: "",
      },
      lightDirection: {
        top: "drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)]",
        topLeft:
          "before:border-r after:border-l drop-shadow-[4px_4px_2px_rgba(0,0,0,0.15)]",
        topRight:
          "before:border-l after:border-r drop-shadow-[-4px_4px_2px_rgba(0,0,0,0.15)]",
      },
      opacity: {
        full: "before:opacity-100 after:opacity-100",
        medium: "before:opacity-60 after:opacity-60",
        low: "before:opacity-30 after:opacity-30",
        none: "before:opacity-0 after:opacity-0",
      },
      round: {
        full: "rounded-lg overflow-hidden",
        none: "",
      },
      hoverable: {
        true: "hover:-translate-y-[2px] hover:shadow-2xl hover:brightness-95 duration-200 transition-all",
      },
      clickable: {
        true: "cursor-pointer active:translate-y-[1px] active:shadow-none duration-150 transition-all",
      },
    },
    compoundVariants: [
      {
        variant: "inner",
        elevation: ["flat", "medium", "high"],
        className: "drop-shadow-[0px_4px_2px_rgba(0,0,0,0)]",
      },
      {
        variant: "inner",
        light: ["linear", "radial"],
        className:
          "before:bg-[linear-gradient(rgba(255,255,255,0),rgba(0,0,0,0))]",
      },
      {
        light: "linear",
        lightDirection: "top",
        className:
          "before:bg-[linear-gradient(rgba(255,255,255,0.15),rgba(0,0,0,0.15))]",
      },
      {
        light: "linear",
        lightDirection: "topLeft",
        className:
          "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_15%,rgba(0,0,0,0.25)_80%)]",
      },
      {
        light: "linear",
        lightDirection: "topRight",
        className:
          "before:bg-[linear-gradient(225deg,rgba(255,255,255,0.15)_15%,rgba(0,0,0,0.25)_80%)]",
      },
      {
        light: "radial",
        lightDirection: "topLeft",
        className:
          "before:bg-[radial-gradient(ellipse_at_0%_-150%,_var(--tw-gradient-stops))]",
      },
      {
        light: "radial",
        lightDirection: "topRight",
        className:
          "before:bg-[radial-gradient(ellipse_at_100%_-150%,_var(--tw-gradient-stops))]",
      },
    ],
    defaultVariants: {
      round: "full",
      variant: "default",
      light: "linear",
      elevation: "none",
      hoverable: false,
      clickable: false,
      lightDirection: "top",
      opacity: "full",
    },
  }
);

export type DepthLayerStylesProps = VariantProps<typeof depthLayerStyles>;

export type DepthLayerProps = PropsWithChildren &
  DepthLayerStylesProps &
  Pick<ComponentProps<"span">, "className">;

export function DepthLayer({
  variant,
  children,
  round,
  elevation,
  hoverable,
  lightDirection,
  light,
  opacity,
  clickable,
  className,
  ...args
}: DepthLayerProps) {
  return (
    <span
      className={cn(
        depthLayerStyles({
          round,
          elevation,
          variant,
          hoverable,
          lightDirection,
          light,
          opacity,
          clickable,
          className,
        })
      )}
      {...args}
    >
      {children}
    </span>
  );
}
