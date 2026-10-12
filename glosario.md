# Glosario de IA local

Todo lo que necesitas para entender la IA que se ejecuta en tu propio ordenador, explicado en lenguaje fácil.

## Básicos

- **Modelo:** el "cerebro" ya entrenado. Es un archivo enorme lleno de números que sabe hacer una tarea (escribir, dibujar, transcribir...).
- **Parámetros:** los números que forman el modelo. Es lo que significa el "7B" o "13B" (miles de millones). En general, más parámetros = más capaz, pero también más pesado.
- **Pesos:** otro nombre para esos números. Cuando se dice que un modelo es "open weights", puedes descargar esos pesos y usarlos.
- **Entrenamiento:** el proceso en el que el modelo aprende a partir de millones de ejemplos.
- **Inferencia:** usar el modelo ya entrenado para generar algo. Cuando le pides una imagen o le haces una pregunta, estás haciendo inferencia.
- **Prompt:** el texto o instrucción que le das al modelo.
- **Prompt negativo:** en imagen, lo que NO quieres que aparezca. No todos los modelos nuevos lo usan.
- **Seed (semilla):** el número que decide el "azar" inicial. Misma semilla + mismos ajustes = mismo resultado, ideal para comparar modelos.
- **Alucinación:** cuando el modelo se inventa algo con total seguridad.
- **Multimodal:** modelo que entiende más de un tipo de dato (texto + imagen, por ejemplo).
- **Fine-tuning:** reentrenar un poco un modelo para especializarlo en algo concreto.
- **LoRA:** un "parche" pequeño que se añade a un modelo para darle un estilo o una habilidad sin reentrenarlo entero.
- **Destilación:** enseñar a un modelo pequeño a imitar a uno grande.

## Hardware

- **VRAM:** la memoria de la gráfica. Es el factor clave: si el modelo no cabe, va lentísimo o no arranca.

- **Offloading:** repartir el modelo entre la GPU y la CPU/RAM cuando no cabe entero en VRAM. Funciona, pero pierdes velocidad.

- **Ancho de banda de memoria:** lo rápido que se mueven los datos entre la memoria y el chip. En LLMs, casi manda más que la potencia bruta.

## Cuantización y formatos

- **Cuantización:** reducir la precisión de los números del modelo para que ocupe menos y vaya más rápido. Pierdes un poco de calidad, pero ganas mucho espacio.
- **Q4_K_M, Q8_0, Q6_K...:** el nombre indica la compresión. El número es aproximadamente los bits por peso (Q4 ≈ 4 bits). Menos bits = más pequeño pero con más pérdida. La K es un método más inteligente de comprimir, y S/M/L significa pequeño/medio/grande dentro del mismo nivel.
- **GGUF:** formato de archivo muy usado para ejecutar modelos en local (llama.cpp y similares). Un solo archivo con todo dentro.
- **Safetensors:** formato seguro y estándar para guardar pesos (sin riesgo de ejecutar código raro al cargarlo).
- **FP16 / BF16 / FP8:** formas de guardar los números sin cuantizar, con 16 u 8 bits. FP16 es la "calidad original" habitual.

## LLM (modelos de texto)

- **LLM (Large Language Model):** modelo que predice la siguiente palabra una y otra vez, y así escribe textos, responde, programa...
- **Token:** el trozo de texto que ve el modelo. Una palabra suele ser 1-3 tokens.
- **Ventana de contexto:** cuánto texto puede "tener en la cabeza" a la vez (tu conversación, los archivos...). Si se llena, olvida lo más antiguo.
- **KV cache:** memoria temporal donde guarda lo que ya leyó para no recalcularlo. Crece con el contexto y puede comerse la VRAM.
- **Temperatura:** controla lo creativo que es. Baja (0-0.3) = predecible y preciso. Alta (0.8+) = más variado y arriesgado.
- **Top-p / Top-k / Min-p:** filtros que limitan entre qué palabras puede elegir. Evitan que se vaya por las ramas.
- **System prompt:** instrucciones de fondo que definen cómo se comporta (tono, reglas, rol).
- **Modelo denso vs MoE:** un denso usa todos sus parámetros siempre. Un MoE (mezcla de expertos) tiene muchos pero solo activa una parte en cada palabra, por lo que es rápido para su tamaño.
- **Modelo de razonamiento (thinking):** piensa paso a paso antes de responder. Es más preciso en problemas difíciles, pero más lento y gasta más tokens.
- **RAG:** darle al modelo documentos tuyos para que responda basándose en ellos.
- **Embeddings:** convertir texto en números que representan su significado, para buscar por similitud.
- **Flash attention:** truco que acelera el modelo y gasta menos memoria con contextos largos.

## Imagen

- **Difusión:** la técnica base. Parte de ruido puro y lo va "limpiando" poco a poco hasta formar una imagen.
- **Step (paso):** cada ronda de limpieza. Más pasos = más detalle pero más lento. Los modelos Turbo funcionan con muy pocos.
- **CFG (guidance scale):** cuánto obedece el modelo a tu prompt. Muy bajo ignora lo que pides, y muy alto satura y "quema" la imagen.
- **Sampler / Scheduler:** el método concreto con el que se limpia el ruido y cómo se reparten los pasos. Cambian el estilo y la velocidad.
- **VAE:** pieza que traduce entre píxeles y el "espacio comprimido" donde trabaja el modelo. Si falla, salen colores raros o imágenes borrosas.
- **Text encoder (CLIP / T5 / LLM):** la parte que convierte tu prompt en algo que el modelo entiende. Los modernos usan un LLM pequeño dentro.
- **Modelo Turbo / destilado:** versión entrenada para generar con 4-8 pasos en vez de 30-50. Mucho más rápido, a veces con algo menos de variedad.
- **Resolución:** el tamaño de la imagen. Más píxeles = más VRAM y más tiempo.
- **Batch size:** cuántas imágenes se generan a la vez.
- **img2img:** partir de una imagen tuya en vez de ruido, para transformarla.
- **Inpainting / Outpainting:** rellenar o cambiar una zona de la imagen / ampliar la imagen más allá de sus bordes.
- **Upscaler:** herramienta que agranda una imagen añadiendo detalle.

## Vídeo

- **Frame:** cada imagen individual del vídeo.
- **FPS:** frames por segundo. A más FPS, más fluido.
- **Interpolación de frames:** inventar frames intermedios para que el vídeo se vea más suave.

## Audio

- **TTS (Text-to-Speech):** convertir texto en voz.
- **STT / ASR (voz a texto):** transcribir audio a texto. Whisper es el más famoso.

## Agentes

- **Agente:** un LLM que, además de hablar, usa herramientas y toma decisiones en bucle hasta cumplir un objetivo.
- **MCP:** estándar para conectar herramientas y servicios a un LLM de forma uniforme.
- **Harness:** el programa que rodea al modelo, le da las herramientas y gestiona el bucle.
- **Oneshot / zero-shot:** resolver la tarea al primer intento, sin ejemplos.

## Rendimiento y pruebas

- **Tokens por segundo (t/s):** velocidad de un LLM generando texto.
- **TTFT (Time To First Token):** lo que tarda en soltar la primera palabra.
- **it/s o s/it:** velocidad en imagen, en iteraciones por segundo o segundos por iteración (cada una es un paso).
- **Latencia vs Throughput:** lo que tarda en responder una petición vs. cuánto trabajo hace en total por segundo.
- **Benchmark:** prueba estandarizada para comparar modelos o hardware.
- **Out of memory (OOM):** el error de cuando no cabe en VRAM.
