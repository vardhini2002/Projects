import { useEffect, useState } from "react";
import type { SavedDesign } from "../store/DesignTypes";
import SneakerSvgPreview from "./SneakerSvgPreview";
import { getDesigns, deleteDesign } from "../utils/designStorage";

function MyDesigns() {
  const [designs, setDesigns] = useState<SavedDesign[]>([]);

  const loadDesigns = () => {
    const savedDesigns = getDesigns();

    setDesigns(savedDesigns);
  };

  useEffect(() => {
    loadDesigns();
  }, []);

  const handleDelete = (id: string) => {
    deleteDesign(id);

    loadDesigns();
  };

  return (
    <div className="my-designs">
      <header className="my-designs__header">
        <h1 className="my-designs__title">My Designs</h1>
      </header>

      <main className="my-designs__content">
        {designs.length === 0 ? (
          <p className="my-designs__empty">No saved designs yet.</p>
        ) : (
          <div className="my-designs__grid">
            {designs.map((design) => (
              <article key={design.id} className="my-designs__card">
                <div className="my-designs__preview">
                  <SneakerSvgPreview design={design} />
                </div>
                <div className="my-designs__details">
                  <h2 className="my-designs__name">{design.name}</h2>

                  <p className="my-designs__model">Model: {design.model}</p>

                  <button type="button" onClick={() => handleDelete(design.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default MyDesigns;
