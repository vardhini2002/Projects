import SneakerPreview from "./SneakerPreview";
import { useAppDispatch } from "../store/hooks";
import ColorPicker from "./ColorPicker";
import {
  setUpperColor,
  setSoleColor,
  setLacesColor,
} from "../store/DesignSlice";
import { useAppSelector } from "../store/hooks";

function DesignEditor() {
  const dispatch = useAppDispatch();
  const upperColor = useAppSelector((state) => state.design.upper);
  const soleColor = useAppSelector((state) => state.design.sole);
  const lacesColor = useAppSelector((state) => state.design.laces);
  const upperColors = [
  "#FF0000",
  "#0000FF",
  "#00AA00",
  "#000000",
  "#FFFFFF",
];
const soleColors = [
  "#FFFFFF",
  "#000000",
  "#0000FF",
  "#FF0000",
];
const lacesColors = [
  "#FFFFFF",
  "#000000",
  "#FF0000",
  "#0000FF",
];

  return (
    <div>

      <h1>Sneaker Design Studio</h1>

      <SneakerPreview
      />

      <div>

        <h2>Customize</h2>

        <h3>Upper</h3>

  <ColorPicker
    colors={upperColors}
    selectedColor={upperColor}
    onChange={(color) =>
      dispatch(setUpperColor(color))
    }
  />


        <h3>Sole</h3>

      <ColorPicker
        colors={soleColors}
        selectedColor={soleColor}
        onChange={(color) =>
          dispatch(setSoleColor(color))
        }
      />


       <h3>Laces</h3>

      <ColorPicker
        colors={lacesColors}
        selectedColor={lacesColor}
        onChange={(color) =>
          dispatch(setLacesColor(color))
        }
      />

      </div>

    </div>
  );
}

export default DesignEditor;