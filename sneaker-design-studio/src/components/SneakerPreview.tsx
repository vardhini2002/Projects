import type {CSSProperties,MouseEvent,} from "react";
import SneakerSvg from "../assets/sneakers/sneaker.svg?react";
import {useAppDispatch,useAppSelector,} from "../store/hooks";
import {setSelectedComponent,} from "../store/editorSlice";
import type {SneakerComponent,} from "../store/DesignSlice";

function SneakerPreview() {
  const dispatch = useAppDispatch();

  const components = useAppSelector(
    (state) => state.design.components
  );
    const selectedComponent = useAppSelector(
    (state) => state.editor.selectedComponent
  );

  const sneakerStyles = {
    "--upper-color": components.upper,
    "--heel-color": components.heel,
    "--tongue-color": components.tongue,
    "--midsole-color": components.midsole,
    "--outsole-color": components.outsole,
    "--laces-color": components.laces,
    "--toe-color": components.toe,
    "--logo-color": components.logo,
  } as CSSProperties;

  const handleSneakerClick = (event: MouseEvent<SVGSVGElement>) => {
    const target = event.target as SVGElement;

    const component = target.id as SneakerComponent;
	if (component.startsWith("lace-")) {
		component = "laces";
	}

    dispatch(setSelectedComponent(component));
  };

  return (
    <div 
      className={`sneaker-canvas selected-${selectedComponent ?? "none"}`}
    >
      <SneakerSvg
        style={sneakerStyles}
        onClick={handleSneakerClick}
      />
    </div>
  );
}

export default SneakerPreview;