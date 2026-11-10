import type { PinokioApp, SoftwareItem } from "@/types";

export const llmSoftware: SoftwareItem[] = [
  {
    name: "Ollama",
    description: "Ejecuta modelos de lenguaje en local con un solo comando y ofrece una API compatible con OpenAI. Tiene su propio catálogo de modelos y una nube de pago por si alguno no cabe en tu equipo.",
    links: [
      { label: "Sitio web", href: "https://ollama.com" },
      { label: "Ver en GitHub", href: "https://github.com/ollama/ollama" },
    ],
    audience: "Quien quiere empezar rápido sin configurar nada.",
    pros: ["Instalación simple", "Descargas y ejecutas un modelo con un solo comando", "Se conecta fácil con otras aplicaciones"],
    cons: ["Menos control fino que llama.cpp"],
  },
  {
    name: "LM Studio",
    description: "App de escritorio para buscar, descargar y probar modelos de Hugging Face con un chat integrado. También puede servirlos en tu red local con una API compatible con OpenAI.",
    links: [{ label: "Sitio web", href: "https://lmstudio.ai" }],
    audience: "Quien prefiere una interfaz gráfica antes que la terminal.",
    pros: ["Interfaz cuidada, ideal para empezar", "Servidor local con un clic"],
    cons: ["Consume más recursos que Ollama", "Menos control fino que llama.cpp"],
  },
  {
    name: "llama.cpp",
    description: "Motor en C++ que ejecuta modelos GGUF en CPU y GPU, y reparte las capas entre ambas para aprovechar al máximo la VRAM disponible.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ggml-org/llama.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/llamacpp/" },
    ],
    audience: "Quien quiere exprimir la VRAM y medir los t/s reales.",
    pros: ["Decides qué capas van a la GPU y cuáles a la RAM", "Mide los t/s reales, tanto de generación como de procesamiento del prompt", "Control total sobre parámetros y cuantización"],
    cons: ["Curva de aprendizaje mayor, pues se maneja desde la terminal y con muchos parámetros"],
    recommended: true,
  },
  {
    name: "vLLM",
    description: "Motor para servir modelos desde un servidor, con una API compatible con OpenAI y un rendimiento muy alto cuando recibe muchas peticiones a la vez.",
    links: [
      { label: "Sitio web", href: "https://vllm.ai" },
      { label: "Ver en GitHub", href: "https://github.com/vllm-project/vllm" },
    ],
    audience: "Quien quiere montar un servidor local para varias apps o usuarios a la vez.",
    pros: ["Rendimiento muy alto con peticiones simultáneas", "Ideal para servir modelos en red local o en la nube"],
    cons: ["Sobredimensionado para un equipo doméstico", "Mucho más complejo de instalar y configurar que llama.cpp"],
  },
];

export const llmAgents: SoftwareItem[] = [
  {
    name: "Pi",
    description: "Agente de terminal mínimo y extensible que funciona con decenas de proveedores, tanto en local como en la nube.",
    links: [
      { label: "Sitio web", href: "https://pi.dev" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/pi/" },
    ],
    audience: "Quien quiere un agente ligero y moldeable para programar con sus modelos.",
    pros: ["Núcleo pequeño que adaptas a tu flujo", "Gasta muy poco contexto al arrancar, lo que se agradece con modelos locales"],
    cons: ["Le faltan, de serie, funciones que otros agentes traen listas para usar"],
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
    recommended: true,
  },
  {
    name: "llama-server",
    description: "Chat web integrado en llama.cpp para usar el modelo directamente, sin agente. Ollama y LM Studio traen su propia versión.",
    links: [],
    audience: "Quien solo quiere chatear con el modelo.",
    pros: ["Viene integrado en el motor", "Incluye también una API compatible con OpenAI para conectar otras apps"],
    cons: ["No ofrece de serie el flujo de trabajo autónomo y especializado de un agente"],
    recommended: true,
  },
  {
    name: "DeepSeek Harness",
    description: "Agente completo con interfaz visual, al estilo de Codex o Antigravity.",
    links: [
      { label: "Sitio web", href: "https://www.deepseek.com/en/harness/" },
      { label: "Ver en GitHub", href: "https://github.com/deepseek-ai/deepseek-harness" },
    ],
    audience: "Quien quiere un agente completo desde el primer momento y prefiere una interfaz gráfica.",
    pros: ["Viene completo de serie, con soporte a búsquedas en Internet, ejecutar comandos y editar archivos", "Interfaz visual", "Funciona con muchos proveedores, también con modelos en local"],
    cons: ["Está en preview, por lo que le faltan funciones y pueden cambiar cosas con el tiempo"],
    recommended: true,
  },
];

export const diffusionSoftware: SoftwareItem[] = [
  {
    name: "stable-diffusion.cpp",
    description: "Inferencia de difusión en C++, ligera y rápida, compatible con multitud de modelos y formatos, con cuantización opcional.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/leejet/stable-diffusion.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/stablediffusioncpp/" },
    ],
    audience: "Quien solo quiere generar imágenes rápidamente.",
    pros: ["Binarios compilados", "No necesita ejecutar Python", "Soporte para CUDA, Vulkan, Metal y CPU"],
    cons: ["Solo terminal, sin interfaz"],
    recommended: true,
  },
  {
    name: "ComfyUI",
    description: "Interfaz por nodos para generar imágenes con casi cualquier modelo. Montas el flujo a mano, lo guardas y lo reutilizas. Con ComfyUI Desktop viene todo configurado de serie.",
    links: [
      { label: "Sitio web", href: "https://www.comfy.org" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/comfyui/" },
    ],
    audience: "Quien quiere controlar cada paso del pipeline.",
    pros: ["Flujos reproducibles y compartibles", "Permite encadenar pasos (generar, reescalar, retocar) en un mismo flujo"],
    cons: ["Curva de aprendizaje", "Consume más recursos que stable-diffusion.cpp"],
  },
];

export const transcriptionSoftware: SoftwareItem[] = [
  {
    name: "whisper.cpp",
    description: "Motor de transcripción en C++ sin dependencias, con aceleración por CUDA, Vulkan o CPU. Transcribe en cientos de idiomas con marcas de tiempo y también traduce.",
    links: [
      { label: "Repositorio", href: "https://github.com/ggml-org/whisper.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/whispercpp/" },
    ],
    audience: "Quien necesita transcribir un volumen considerable de audio en su propio equipo.",
    pros: [
      "Todos los modelos de Whisper, con cuantización opcional",
      "100% offline y automatizable por scripts para audios largos",
      "Incluye servidor HTTP con API tipo OpenAI y transcripción en tiempo real desde el micrófono",
    ],
    cons: [
      "Requiere archivos WAV de 16 bits, otros formatos necesitan conversión previa",
      "Binarios precompilados solo para CUDA, Vulkan toca compilarlo",
    ],
    recommended: true,
  },
  {
    name: "WhisperW",
    description: "Transcribe en tu navegador con versiones de Whisper (modelos Tiny, Base y Small) de la ONNX Community, sin instalar nada.",
    links: [{ label: "Sitio web", href: "https://whisperw.pages.dev" }],
    audience: "Quien quiere transcribir cosas pequeñas sin descargar nada manualmente.",
    pros: ["Cero instalación, todo en el navegador", "Modelos pequeños y rápidos"],
    cons: ["Anclado a las limitaciones de los navegadores", "Sin acceso a los modelos más grandes y precisos"],
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
    cons: ["Interfaz gráfica poco cuidada y confusa", "Cero información o contexto sobre los modelos disponibles"],
  },
];

export const voiceSoftware: SoftwareItem[] = [
  {
    name: "qwentts.cpp",
    description: "Motor de inferencia para pasar texto a voz en local con el modelo Qwen3-TTS, para clonar una voz, usar voces integradas o diseñar una desde una descripción.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ServeurpersoCom/qwentts.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/qwen-tts/" },
    ],
    audience: "Quien quiere generar voz en su equipo, clonarla o diseñarla.",
    pros: ["Clonación a partir de un audio de referencia", "Servidor con API compatible con OpenAI"],
    cons: ["Hay que compilarlo"],
  },
  {
    name: "Voicebox",
    description: "App que facilita el uso de modelos como Qwen3-TTS, Whisper o Chatterbox. Permite crear y clonar voces.",
    links: [{ label: "Sitio web", href: "https://voicebox.sh" }],
    audience: "Quien quiere jugar con su voz sin tocar modelos.",
    pros: ["Descarga de modelos automática", "Guarda perfiles de voz para reutilizarlos", "Interfaz gráfica muy fácil de usar", "Incluye una API para automatizar creaciones con la terminal"],
    cons: ["Depende de terceros, así que si sale un modelo mejor, no puedes usarlo hasta que lo actualicen"],
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
    cons: ["Interfaz gráfica poco cuidada y confusa", "Cero información o contexto sobre los modelos disponibles"],
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
    pros: ["Prompt, letra, BPM e idioma configurables"],
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
    cons: ["Interfaz gráfica poco cuidada y confusa", "Cero información o contexto sobre los modelos disponibles"],
  },
];

export const upscaleSoftware: SoftwareItem[] = [
  {
    name: "upscayl-bin",
    description: "CLI de reescalado del proyecto Upscayl que usa modelos Real-ESRGAN sobre ncnn con aceleración Vulkan, todo en local.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/upscayl/upscayl-ncnn" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/upscaler/" },
    ],
    audience: "Quien necesita máximo control sobre el reescalado.",
    pros: ["Multitud de modelos disponibles", "Modo TTA para máxima calidad"],
    cons: ["Solo terminal, sin interfaz"],
    recommended: true,
  },
  {
    name: "stable-diffusion.cpp",
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
    description: "Visión por computador en C++ al estilo llama.cpp que ejecuta modelos GGUF en GPU o CPU con la mínima memoria.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/Acly/vision.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/bgremove/" },
    ],
    audience: "Quien quiere la mayor variedad de modelos y más control.",
    pros: ["Muchos modelos disponibles"],
    cons: ["Sin backend CUDA nativo"],
    recommended: true,
  },
  {
    name: "imodify-cli",
    description: "CLI para retocar imágenes por lotes y quitarles el fondo.",
    links: [
      { label: "Ver en npm", href: "https://www.npmjs.com/package/imodify-cli" },
    ],
    audience: "Quien quiere una herramienta sencilla para retocar en lote.",
    pros: ["Modelos automáticos, cero descargas manuales", "También sirve para recortar, redimensionar y convertir formatos"],
    cons: ["Requiere Node.js", "Solo dos modelos disponibles"],
  },
];

export const videoSoftware: SoftwareItem[] = [
  {
    name: "ComfyUI",
    description: "Interfaz por nodos que también permite ejecutar flujos de vídeo.",
    links: [
      { label: "Sitio web", href: "https://www.comfy.org" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/comfyui/" },
    ],
    audience: "Quien ya lo usa para imagen y quiere probar vídeo.",
  },
  {
    name: "stable-diffusion.cpp",
    description: "El mismo motor que puedes usar para generar fotos también permite generar vídeos.",
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
    description: "No solo sirve para texto, también carga modelos multimodales que entienden imágenes y modelos dedicados solo a OCR.",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/ggml-org/llama.cpp" },
      { label: "Guía", href: "https://ai.manz.dev/learn/setup/llamacpp/" },
    ],
    audience: "Quien ya lo usa para LLM y quiere OCR sin instalar nada más.",
    pros: ["Nada más que instalar si ya lo usas", "Mismo flujo que ya conoces del texto"],
    recommended: true,
  },
];

export const classifierSoftware: SoftwareItem[] = [
  {
    name: "laya.cpp",
    description: "Motor para clasificar y decidir, no para generar texto, que recibe un estado y preguntas tipadas y devuelve probabilidades calibradas.",
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
    audience: "Quien ya lo usa para LLM y quiere probar modelos de decisión.",
    pros: ["Ya instalado si vienes de LLM", "Sirve los GGUF por API con llama-server"],
    cons: ["Más pesado que un clasificador dedicado"],
    recommended: true,
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
    recommended: true,
  },
];

export const appSoftware: SoftwareItem[] = [
  {
    name: "Pinokio",
    description: "Lanzador que instala y ejecuta apps de IA con un clic. Automatiza toda la instalación y te olvidas de las dependencias.",
    links: [{ label: "Sitio web", href: "https://pinokio.co" }],
    audience: "Quien quiere probar aplicaciones de IA sin pelearse con Python u otras herramientas.",
    pros: ["Puedes ejecutar aplicaciones de IA sin complicaciones", "Un catálogo enorme donde elegir"],
    cons: ["Utiliza mucho espacio en disco", "Consume más recursos que los motores de inferencia sueltos", "Las aplicaciones no verificadas pueden contener malware"],
  },
  {
    name: "Voicebox",
    description: "App que facilita el uso de modelos como Qwen3-TTS, Whisper o Chatterbox. Permite crear y clonar voces.",
    links: [{ label: "Sitio web", href: "https://voicebox.sh" }],
    audience: "Quien quiere jugar con su voz sin tocar modelos.",
    pros: ["Descarga de modelos automática", "Guarda perfiles de voz para reutilizarlos", "Interfaz gráfica muy fácil de usar", "Incluye una API para automatizar creaciones con la terminal"],
    cons: ["Depende de terceros, así que si sale un modelo mejor, no puedes usarlo hasta que lo actualicen"],
  },
  {
    name: "Upscayl Desktop",
    description: "Programa que permite usar modelos de reescalado sin configurar nada.",
    links: [{ label: "Sitio web", href: "https://upscayl.org/download" }],
    audience: "Quien quiere agrandar imágenes sin complicarse.",
    pros: ["Descarga de modelos automática", "Interfaz gráfica muy simple"],
    cons: ["No controlas el modelo que utilizas", "Algunos modelos que incluyen no tienen licencia para uso comercial"],
  },
  {
    name: "Hex",
    description: "Aplicación de escritorio para escribir texto mediante dictado por voz.",
    links: [{ label: "Sitio web", href: "https://anoma.ly/hex/" }],
    audience: "Quien quiere escribir usando la voz.",
    pros: ["Autodetección de hardware e idioma", "Muchos modelos para utilizar y se descargan automáticamente", "Muy transparente al usuario, simplemente funciona"],
    cons: ["Siempre tienes un modelo cargado en memoria", "Tiene un consumo de recursos considerable"],
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
      "Borra el fondo de una imagen con BRIA-RMBG-2.0 (licencia no comercial).",
    url: "https://pinokio.co/apps/github-com-pinokiofactory-rmbg-2-studio",
  },
  {
    name: "Whisper-WebUI",
    purpose:
      "Transcribe audio en local con Whisper.",
    url: "https://pinokio.co/apps/github-com-pinokiofactory-whisper-webui",
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
