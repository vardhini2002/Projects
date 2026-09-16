import type { SavedDesign } from "../store/DesignTypes";

const STORAGE_KEY = "sneaker-designs";

export const saveDesign = (design: SavedDesign): void => {
  const existingDesigns = getDesigns();

  const updatedDesigns = [...existingDesigns, design];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDesigns));
};

export const getDesigns = (): SavedDesign[] => {
  const storedDesigns = localStorage.getItem(STORAGE_KEY);

  if (!storedDesigns) {
    return [];
  }

  return JSON.parse(storedDesigns);
};

export const getDesign = (id: string): SavedDesign | undefined => {
  const designs = getDesigns();

  return designs.find((design) => design.id === id);
};

export const deleteDesign = (id: string): void => {
  const designs = getDesigns();

  const updatedDesigns = designs.filter((design) => design.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDesigns));
};
