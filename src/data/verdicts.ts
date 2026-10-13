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
      "CSS namespaced y accesibilidad de base correctos a la primera.",
      "Estructura de componentes ordenada.",
    ],
    issues: [
      "Ignora restricciones explícitas del prompt.",
      "Entrega componentes sin ni un listener: nada responde.",
      "Inventa APIs (useState, createContext…) y mezcla sintaxis Svelte en componentes de Astro.",
      "Ficheros que no compilan tal como salen.",
    ],
  },
];
