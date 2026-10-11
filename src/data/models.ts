import type { ModelItem } from "@/types";

/* TODO: sustituir por datos reales. Nombres y cifras de ejemplo para validar el layout. */
export const llmModels: ModelItem[] = [
  {
    name: "Modelo de ejemplo 7B",
    size: "7B",
    quantization: "Q4_K_M",
    vram: "~5 GB",
    use: "Chat general y pruebas de velocidad.",
    url: "https://huggingface.co",
  },
  {
    name: "Modelo de ejemplo 8B",
    size: "8B",
    quantization: "Q5_K_M",
    vram: "~6 GB",
    use: "Instrucciones y contexto medio.",
    url: "https://huggingface.co",
  },
];

/* TODO: sustituir por datos reales. */
export const diffusionModels: ModelItem[] = [
  {
    name: "Modelo de difusión de ejemplo",
    size: "2 GB",
    quantization: "FP16",
    vram: "~5 GB",
    use: "Pruebas 512×512 en GPU de 8 GB.",
    url: "https://huggingface.co",
  },
];

/* TODO: sustituir por datos reales. */
export const upscaleModels: ModelItem[] = [
  {
    name: "Modelo de upscale de ejemplo",
    size: "64 MB",
    quantization: "FP32",
    vram: "~2 GB",
    use: "Ampliar ×4 fotos pequeñas.",
    url: "https://huggingface.co",
  },
];

/* TODO: sustituir por datos reales. */
export const otherModels: ModelItem[] = [
  {
    name: "Modelo de recorte de ejemplo",
    size: "170 MB",
    quantization: "FP32",
    vram: "~1 GB",
    use: "Quitar el fondo con transparencia.",
    url: "https://huggingface.co",
  },
];

/* TODO: sustituir por datos reales. */
export const videoModels: ModelItem[] = [
  {
    name: "Modelo de vídeo de ejemplo",
    size: "2 GB",
    quantization: "FP16",
    vram: "~6 GB",
    use: "Clips cortos de ejemplo para validar el flujo.",
    url: "https://huggingface.co",
  },
];
