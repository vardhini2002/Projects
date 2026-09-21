import type {
  CSSProperties,
  MouseEvent,
} from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSelectedComponent } from "../store/editorSlice";
import type { SneakerComponent } from "../store/DesignSlice";
import { sneakerModels } from "../data/sneakerModels";

function SneakerPreview() {
  const dispatch = useAppDispatch();

  const components = useAppSelector(
    (state) => state.design.components,
  );

  const model = useAppSelector(
    (state) => state.design.model,
  );

  const selectedComponent = useAppSelector(
    (state) => state.editor.selectedComponent,
  );

  const SneakerSvg = sneakerModels[model]?.component;

  const sneakerStyles = {
    "--upper-color": components.upper,
    "--heel-color": components.heel,
    "--tongue-color": components.tongue,
    "--midsole-color": components.midsole,
    "--outsole-color": components.outsole,
    "--laces-color": components.laces,
    "--toe-color": components.toe,
    "--logo-color": components.logo,

    "--selected-component": selectedComponent ?? "none",
  } as CSSProperties;

  const isSneakerComponent = (
    value: string,
  ): value is SneakerComponent => {
    return value in components;
  };

  const handleSneakerClick = (
    event: MouseEvent<SVGSVGElement>,
  ) => {
    const target = event.target as SVGElement;

    const id = target.id;

    if (id.startsWith("lace-")) {
      dispatch(setSelectedComponent("laces"));
      return;
    }

    if (isSneakerComponent(id)) {
      dispatch(setSelectedComponent(id));
    }
  };

  return (
    <div
      className={`sneaker-canvas selected-${selectedComponent ?? "none"}`}
    >
      <SneakerSvg
        style={sneakerStyles}
        onClick={handleSneakerClick}
        data-selected-component={
          selectedComponent ?? ""
        }
      />
    </div>
  );
}

export default SneakerPreview;