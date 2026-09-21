import type { SneakerComponent } from "./DesignSlice";
import type { SneakerModel } from "../data/sneakerModels";

export interface SavedDesign {
  id: string;
  name: string;
  model: SneakerModel;
  components: Record<SneakerComponent, string>;
  createdAt: string;
  updatedAt: string;
}
