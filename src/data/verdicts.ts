import type { Verdict } from "@/types";

/* Veredictos cualitativos por modelo, redactados desde errors.md y las t/s
   medidas en las pruebas. Añadir un veredicto = añadir una entrada. */
export const verdicts: Verdict[] = [
  {
    model: "Ling 3.0 Tiny",
    fullModel: "Ling 3.0 Tiny Q5_K_M.gguf",
    avgSpeed: "~105 t/s de media",
    strengths: [
      "Con varios intentos llega a generar artefactos funcionales completos.",
      "Bastante rápido.",
    ],
    issues: [
      "Ignora restricciones explícitas del prompt.",
      "A veces deja botones sin cablear: están en el markup pero no hacen nada.",
      "A veces se interrumpte y tienes que decirle que siga",
      "Construye HTML con template strings, que Astro pinta como texto.",
      "Alucina con seguridad total (sintaxis de otros frameworks, siglas inventadas).",
      "Confunde Svelte (y hasta Vue) con Astro aunque se le pida un componente Astro.",
    ],
  },
  {
    model: "MiMo 2.6",
    fullModel: "MiMo-V2.6-Distill-Qwen-9B-Q4_K_S",
    avgSpeed: "~43 t/s de media",
    strengths: [
      
    ],
    issues: [
      "Ignora restricciones explícitas del prompt.",
      "Le cuesta mucho usar tools y ejecutar comandos, al menos en Windows.",
      "A veces se interrumpte y tienes que decirle que siga",
      "Le cuesta mucho cumplir tareas sin cometer errores",
      "Entrega componentes sin ni un listener: nada responde.",
      "Inventa APIs (useState, createContext…) y mezcla sintaxis Svelte en componentes de Astro.",
    ],
  },
  {
    model: "Qwen3.6-35B",
    avgSpeed: "~30 t/s de media",
    strengths: [
      "Todo cableado a la primera: ni un botón muerto.",
      "CSS sin fugas de serie y detalles de accesibilidad (aria-live, foco, reduced-motion).",
      "Extras bien resueltos: operador %, formato exponencial, ∞ controlado.",
    ],
    issues: [
      "Enorme incluso en Q2: hace offload y no cabe en 8 GB.",
      "Consultas y teclado globales: hubo que encapsularlo.",
    ],
  },
  {
    model: "Qwen3.8-27B",
    avgSpeed: "~4 t/s de media",
    strengths: [
      "Es de los mejores modelos que se pueden utilizar en local.",
    ],
    issues: [
      "Inusable en mi equipo (~4 t/s).",
    ],
  },
];
