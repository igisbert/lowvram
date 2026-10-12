import type { SoftwareItem } from "@/types";

/* TODO: sustituir por datos reales. Ejemplos conocidos para validar el componente. */
export const llmSoftware: SoftwareItem[] = [
  {
    name: "Ollama",
    description: "Ejecuta LLM locales con un solo comando y API compatible con OpenAI. Tiene su propio catálogo de modelos y ofrece nube de pago por si un modelo no cabe en tu equipo.",
    links: [{ label: "Sitio web", href: "https://ollama.com" }],
    audience: "Quien quiere empezar rápido sin configurar nada.",
    pros: ["Instalación simple", "Catálogo propio: un pull y listo", "Buena API local"],
    cons: ["Menos control fino que llama.cpp"],
  },
  {
    name: "LM Studio",
    description: "App de escritorio para buscar, descargar y probar modelos de Hugging Face con chat integrado, y servirlos en red local con API compatible con OpenAI.",
    links: [{ label: "Sitio web", href: "https://lmstudio.ai" }],
    audience: "Quien prefiere GUI antes que terminal.",
    pros: ["Interfaz cuidada, ideal para empezar", "Servidor local con un clic"],
    cons: ["Más pesado que Ollama", "Menos control fino que llama.cpp"],
  },
  {
    name: "llama.cpp",
    description: "Motor de inferencia en C++ que ejecuta modelos GGUF en CPU y GPU, con descarga parcial por capas para exprimir la VRAM disponible.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ggerganov/llama.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/llamacpp/" },
    ],
    audience: "Quien quiere exprimir VRAM y medir t/s de verdad.",
    pros: ["Offload por capas: decide qué cabe en GPU y qué va a RAM", "Mide t/s reales de generación y de prompt", "Control total sobre parámetros y cuantización"],
    cons: ["Más difícil de usar que Ollama o LM Studio"],
    recommended: true,
  },
  {
    name: "vLLM",
    description: "Motor para servir modelos en servidor, con API compatible con OpenAI y alto rendimiento ante muchas peticiones concurrentes.",
    links: [{ label: "Ver en GitHub", href: "https://github.com/vllm-project/vllm" }],
    audience: "Quien quiere montar un servidor local para varias apps o usuarios a la vez.",
    pros: ["Muy alto rendimiento sirviendo", "API compatible con OpenAI"],
    cons: ["Pensado para Linux y GPU potentes", "Sobredimensionado para un solo usuario en 8 GB"],
  },
];

/* Ficha real de Pi. */
export const llmAgents: SoftwareItem[] = [
  {
    name: "Pi",
    description: "Agente de terminal mínimo y extensible que funciona con decenas de proveedores, tanto en local como en nube.",
    links: [
      { label: "Sitio web", href: "https://pi.dev" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/pi/" },
    ],
    audience: "Quien quiere un agente ligero y moldeable para programar con sus modelos.",
    pros: ["Núcleo mínimo que adaptas a tu flujo", "Al ser tan mínimo, apenas consume contexto de serie"],
    cons: ["Sin subagentes ni modo plan de serie"],
    recommended: true,
  },
];

/* TODO: sustituir por datos reales. */
export const diffusionSoftware: SoftwareItem[] = [
  {
    name: "stable-diffusion.cpp",
    description: "Inferencia de difusión en C++: ligera y rápida, compatible con multitud de modelos y formatos, con cuantización opcional.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/leejet/stable-diffusion.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/stablediffusioncpp/" },
    ],
    audience: "Quien solo quiere generar imágenes rápidamente. ",
    pros: ["Ligero y rápido, binarios compilados", "No necesita ejecutar Python", "Soporte para CUDA, Vulkan, Metal y CPU"],
    cons: ["Solo terminal, sin interfaz"],
    recommended: true,
  },
  {
    name: "ComfyUI",
    description: "Interfaz por nodos para generar imagen con casi cualquier modelo: montas el flujo a mano, lo guardas y lo reutilizas. Con ComfyUI Desktop viene todo configurado de serie.",
    links: [
      { label: "Sitio web", href: "https://www.comfy.org" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/comfyui/" },
    ],
    audience: "Quien quiere controlar cada paso del pipeline.",
    pros: ["Flujos reproducibles y compartibles", "Flujos complejos encadenando pasos, no solo generar la foto y ya"],
    cons: ["Curva de aprendizaje", "Pide más VRAM que sd.cpp para lo mismo"],
  },
];

/* Datos reales de la guía de upscaler. */
export const upscaleSoftware: SoftwareItem[] = [
  {
    name: "upscayl-bin",
    description: "CLI de reescalado del proyecto Upscayl: usa modelos Real-ESRGAN sobre ncnn con aceleración Vulkan, todo en local.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/upscayl/upscayl-ncnn" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/upscaler/" },
    ],
    audience: "Quien reescala por terminal o automatiza lotes con scripts.",
    pros: ["Multitud de modelos intercambiables", "Control de tile para VRAM justas", "Modo TTA para máxima calidad"],
    cons: ["Solo terminal (existe GUI aparte)"],
  },
  {
    name: "stable-diffusion.cpp (modo upscale)",
    description: "sd-cli reescala con ESRGAN sin salir de la herramienta que genera tus imágenes.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/leejet/stable-diffusion.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/stablediffusioncpp/" },
    ],
    audience: "Quien ya genera con sd.cpp y le basta un reescalado general.",
    pros: ["Nada más que instalar si ya usas sd.cpp"],
    cons: ["Menos modelos y opciones que upscayl-bin"],
  },
];

/* TODO: sustituir por datos reales. */
export const otherSoftware: SoftwareItem[] = [
  {
    name: "Rembg",
    description: "Quita el fondo de una imagen en local con modelos U²-Net.",
    links: [{ label: "Ver en GitHub", href: "https://github.com/danielgatis/rembg" }],
    audience: "Quien necesita recortes con transparencia.",
  },
];

/* TODO: sustituir por datos reales. */
export const videoSoftware: SoftwareItem[] = [
  {
    name: "ComfyUI",
    description: "Interfaz por nodos que también sirve flujos de vídeo (AnimateDiff y similares).",
    links: [
      { label: "Sitio web", href: "https://www.comfy.org" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/comfyui/" },
    ],
    audience: "Quien ya lo usa para imagen y quiere probar vídeo.",
  },
  {
    name: "stable-diffusion.cpp",
    description: "Stable Diffusion en C++ con soporte de vídeo (Stable Video Diffusion) para generar clips en local.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/leejet/stable-diffusion.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/stablediffusioncpp/" },
    ],
    audience: "Quien quiere probar vídeo sin frameworks pesados.",
  },
];
