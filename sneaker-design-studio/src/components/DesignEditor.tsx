import ColorPicker from "./ColorPicker";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import SneakerPreview from "./SneakerPreview";
import { sneakerComponent as componentConfig } from "../data/sneakerComponent";
import { getDesign, saveDesign, updateDesign } from "../utils/designStorage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { materials } from "../data/materials";
import {
  setComponentColor,
  setComponentMaterial,
  resetDesign,
  undo,
  redo,
  loadDesign,
  setModel
} from "../store/DesignSlice";
import { sneakerModels, type SneakerModel } from "../data/sneakerModels";

function DesignEditor() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const existingDesign = id ? getDesign(id) : undefined;

  const [designName, setDesignName] = useState(
    existingDesign?.name ?? "My Sneaker Design",
  );
  const model = useAppSelector(
    (state) => state.design.model,
  );
  const components = useAppSelector((state) => state.design.components);
  const componentMaterials = useAppSelector((state) => state.design.materials);
  const selectedComponent = useAppSelector(
    (state) => state.editor.selectedComponent,
  );

  const past = useAppSelector((state) => state.design.past);

  const future = useAppSelector((state) => state.design.future);
  const handleSave = () => {
    const now = new Date().toISOString();

    if (id) {
      const existingDesign = getDesign(id);

      if (!existingDesign) {
        return;
      }

      const design = {
        ...existingDesign,
        name: designName,
        components: {
          ...components,
        },
        updatedAt: now,
      };

      updateDesign(design);

      return;
    }

    const design = {
      id: crypto.randomUUID(),
      name: designName,
      model: selectedModel,
      components: {
        ...components,
      },
      createdAt: now,
      updatedAt: now,
    };

    saveDesign(design);
  };
  useEffect(() => {
    if (!id) {
      return;
    }

    const design = getDesign(id);

    if (!design) {
      return;
    }

    setSelectedModel(design.model as SneakerModel);

    dispatch(
      loadDesign({
        model: design.model,
        components: design.components,
      }),
    );
  }, [id, dispatch]);
  return (
    <div className="design-editor">
      <header className="design-editor__header">
        <h1 className="design-editor__title">Sneaker Design Studio</h1>
      </header>

      <main className="design-editor__workspace">
        <section className="design-editor__preview">
          <SneakerPreview />
        </section>

        <aside className="design-editor__panel">
          <div className="design-editor__field">
            <label htmlFor="design-name">Design Name</label>

            <input
              id="design-name"
              type="text"
              value={designName}
              onChange={(event) => setDesignName(event.target.value)}
            />
          </div>
          <div className="design-editor__field">
            <label
              htmlFor="sneaker-model"
              className="design-editor__label"
            >
              Sneaker Model
            </label>

            <select
              id="sneaker-model"
              value={model}
              onChange={(event) =>
                dispatch(
                  setModel(
                    event.target.value as SneakerModel,
                  ),
                )
              }
              className="design-editor__input"
            >
              {Object.entries(sneakerModels).map(
                ([id, model]) => (
                  <option key={id} value={id}>
                    {model.name}
                  </option>
                ),
              )}
            </select>
          </div>
          <h2 className="design-editor__panel-title">Customize</h2>

          {!selectedComponent ? (
            <p className="design-editor__empty">
              Click a sneaker component to customize it.
            </p>
          ) : (
            <>
              <h3 className="design-editor__component">
                {componentConfig[selectedComponent].label}
              </h3>

              <ColorPicker
                label="Color"
                value={components[selectedComponent]}
                onChange={(color) => {
                  dispatch(
                    setComponentColor({
                      component: selectedComponent,
                      color,
                    }),
                  );
                }}
              />
              <div className="design-editor__field">
                <label
                  htmlFor="component-material"
                  className="design-editor__label"
                >
                  Material
                </label>

                <select
                  id="component-material"
                  value={componentMaterials[selectedComponent]}
                  onChange={(event) =>
                    dispatch(
                      setComponentMaterial({
                        component: selectedComponent,
                        material: event.target.value as SneakerMaterial,
                      }),
                    )
                  }
                  className="design-editor__input"
                >
                  {materials.map((material) => (
                    <option
                      key={material.id}
                      value={material.id}
                    >
                      {material.name}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <div className="design-editor__actions">
            <button
              type="button"
              onClick={() => dispatch(undo())}
              disabled={past.length === 0}
            >
              ↶ Undo
            </button>

            <button
              type="button"
              onClick={() => dispatch(redo())}
              disabled={future.length === 0}
            >
              ↷ Redo
            </button>
          </div>

          <button type="button" onClick={() => dispatch(resetDesign())}>
            Reset Design
          </button>
        </aside>
        <button type="button" onClick={handleSave}>
          Save Design
        </button>
      </main>
    </div>
  );
}

export default DesignEditor;
