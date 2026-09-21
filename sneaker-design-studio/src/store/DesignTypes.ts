import type { SneakerComponent } from "./DesignSlice";
import type { SneakerModel } from "../data/sneakerModels";
import type { SneakerMaterial } from "../data/materials";

export interface SavedDesign {
  id: string;
  name: string;
  model: SneakerModel;
  components: Record<SneakerComponent, string>;
  materials: Record<SneakerComponent, SneakerMaterial>;
  createdAt: string;
  updatedAt: string;
}
