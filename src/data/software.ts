import type { PinokioApp, SoftwareItem } from "@/types";

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
    cons: ["No incluye, de serie, características que otros agentes sí traen"],
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
    recommended: true
  },
  {
    name: "llama-server",
    description: "Chat web y API integrados en llama.cpp para usar el modelo directamente, sin agente. Ollama y LM Studio incluyen su propio servidor equivalente.",
    links: [],
    audience: "Quien quiere usar el modelo de forma conversacional.",
    pros: ["Viene integrado en el motor"],
    cons: ["No tiene el mismo acceso, funciones y capacidades que un agente"],
    recommended: true,
  },
];

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
    cons: ["Curva de aprendizaje", "Consume más recursos que Stable Diffusion.cpp"],
  },
];

export const transcriptionSoftware: SoftwareItem[] = [
  {
    name: "whisper.cpp",
    description: "Motor de transcripción de audio en local: convierte voz a texto sin nube.",
    links: [
      { label: "Repositorio", href: "https://github.com/ggml-org/whisper.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/whispercpp/" },
    ],
    audience: "Quien necesita transcribir un volumen considerable de audio en su propio equipo.",
    pros: ["Funciona sin conexión", "Con acceso a todos los modelos de Whisper"],
    cons: ["Solo acepta WAV de 16 bits, hay que convertir antes"],
    recommended: true,
  },
  {
    name: "WhisperW",
    description: "Transcribe en tu navegador con versiones de Whisper (modelos Tiny, Base y Small) de la ONNX Community, sin instalar nada.",
    links: [{ label: "Sitio web", href: "https://whisperw.pages.dev" }],
    audience: "Quien quiere transcribir cosas pequeñas sin descargar nada manualmente.",
    pros: ["Cero instalación, todo en el navegador", "Modelos pequeños y rápidos"],
    cons: ["Anclado a las limitaciones de los navegadores", "Sin acceso a los modelos más grandes y precisos"],
    recommended: true
  },
  {
    name: "audio.cpp",
    description: "Motor todo en uno para modelos de audio. Incluye transcripción, generación de música y voz, con UI web y sin configurar nada.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/0xShug0/audio.cpp" },
    ],
    audience: "Quien quiere un solo motor para todo lo relacionado con audio.",
    pros: ["Sin dependencias, es un binario precompilado", "Interfaz web", "Muchos modelos que se descargan con un clic"],
    cons: ["La interfaz gráfica es horrible y poco clara.", "Cero información o contexto sobre los modelos disponibles"],
  },
];

export const voiceSoftware: SoftwareItem[] = [
  {
    name: "qwentts.cpp",
    description: "Motor de inferencia para pasar texto a voz en local con el modelo Qwen3-TTS: clonar una voz, usar voces integradas o diseñar una desde una descripción.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ServeurpersoCom/qwentts.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/qwen-tts/" },
    ],
    audience: "Quien quiere generar voz en su equipo, clonarla o diseñarla.",
    pros: ["Clonación desde unos segundos de audio", "Servidor con API compatible con OpenAI"],
    cons: ["Hay que compilarlo"],
  },
    {
    name: "Voicebox",
    description: "App que automatiza el uso de modelos como Qwen3-TTS, Whisper o Chatterbox. Permite crear y clonar voces.",
    links: [{ label: "Sitio web", href: "https://voicebox.sh" }],
    audience: "Quien quiere jugar con su voz sin tocar modelos.",
    pros: ["Descarga de modelos automática", "Guarda perfiles de voz para reutilizarlos", "Interfaz gráfica muy fácil de usar", "Incluye una API para automatizar creaciones con la terminal"],
    cons: ["Dependencia de terceros: si sale un modelo mejor, no puedes usarlo hasta que lo actualicen"],
    recommended: true
  },
{
    name: "audio.cpp",
    description: "Motor todo en uno para modelos de audio. Incluye transcripción, generación de música y voz, con UI web y sin configurar nada.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/0xShug0/audio.cpp" },
    ],
    audience: "Quien quiere un solo motor para todo lo relacionado con audio.",
    pros: ["Sin dependencias, es un binario precompilado", "Interfaz web", "Muchos modelos que se descargan con un clic"],
    cons: ["La interfaz gráfica es horrible y poco clara.", "Cero información o contexto sobre los modelos disponibles"],
  },
];

export const musicSoftware: SoftwareItem[] = [
  {
    name: "acestep.cpp",
    description: "Motor de inferencia para generar música en local a partir de un prompt y una letra, con servidor y web propia.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ServeurpersoCom/acestep.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/acestepcpp/" },
    ],
    audience: "Quien quiere generar canciones sin depender de la nube.",
    pros: ["Prompt, letra, BPM e idioma configurables", "Web local con todos los pasos"],
    cons: ["Hay que compilarlo", "Necesita varios modelos cargados por separado"],
    recommended: true,
  },
  {
    name: "audio.cpp",
    description: "Motor todo en uno para modelos de audio. Incluye transcripción, generación de música y voz, con UI web y sin configurar nada.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/0xShug0/audio.cpp" },
    ],
    audience: "Quien quiere un solo motor para todo lo relacionado con audio.",
    pros: ["Sin dependencias, es un binario precompilado", "Interfaz web", "Muchos modelos que se descargan con un clic"],
    cons: ["La interfaz gráfica es horrible y poco clara.", "Cero información o contexto sobre los modelos disponibles"],
  },
];

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
    cons: ["Requiere Node.js", "Solo dos modelos disponibles"],
  },
];

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
    recommended: true
  },
];

export const classifierSoftware: SoftwareItem[] = [
  {
    name: "laya.cpp",
    description: "Motor para clasificar y decidir, no para generar texto: le pasas un estado y preguntas tipadas y devuelve probabilidades calibradas.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/lkarlslund/laya.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/layacpp/" },
    ],
    audience: "Quien necesita decisiones automáticas rápidas sin gastar tokens de un LLM.",
    pros: ["Modelos de menos de 1 GB", "API compatible con Jev"],
    cons: ["Sin binarios precompilados, hay que compilarlo"],
  },
  {
    name: "llama.cpp",
    description: "Motor usado en las pruebas con los modelos GGUF de decisión.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ggml-org/llama.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/llamacpp/" },
    ],
    audience: "Quien ya lo usa para LLM y quiere probar decisión.",
    pros: ["Ya instalado si vienes de LLM", "Sirve los GGUF por API con llama-server"],
    cons: ["Más pesado que un clasificador dedicado"],
    recommended: true
  },
];

export const embeddingSoftware: SoftwareItem[] = [
  {
    name: "llama.cpp",
    description: "Motor de inferencia en C++ que también carga modelos de embeddings en GGUF y los sirve por HTTP con llama-server.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ggml-org/llama.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/llamacpp/" },
    ],
    audience: "Quien ya lo usa para LLM y quiere añadir búsqueda semántica sin instalar nada más.",
    pros: ["Nada más que instalar si ya lo usas", "Mismo flujo que ya conoces del texto", "Endpoint de embeddings integrado en llama-server"],
    cons: ["Solo terminal, sin interfaz"], 
    recommended: true
  },
];

export const appSoftware: SoftwareItem[] = [
  {
    name: "Pinokio",
    description: "Lanzador que instala y ejecuta apps de IA con un clic. Automatiza toda la instalación y te olvidas de las dependencias.",
    links: [{ label: "Sitio web", href: "https://pinokio.co" }],
    audience: "Quien quiere probar herramientas sin pelearse con Python u otras herramientas.",
    pros: ["Puedes ejecutar aplicaciones de IA sin complicaciones", "Un catálogo enorme donde elegir"],
    cons: ["Consume mucho espacio en disco", "Consume más recursos que los motores de inferencia sueltos", "Las aplicaciones no verificadas pueden contener malware"],
    recommended: true
  },
  {
    name: "Voicebox",
    description: "App que automatiza el uso de modelos como Qwen3-TTS, Whisper o Chatterbox. Permite crear y clonar voces.",
    links: [{ label: "Sitio web", href: "https://voicebox.sh" }],
    audience: "Quien quiere jugar con su voz sin tocar modelos.",
    pros:["Descarga de modelos automática", "Guarda perfiles de voz para reutilizarlos", "Interfaz gráfica muy fácil de usar", "Incluye una API para automatizar creaciones con la terminal"],
    cons: ["Dependencia de terceros. Si se lanza un modelo mejor no lo puedes utilizar hasta que los creadores actualicen"]
  },
  {
    name: "Upscayl Desktop",
    description: "Programa que permite usar modelos de reescalado sin configurar nada.",
    links: [{ label: "Sitio web", href: "https://upscayl.org/download" }],
    audience: "Quien quiere jugar agrandar imágenes sin complicarse.",
    pros:["No te preocupas por qué modelos utilizas", "Interfaz gráfica muy simple"],
    cons: ["No controlas el modelo que utilizas", "Algunos modelos que incluyen tienen licencia para uso comercial"]
  },
];

export const pinokioApps: PinokioApp[] = [
  {
    name: "FaceFusion",
    purpose:
      "Intercambio y edición de caras en fotos y vídeos.",
    url: "https://pinokio.co/apps/github-com-facefusion-facefusion-pinokio",
  },
  {
    name: "LivePortrait",
    purpose:
      "Convierte un retrato a vídeo usando otro vídeo como referencia.",
    url: "https://pinokio.co/apps/github-com-pinokiofactory-liveportrait",
  },
  {
    name: "RMBG-2-Studio",
    purpose:
      "Borra el fondo de una imagen con BRIA-RMBG-2.0 (licencia no comercial). ",
    url: "https://pinokio.co/apps/github-com-pinokiofactory-rmbg-2-studio",
  },
  {
    name: "Whisper-WebUI",
    purpose:
      "Utiliza Whisper en local.",
    url: "https://beta.pinokio.co/apps/github-com-pinokiofactory-whisper-webui",
  },
  {
    name: "Clarity Refiners UI",
    purpose:
      "Mejora la calidad de las imágenes. No reescala, reinterpreta.",
    url: "https://pinokio.co/apps/github-com-pinokiofactory-clarity-refiners-ui",
  },
  {
    name: "LightOnOCR-2-1B",
    purpose:
      "Para hacer OCR a fotos y documentos.",
    url: "https://pinokio.co/apps/github-com-theawaken1-lightonocr-2-1b-pinokio",
  },
];
