import type { SneakerComponent } from "./DesignSlice";

export interface SavedDesign {
  id: string;
  name: string;
  model: string;
  components: Record<SneakerComponent, string>;
  createdAt: string;
  updatedAt: string;
}
