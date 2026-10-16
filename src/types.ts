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
  photo?: string;
};

export type SoftwareLink = {
  label: string;
  href: string;
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type TrialRunner = "Pi" | "OpenCode" | "llama-server";

export type Verdict = {
  model: string;
  fullModel?: string;
  avgSpeed?: string;
  strengths: string[];
  issues: string[];
  links?: SoftwareLink[];
};
export type SoftwareItem = {
  name: string;
  description: string;
  links: SoftwareLink[];
  audience: string;
  pros?: string[];
  cons?: string[];
  recommended?: boolean;
};

export type PinokioApp = {
  name: string;
  purpose: string;
  url: string;
};

export type ModelInput = "texto" | "imagen" | "video" | "audio";

export type ModelItem = {
  name: string;
  size: string;
  params: string;
  quantization: string;
  language?: string;
  vram?: string;
  moe?: boolean;
  mtp?: boolean;
  input?: ModelInput[];
  use: string;
  url: string;
  observations?: string[];
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
  time: number;
  alt: string;
  chartCsv?: string;
};

export type ResultSet = {
  id: string;
  label?: string;
  prompt?: string;
  seed?: number;
  description?: string;
  ratio: string;
  images: ResultImage[];
  firstIsOriginal?: boolean;
  checker?: boolean;
};

export type VideoResult = {
  id: string;
  src: string;
  model: string;
  prompt?: string;
  time: number;
  label: string;
};

export type SpotlightItem = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  links: SoftwareLink[];
};
