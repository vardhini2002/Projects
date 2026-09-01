import ColorPicker from "./ColorPicker";

import {
  setUpperColor,
  setSoleColor,
  setLacesColor,
  resetDesign,
} from "../store/DesignSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks";

import SneakerPreview from "./SneakerPreview";

function DesignEditor() {
  const dispatch = useAppDispatch();

  const upperColor = useAppSelector(
    (state) => state.design.components.upper
  );

  const soleColor = useAppSelector(
    (state) => state.design.components.sole
  );

  const lacesColor = useAppSelector(
    (state) => state.design.components.laces
  );

  return (
    <div>
      <h1>Sneaker Design Studio</h1>

      <SneakerPreview />

      <div>
        <h2>Customize</h2>

        <ColorPicker
          label="Upper"
          value={upperColor}
          onChange={(color) =>
            dispatch(setUpperColor(color))
          }
        />

        <ColorPicker
          label="Sole"
          value={soleColor}
          onChange={(color) =>
            dispatch(setSoleColor(color))
          }
        />

        <ColorPicker
          label="Laces"
          value={lacesColor}
          onChange={(color) =>
            dispatch(setLacesColor(color))
          }
        />

        <button
          onClick={() => dispatch(resetDesign())}
        >
          Reset Design
        </button>
      </div>
    </div>
  );
}

export default DesignEditor;