import { useAppSelector } from "../store/hooks";
import SneakerSvg from "../assets/sneakers/sneaker.svg?react";


function SneakerPreview() {
  const components = useAppSelector(
    (state) => state.design.components
  );

  return (
    <div className="sneaker-preview">
      <SneakerSvg
        style={{
          "--upper-color": components.upper,
          "--heel-color": components.heel,
          "--tongue-color": components.tongue,
          "--midsole-color": components.midsole,
          "--outsole-color": components.outsole,
          "--laces-color": components.laces,
          "--toe-color": components.toe,
          "--logo-color": components.logo,
        } as React.CSSProperties}
      />
    </div>
  );
}

export default SneakerPreview;