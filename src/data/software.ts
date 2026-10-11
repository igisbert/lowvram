import type { SoftwareItem } from "@/types";

/* TODO: sustituir por datos reales. Ejemplos conocidos para validar el componente. */
export const llmSoftware: SoftwareItem[] = [
  {
    name: "Ollama",
    description: "Ejecuta LLM locales con un solo comando y API compatible con OpenAI.",
    url: "https://ollama.com",
    audience: "Quien quiere empezar rápido sin configurar nada.",
    pros: ["Instalación simple", "Buena API local"],
    cons: ["Menos control fino que llama.cpp"],
  },
  {
    name: "llama.cpp",
    description: "Motor de inferencia en C++ optimizado para CPU y GPU con offload parcial.",
    url: "https://github.com/ggerganov/llama.cpp",
    audience: "Quien quiere exprimir VRAM y medir t/s de verdad.",
  },
  {
    name: "LM Studio",
    description: "App de escritorio para descargar, probar y servir modelos con interfaz gráfica.",
    url: "https://lmstudio.ai",
    audience: "Quien prefiere GUI antes que terminal.",
  },
];

/* TODO: sustituir por datos reales. */
export const diffusionSoftware: SoftwareItem[] = [
  {
    name: "sd.cpp",
    description: "Stable Diffusion en C++ para generar imagen sin frameworks pesados.",
    url: "https://github.com/leejet/stable-diffusion.cpp",
    audience: "Quien quiere difusión ligera en GPU modesta.",
  },
  {
    name: "ComfyUI",
    description: "Interfaz por nodos para flujos de difusión reproducibles.",
    url: "https://github.com/comfyanonymous/ComfyUI",
    audience: "Quien quiere controlar cada paso del pipeline.",
  },
];

/* TODO: sustituir por datos reales. */
export const upscaleSoftware: SoftwareItem[] = [
  {
    name: "Real-ESRGAN",
    description: "Upscale clásico por línea de comandos, modelos intercambiables.",
    url: "https://github.com/xinntao/Real-ESRGAN",
    audience: "Quien quiere ampliar sin interfaz gráfica.",
  },
];

/* TODO: sustituir por datos reales. */
export const otherSoftware: SoftwareItem[] = [
  {
    name: "Rembg",
    description: "Quita el fondo de una imagen en local con modelos U²-Net.",
    url: "https://github.com/danielgatis/rembg",
    audience: "Quien necesita recortes con transparencia.",
  },
];
