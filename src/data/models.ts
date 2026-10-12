import type { ModelItem } from "@/types";

/* TODO: sustituir por datos reales. Nombres y cifras de ejemplo para validar el layout. */
export const llmModels: ModelItem[] = [
  {
    name: "Modelo de ejemplo 7B",
    size: "~5 GB",
    params: "7B",
    quantization: "Q4_K_M",
    vram: "~5 GB",
    use: "Chat general y pruebas de velocidad.",
    url: "https://huggingface.co",
  },
  {
    name: "Modelo de ejemplo 8B",
    size: "~6 GB",
    params: "8B",
    quantization: "Q5_K_M",
    vram: "~6 GB",
    use: "Instrucciones y contexto medio.",
    url: "https://huggingface.co",
  },
];

/* Datos reales de data.md. Tamaños del `ls` convertidos a GB. VRAM aprox. = tamaño en disco. */
export const diffusionModels: ModelItem[] = [
  {
    name: "Anima Turbo",
    size: "2.1 GB",
    params: "2B",
    quantization: "Q8_0",
    vram: "~2.1 GB",
    use: "Anime",
    url: "https://huggingface.co/Abiray/Anima-turbo-v1.0-GGUF",
  },
  {
    name: "Flux.2 Klein",
    size: "5.5 GB",
    params: "9B",
    quantization: "Q4_K_M",
    vram: "~5.5 GB",
    use: "Realismo, edición",
    url: "https://huggingface.co/unsloth/FLUX.2-klein-9B-GGUF",
  },
  {
    name: "Krea 2 Turbo",
    size: "5.6 GB",
    params: "13B",
    quantization: "Q3_K_M",
    vram: "~5.6 GB",
    use: "Realismo, rapidez",
    url: "https://huggingface.co/vantagewithai/Krea-2-Turbo-GGUF",
  },
  {
    name: "Krea 2 Turbo",
    size: "7.0 GB",
    params: "13B",
    quantization: "Q4_K_S",
    vram: "~7.0 GB",
    use: "Realismo, rapidez",
    url: "https://huggingface.co/vantagewithai/Krea-2-Turbo-GGUF",
  },
  {
    name: "Qwen-Image-2.1",
    size: "5.0 GB",
    params: "7B",
    quantization: "Q5_K_M",
    vram: "~5.0 GB",
    use: "Realismo, Texto, Edición",
    url: "https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF",
  },
  {
    name: "Qwen-Image-2.1",
    size: "5.6 GB",
    params: "7B",
    quantization: "Q6_K",
    vram: "~5.6 GB",
    use: "Realismo, Texto, Edición",
    url: "https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF",
  },
  {
    name: "Z-Image-Turbo",
    size: "5.5 GB",
    params: "6B",
    quantization: "Q6_K",
    vram: "~5.5 GB",
    use: "Realismo, rapidez",
    url: "https://huggingface.co/unsloth/Z-Image-Turbo-GGUF",
  },
  {
    name: "Z-Image",
    size: "6.1 GB",
    params: "6B",
    quantization: "Q6_K",
    vram: "~6.1 GB",
    use: "Realismo, rapidez, variedad",
    url: "https://huggingface.co/unsloth/Z-Image-GGUF",
  },
];

/* Modelo tuneado con LoRA propia. Nombre original explícito omitido en la tabla. */
export const nsfwDiffusionModels: ModelItem[] = [
  {
    name: "PornMaster Klein 9B",
    size: "4.9 GB",
    params: "9B",
    quantization: "Q4_K",
    vram: "~4.9 GB",
    use: "Edición (mejor que Klein base), rapidez, NSFW",
    url: "https://huggingface.co/rectangleworm/PornMaster_Klein-9b",
  },
];

/* Datos reales del `ls`. Tamaños convertidos a MB. */
export const upscaleModels: ModelItem[] = [
  {
    name: "4xLSDIRplusN",
    size: "64 MB",
    params: "16.7M",
    quantization: "-",
    vram: "~64 MB",
    use: "Fotografías",
    url: "https://huggingface.co/wbruna/upscalers-sdcpp-gguf/blob/main/4xLSDIRplusN.gguf",
  },
  {
    name: "4xUltrasharpV10",
    size: "64 MB",
    params: "16.7M",
    quantization: "-",
    vram: "~64 MB",
    use: "General, Nitidez",
    url: "https://huggingface.co/wbruna/upscalers-sdcpp-gguf/blob/main/4xUltrasharpV10.gguf",
  },
  {
    name: "RealESRGAN_x4plus",
    size: "64 MB",
    params: "16.7M",
    quantization: "-",
    vram: "~64 MB",
    use: "General",
    url: "https://huggingface.co/wbruna/upscalers-sdcpp-gguf/blob/main/RealESRGAN_x4plus.gguf",
  },
];

/* TODO: sustituir por datos reales. */
export const bgModels: ModelItem[] = [
  {
    name: "Modelo de recorte de ejemplo",
    size: "170 MB",
    params: "TODO",
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
    params: "TODO",
    quantization: "FP16",
    vram: "~6 GB",
    use: "Clips cortos de ejemplo para validar el flujo.",
    url: "https://huggingface.co",
  },
];
