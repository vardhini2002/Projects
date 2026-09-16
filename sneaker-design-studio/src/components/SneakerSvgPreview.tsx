import type { CSSProperties } from "react";

import SneakerSvg from "../assets/sneakers/sneaker.svg?react";

import type { SavedDesign } from "../store/DesignTypes";

interface SneakerSvgPreviewProps {
  design: SavedDesign;
}

function SneakerSvgPreview({ design }: SneakerSvgPreviewProps) {
  const sneakerStyles = {
    "--upper-color": design.components.upper,
    "--heel-color": design.components.heel,
    "--tongue-color": design.components.tongue,
    "--midsole-color": design.components.midsole,
    "--outsole-color": design.components.outsole,
    "--laces-color": design.components.laces,
    "--toe-color": design.components.toe,
    "--logo-color": design.components.logo,
  } as CSSProperties;

  return <SneakerSvg style={sneakerStyles} />;
}

export default SneakerSvgPreview;
