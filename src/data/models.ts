import type { ModelItem } from "@/types";

export const llmModels: ModelItem[] = [
  {
    name: "MiMo-V2.6-Distill-Qwen-9B",
    size: "5.48 GB",
    params: "9B",
    quantization: "Q4_K_S",
    moe: false,
    mtp: false,
    input: ["texto", "imagen"],
    use: "",
    url: "https://huggingface.co/bartowski/MiMo-V2.6-Distill-Qwen-9B-GGUF",
  },
  {
    name: "Ling-3.0-tiny-GGUF",
    size: "5.64 GB",
    params: "8B",
    quantization: "Q5_K_M",
    moe: true,
    mtp: false,
    input: ["texto"],
    use: "",
    url: "https://huggingface.co/inclusionAI/Ling-3.0-tiny-GGUF",
  },
  {
    name: "Qwen3.6-35B-A3B",
    size: "10.8 GB",
    params: "35B",
    quantization: "UD-IQ2_XXS",
    moe: true,
    mtp: false,
    input: ["texto", "imagen"],
    use: "",
    url: "https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF",
  },
  {
    name: "Qwen3.6-35B-A3B-MTP",
    size: "11.8 GB",
    params: "35B",
    quantization: "UD-IQ2_XXS",
    moe: true,
    mtp: true,
    input: ["texto", "imagen"],
    use: "",
    url: "https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF",
  },
  {
    name: "Qwen3.8-27B",
    size: "7.27 GB",
    params: "27B",
    quantization: "UD-IQ2_XXS",
    moe: false,
    mtp: false,
    input: ["texto", "imagen"],
    use: "",
    url: "https://huggingface.co/unsloth/Qwen3.8-27B-GGUF",
  },
];

export const transcriptionModels: ModelItem[] = [
  {
    name: "Whisper tiny",
    size: "273 MB",
    params: "39M",
    quantization: "-",
    use: "",
    url: "https://huggingface.co/ggerganov/whisper.cpp/tree/main",
  },
  {
    name: "Whisper base",
    size: "388 MB",
    params: "74M",
    quantization: "-",
    use: "",
    url: "https://huggingface.co/ggerganov/whisper.cpp/tree/main",
  },
  {
    name: "Whisper small",
    size: "852 MB",
    params: "244M",
    quantization: "-",
    use: "",
    url: "https://huggingface.co/ggerganov/whisper.cpp/tree/main",
  },
  {
    name: "Whisper medium",
    size: "2.1 GB",
    params: "769M",
    quantization: "-",
    use: "",
    url: "https://huggingface.co/ggerganov/whisper.cpp/tree/main",
  },
  {
    name: "Whisper large",
    size: "3.9 GB",
    params: "1550M",
    quantization: "-",
    use: "",
    url: "https://huggingface.co/ggerganov/whisper.cpp/tree/main",
  },
];

export const voiceModels: ModelItem[] = [
  {
    name: "Modelo de voz de ejemplo",
    size: "1 GB",
    params: "TODO",
    quantization: "TODO",
    use: "",
    url: "https://huggingface.co",
  },
];

export const musicModels: ModelItem[] = [
  {
    name: "Modelo de música de ejemplo",
    size: "1 GB",
    params: "TODO",
    quantization: "TODO",
    use: "",
    url: "https://huggingface.co",
  },
];

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

export const bgModels: ModelItem[] = [
  {
    name: "BEN2",
    size: "219 MB",
    params: "94.6M",
    quantization: "-",
    vram: "~219 MB",
    use: "Incluido en imodify-cli",
    url: "https://huggingface.co/onnx-community/BEN2-ONNX",
  },
  {
    name: "BiRefNet_512x512",
    size: "473 MB",
    params: "0.2B",
    quantization: "-",
    vram: "~473 MB",
    use: "Incluido en imodify-cli",
    url: "https://huggingface.co/onnx-community/BiRefNet_512x512-ONNX",
  },
];

export const videoModels: ModelItem[] = [
  {
    name: "Wan2.2-TI2V-5B",
    size: "5.4 GB",
    params: "5B",
    quantization: "Q8_0",
    use: "",
    url: "https://huggingface.co/QuantStack/Wan2.2-TI2V-5B-GGUF",
  },
];

export const ocrModels: ModelItem[] = [
  {
    name: "GLM-OCR",
    size: "1.79 GB",
    params: "0.9B",
    quantization: "F16",
    use: "",
    url: "https://huggingface.co/ggml-org/GLM-OCR-GGUF",
  },
  {
    name: "PaddleOCR-VL-1.6",
    size: "936 MB",
    params: "0.5B",
    quantization: "-",
    use: "",
    url: "https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6-GGUF",
  },
];

export const classifierModels: ModelItem[] = [
  {
    name: "Julia-1-BF16",
    size: "303 MB",
    params: "0.1B",
    quantization: "BF16",
    language: "+50 idiomas",
    use: "",
    url: "https://huggingface.co/ggml-org/Julia-1-GGUF",
  },
  {
    name: "Laya-BF16",
    size: "844 MB",
    params: "0.4B",
    quantization: "BF16",
    language: "Inglés",
    use: "",
    url: "https://huggingface.co/ggml-org/Laya-GGUF",
  },
  {
    name: "Kev-4B-Q4_K_M",
    size: "3.03 GB",
    params: "4B",
    quantization: "Q4_K_M",
    language: "Inglés",
    use: "",
    url: "https://huggingface.co/ggml-org/Kev-4B-GGUF",
  },
];
