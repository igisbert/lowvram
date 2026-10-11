/* Single source of truth for all list shapes.
   UI builds itself from arrays in src/data/.
   Adding an entry = adding an array item, no component changes. */

export type NavItem = {
  label: string;
  href: string;
};

export type SpecItem = {
  id: string;
  label: string;
  value: string;
  detail?: string;
  photoAlt: string;
};

export type SoftwareItem = {
  name: string;
  description: string;
  url: string;
  audience: string;
  pros?: string[];
  cons?: string[];
};

export type ModelItem = {
  name: string;
  size: string;
  quantization: string;
  vram: string;
  use: string;
  url: string;
};

export type LlmResultRow = {
  model: string;
  quantization: string;
  context: string;
  genSpeed: string;
  promptSpeed: string;
  vramUsed: string;
  gpuLayers: string;
};

export type ResultImage = {
  src: string;
  model: string;
  time?: string;
  alt: string;
};

export type ResultSet = {
  id: string;
  prompt?: string;
  description?: string;
  ratio: string;
  images: ResultImage[];
  firstIsOriginal?: boolean;
  checker?: boolean;
};
