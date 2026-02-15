"use client"

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"
import type { GradientT } from "@shadergradient/react"

/** Configuração padrão do ShaderGradient */
const defaultGradientProps: Partial<GradientT> = {
  animate: "off",
  brightness: 1.2,
  cAzimuthAngle: 180,
  cDistance: 2.31,
  cPolarAngle: 90,
  cameraZoom: 1,
  color1: "#e042ff",
  color2: "#000000",
  color3: "#000002",
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
  type: "waterPlane",
  uAmplitude: 1,
  uDensity: 0.6,
  uFrequency: 5.5,
  uSpeed: 0.4,
  uStrength: 0.9,
  uTime: 0,
  wireframe: false,
}

type ShaderGradientWrapperProps = {
  /** Props do ShaderGradient (sobrescrevem o padrão) */
  gradientProps?: Partial<GradientT>
  /** Props do Canvas (fov, pixelDensity) */
  canvasProps?: { fov?: number; pixelDensity?: number }
  /** Classes CSS do container */
  className?: string
  /** Estilo inline do container */
  style?: React.CSSProperties
}

/**
 * Wrapper para o Shader Gradient (WebGL).
 * Usa configuração waterPlane com cores roxo/preto.
 */
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
        width: "100%",
        height: "100%",
        position: "fixed",
        overflow: "hidden",
        ...style,
      }}
    >
      <ShaderGradientCanvas
        fov={canvasProps?.fov ?? 45}
        pixelDensity={canvasProps?.pixelDensity ?? 0.7}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ShaderGradient
          {...defaultGradientProps}
          {...gradientProps}
        />
      </ShaderGradientCanvas>
    </div>
  )
}

export { ShaderGradientCanvas, ShaderGradient }
export type { GradientT }