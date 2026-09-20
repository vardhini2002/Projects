export const sneakerModels = [
  {
    id: "runner-v1",
    name: "Runner",
  },
  {
    id: "court-v1",
    name: "Court",
  },
  {
    id: "lifestyle-v1",
    name: "Lifestyle",
  },
] as const;

export type SneakerModel = (typeof sneakerModels)[number]["id"];
