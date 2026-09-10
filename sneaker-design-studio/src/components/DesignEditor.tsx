import ColorPicker from "./ColorPicker";

import {
  setComponentColor,
  resetDesign,
  type SneakerComponent,
} from "../store/DesignSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks";

import {
  setSelectedComponent,
} from "../store/editorSlice";

import SneakerPreview from "./SneakerPreview";

const componentLabels: {
  key: SneakerComponent;
  label: string;
}[] = [
  { key: "upper", label: "Upper" },
  { key: "heel", label: "Heel" },
  { key: "tongue", label: "Tongue" },
  { key: "midsole", label: "Midsole" },
  { key: "outsole", label: "Outsole" },
  { key: "laces", label: "Laces" },
  { key: "toe", label: "Toe" },
  { key: "logo", label: "Logo" },
];

function DesignEditor() {
  const dispatch = useAppDispatch();

  const components = useAppSelector(
    (state) => state.design.components
  );

  const selectedComponent = useAppSelector(
  (state) => state.editor.selectedComponent
);

  return (
    <div>
      <h1>Sneaker Design Studio</h1>

      <SneakerPreview />

      <div>
        <h2>Customize</h2>
        <p>
          Selected component:{" "}
          {selectedComponent ?? "None"}
        </p>

        {componentLabels.map(({ key, label }) => (
          <div key={key}>
            <button onClick={() => dispatch(setSelectedComponent(key))}>
              Select {label}
            </button>

            <ColorPicker
              label={label}
              value={components[key]}
              onChange={(color) => {
                dispatch(
                  setComponentColor({
                    component: key,
                    color,
                  })
                );
              }}
            />
          </div>
        ))}
        <button onClick={() => dispatch(resetDesign())}>
          Reset Design
        </button>
      </div>
    </div>
  );
}

export default DesignEditor;