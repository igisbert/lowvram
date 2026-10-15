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
    pros: ["Rendimiento muy alto", "Ideal para servir modelos en red local o nube"],
    cons: ["Sobredimensionado para hardware doméstico", "Mucho más complejo de instalar y configurar que llama.cpp"],
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
  {
    name: "OpenCode",
    description: "Agente de terminal con más funciones listas para usar, que incluye modelos en nube gratuitos.",
    links: [
      { label: "Sitio web", href: "https://opencode.ai" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/opencode" },
    ],
    audience: "Quien quiere más funciones y usar modelos en nube.",
    pros: ["Muchas más funciones que Pi", "Modelos cloud gratuitos incluidos"],
    cons: ["Menos ligero que Pi", "Consume más contexto de serie"],
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

/* TODO: sustituir por datos reales. Ejemplos inventados para validar el layout. */
export const transcriptionSoftware: SoftwareItem[] = [
  {
    name: "Programa de transcripción de ejemplo",
    description: "Descripción corta de ejemplo para validar la ficha.",
    links: [{ label: "Sitio web", href: "https://example.com" }],
    audience: "Ejemplo de para quién es.",
  },
  {
    name: "WhisperW",
    description: "Transcribe en tu navegador con Whisper en ONNX (modelos Tiny, Base y Small), sin instalar nada.",
    links: [{ label: "Sitio web", href: "https://whisperw.pages.dev" }],
    audience: "Quien quiere transcribir cosas pequeñas sin descargar nada manualmente.",
    pros: ["Cero instalación, todo en el navegador", "Modelos pequeños y rápidos"],
    cons: ["Anclado a las limitaciones de los navegadores"],
  },
];

/* TODO: sustituir por datos reales. Ejemplos inventados para validar el layout. */
export const voiceSoftware: SoftwareItem[] = [
  {
    name: "Programa de síntesis de ejemplo",
    description: "Descripción corta de ejemplo para validar la ficha.",
    links: [{ label: "Sitio web", href: "https://example.com" }],
    audience: "Ejemplo de para quién es.",
  },
];

/* TODO: sustituir por datos reales. Ejemplos inventados para validar el layout. */
export const musicSoftware: SoftwareItem[] = [
  {
    name: "Programa de música de ejemplo",
    description: "Descripción corta de ejemplo para validar la ficha.",
    links: [{ label: "Sitio web", href: "https://example.com" }],
    audience: "Ejemplo de para quién es.",
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
    audience: "Quien necesita máximo control sobre el reescalado.",
    pros: ["Multitud de modelos disponibles", "Modo TTA para máxima calidad"],
    cons: ["Solo terminal"],
    recommended: true,
  },
  {
    name: "stable-diffusion.cpp ",
    description: "Reescalado integrado en la herramienta que genera tus imágenes.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/leejet/stable-diffusion.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/stablediffusioncpp/" },
    ],
    audience: "Quien ya genera con sd.cpp y le basta un reescalado general.",
    pros: ["Nada más que instalar si ya usas sd.cpp"],
    cons: ["Menos modelos y opciones que upscayl-bin"],
    recommended: true,
  },
];

/* TODO: sustituir por datos reales. */
export const bgSoftware: SoftwareItem[] = [
  {
    name: "vision.cpp",
    description: "Visión por computador en C++ al estilo llama.cpp: ejecuta modelos GGUF en GPU o CPU con la mínima memoria.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/Acly/vision.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/bgremove/" },
    ],
    audience: "Quien quiere la mayor variedad de modelos y más control.",
    pros: ["Mínimo consumo de memoria", "Muchos modelos disponibles"],
    recommended: true,
  },
  {
    name: "imodify-cli",
    description: "CLI para optimizar y retocar imágenes por lotes que quita fondos con ONNX: modo fast con BEN2 o hq con BiRefNet_512x512.",
    links: [
      { label: "Ver en npm", href: "https://www.npmjs.com/package/imodify-cli" },
    ],
    audience: "Quien quiera una herramienta sencilla para retocar en lote.",
    pros: ["Modelos automáticos, cero descargas manuales", "También sirve para recortar, redimensionar y convertir formatos"],
    cons: ["Requiere Node.js"],
  },
];

/* TODO: sustituir por datos reales. */
export const videoSoftware: SoftwareItem[] = [
  {
    name: "ComfyUI",
    description: "Interfaz por nodos que también sirve flujos de vídeo.",
    links: [
      { label: "Sitio web", href: "https://www.comfy.org" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/comfyui/" },
    ],
    audience: "Quien ya lo usa para imagen y quiere probar vídeo.",
  },
  {
    name: "stable-diffusion.cpp",
    description: "El mismo motor que puedes usar para generar fotos también genera vídeos.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/leejet/stable-diffusion.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/sdcpp-i2v/" },
    ],
    audience: "Quien quiere probar a generar vídeos con el mismo motor.",
  },
];

/* TODO: sustituir por datos reales. Ejemplo inventado para validar el layout. */
export const ocrSoftware: SoftwareItem[] = [
  {
    name: "llama.cpp",
    description: "No solo sirve para texto: carga modelos multimodales que entienden imágenes, y también modelos dedicados solo a OCR.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ggerganov/llama.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/llamacpp/" },
    ],
    audience: "Quien ya lo usa para LLM y quiere OCR sin instalar nada más.",
    pros: ["Nada más que instalar si ya lo usas", "Mismo flujo que ya conoces del texto"],
    recommended: true,
  },
];

/* TODO: sustituir por datos reales. Ejemplo inventado para validar el layout. */
export const classifierSoftware: SoftwareItem[] = [
  {
    name: "Programa de clasificación de ejemplo",
    description: "Descripción corta de ejemplo para validar la ficha.",
    links: [{ label: "Sitio web", href: "https://example.com" }],
    audience: "Ejemplo de para quién es.",
  },
];

/* TODO: sustituir por datos reales. Ejemplos para validar el layout. */
export const appSoftware: SoftwareItem[] = [
  {
    name: "VoiceMod",
    description: "App que usa modelos de voz para cambiarla en tiempo real.",
    links: [{ label: "Sitio web", href: "https://www.voicemod.net" }],
    audience: "Quien quiere jugar con su voz sin tocar modelos.",
  },
  {
    name: "Pinokio",
    description: "Lanzador que instala y ejecuta apps de IA con un clic.",
    links: [{ label: "Sitio web", href: "https://pinokio.co" }],
    audience: "Quien quiere probar herramientas sin pelearse con la terminal.",
  },
];
