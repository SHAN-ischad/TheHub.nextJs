"use client"

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"
import type { GradientT } from "@shadergradient/react"

/** Configuração padrão do ShaderGradient (sphere, cores roxo/azul/cinza, animação) */
const defaultGradientProps: Partial<GradientT> & Record<string, unknown> = {
  animate: "on",
  brightness: 1.1,
  cAzimuthAngle: 180,
  cDistance: 2.61,
  cPolarAngle: 90,
  cameraZoom: 6.51,
  color1: "#8730ff",
  color2: "#9e9eff",
  color3: "#403C3B",
  envPreset: "lobby",
  lightType: "3d",
  positionX: -1.4,
  positionY: 0,
  positionZ: 0,
  range: "disabled",
  rangeEnd: 40,
  rangeStart: 0,
  reflection: 0.1,
  rotationX: 0,
  rotationY: 10,
  rotationZ: 50,
  shader: "defaults",
  type: "sphere",
  uAmplitude: 1.3,
  uDensity: 1,
  uFrequency: 5.5,
  uSpeed: 0.4,
  uStrength: 0.4,
  uTime: 0,
  wireframe: false,
  grain: "off",
  control: "props",
  axesHelper: "off",
  gizmoHelper: "hide",
  destination: "onCanvas",
  embedMode: "off",
  format: "gif",
  frameRate: 10,
}

type ShaderGradientWrapperProps = {
  /** Props do ShaderGradient (sobrescrevem o padrão) */
  gradientProps?: Partial<GradientT> & Record<string, unknown>
  /** Props do Canvas (fov, pixelDensity) */
  canvasProps?: { fov?: number; pixelDensity?: number }
  /** Classes CSS do container. O container deve ter position relative se quiser conteúdo por cima. */
  className?: string
  /** Estilo inline do container */
  style?: React.CSSProperties
}

/**
 * Wrapper cliente para o Shader Gradient (WebGL).
 * Usa por padrão a config sphere com cores #8730ff / #9e9eff / #403C3B.
 * Passe gradientProps para customizar.
 */
export function ShaderGradientWrapper({
  gradientProps,
  canvasProps,
  className,
  style,
}: ShaderGradientWrapperProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        minWidth: "100%",
        minHeight: "100%",
        overflow: "hidden",
        ...style,
      }}
    >
      <ShaderGradientCanvas
        fov={canvasProps?.fov ?? 50}
        pixelDensity={canvasProps?.pixelDensity ?? 1.7}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
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
