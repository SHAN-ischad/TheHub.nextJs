"use client";

import type { GradientT } from "@shadergradient/react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

/** Configuração padrão do ShaderGradient */
const defaultGradientProps: Partial<GradientT> = {
  animate: "on",
  brightness: 1.2,
  cAzimuthAngle: 180,
  cDistance: 1.11,
  cPolarAngle: 90,
  cameraZoom: 1,
  color1: "#ff407c",
  color2: "#c246db",
  color3: "#af92e1",
  envPreset: "city",
  grain: "off",
  lightType: "3d",
  positionX: -1.4,
  positionY: 0,
  positionZ: 0,
  range: "enabled",
  rangeEnd: 40,
  rangeStart: 0,
  reflection: 0.1,
  rotationX: 0,
  rotationY: 10,
  rotationZ: 50,
  shader: "defaults",
  type: "plane",
  uAmplitude: 1,
  uDensity: 0.5,
  uFrequency: 5.5,
  uSpeed: 0.6,
  uStrength: 2,
  uTime: 0,
  wireframe: false,
};

type ShaderGradientWrapperProps = {
  gradientProps?: Partial<GradientT>;
  canvasProps?: { fov?: number; pixelDensity?: number };
  className?: string;
  style?: React.CSSProperties;
};

export function ShaderGradientWrapper({
  gradientProps,
  canvasProps,
  className = "",
  style,
}: ShaderGradientWrapperProps) {
  return (
    <div
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        ...style,
      }}
    >
      <ShaderGradientCanvas
        fov={canvasProps?.fov ?? 45}
        pixelDensity={canvasProps?.pixelDensity ?? 3}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ShaderGradient {...defaultGradientProps} {...gradientProps} />
      </ShaderGradientCanvas>
    </div>
  );
}

export { ShaderGradient, ShaderGradientCanvas };
export type { GradientT };
