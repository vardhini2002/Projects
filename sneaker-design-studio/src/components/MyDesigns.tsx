import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SavedDesign } from "../store/DesignTypes";
import SneakerSvgPreview from "./SneakerSvgPreview";
import { getDesigns, deleteDesign } from "../utils/designStorage";

function MyDesigns() {
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const navigate = useNavigate();
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
              <article key={design.id}>
                <div className="my-designs__preview">
                  <SneakerSvgPreview design={design} />
                </div>
                <h2>{design.name}</h2>

                <p>
                  Last updated: {new Date(design.updatedAt).toLocaleString()}
                </p>

                <div>
                  <button
                    type="button"
                    onClick={() => navigate(`/designs/${design.id}`)}
                  >
                    Open
                  </button>

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
