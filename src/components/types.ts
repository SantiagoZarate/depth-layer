import { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { depthLayerStyles } from "./DepthLayer";

export type DepthLayerProps = PropsWithChildren & VariantProps<typeof depthLayerStyles>