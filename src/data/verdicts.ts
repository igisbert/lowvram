import type { Verdict } from "@/types";


export const verdicts: Verdict[] = [
  {
    model: "Ling 3.0 Tiny",
    fullModel: "Ling 3.0 Tiny Q5_K_M.gguf",
    avgSpeed: "~105 t/s de media",
    strengths: [
      "Con varios intentos llega a generar artefactos funcionales completos.",
      "Muy rápido.",
    ],
    issues: [
      "Consume y genera muchísimos tokens, así que parte de su velocidad se pierde en respuestas larguísimas.",
      "Ignora restricciones explícitas del prompt y a veces se interrumpe y hay que decirle que siga.",
      "Se inventa sintaxis con total seguridad y mezcla frameworks. En mis pruebas confunde Svelte y Vue con Astro.",
    ],
  },
  {
    model: "MiMo 2.6",
    fullModel: "MiMo-V2.6-Distill-Qwen-9B-Q4_K_S.gguf",
    avgSpeed: "~43 t/s de media",
    strengths: [
      "Crea estilos bastante decentes."
    ],
    issues: [
      "Ignora restricciones explícitas del prompt, comete errores con frecuencia y a veces se interrumpe.",
      "Le cuesta usar herramientas y ejecutar comandos, al menos en Windows.",
      "Entrega componentes sin eventos y nada responde al hacer clic.",
      "Mezcla APIs y sintaxis de otros frameworks (React, Svelte) en componentes de Astro.",
    ],
  },
  {
    model: "Qwen3.6-35B",
    fullModel: "Qwen3.6-35B-A3B-UD-IQ2_XXS.gguf",
    avgSpeed: "~30 t/s de media",
    strengths: [
      "Artefactos funcionales y completos, casi siempre a la primera.",
      "En razonamiento es el mejor de los que he podido probar en mi equipo.",
    ],
    issues: [
      "Ni cuantizado a dos bits cabe entero en 8 GB así que parte del modelo pasa a la RAM y la velocidad baja.",
      "Con una cuantización tan agresiva puede cometer pequeños errores o entrar en bucle.",
    ],
  },
  {
    model: "Qwen3.8-27B",
    fullModel: "Qwen3.8-27B-UD-IQ2_XXS.gguf",
    avgSpeed: "~4 t/s de media",
    strengths: [
      "Es de los mejores modelos que se pueden utilizar en local.",
    ],
    issues: [
      "Inusable en mi equipo (~4 t/s).",
    ],
  },
  {
    model: "Qwen3.6-35B-A3B-MTP",
    fullModel: "Qwen3.6-35B-A3B-MTP-UD-IQ2_XXS.gguf",
    avgSpeed: "~10 t/s de media",
    note: "El MTP (Multi-Token Prediction) permite que el modelo prediga varios tokens a la vez, así que en teoría debería generar más tokens por segundo. Pero aquí, además de que el modelo MTP pesa 1 GB más que el normal, al hacer offload a la RAM y pasarle parte de los expertos, la velocidad se desploma.",
  },
  {
    model: "NVIDIA-Nemotron-3.5-Bolt-E4B",
    fullModel: "NVIDIA-Nemotron-3.5-Bolt-E4B-UD-Q4_K_XL.gguf",
    avgSpeed: "~61 t/s de media",
    strengths: [
      "Bastante rápido",
      "Los artefactos que genera suelen estar completos y funcionan bien.",
      "Mucho mejor en tareas agénticas que el Gemma 4 del que parte.",
    ],
    issues: [
      "Menos fino que modelos más grandes en razonamiento complejo.",
    ],
  },
  {
    model: "LFM2.5-24B-A2B",
    fullModel: "LFM2.5-24B-A2B-UD-Q3_K_XL.gguf",
    avgSpeed: "~35 t/s de media",
    strengths: [
      "Algo más rápido que Qwen3.6-35B (~5 t/s más), porque activa menos parámetros por token.",
      "Fiable en texto y datos en tareas cortas.",
      "Los artefactos suelen llegar completos...",
    ],
    issues: [
      "...pero a veces sin pulir detalles de interacción.",
      "En mis pruebas queda por debajo de Qwen3.6-35B y esos ~5 t/s extra no compensan.",
    ],
  },
];
