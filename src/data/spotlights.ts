import type { SpotlightItem } from "@/types";

/* UIs propias destacadas. Añadir una = añadir una entrada, sin tocar componentes. */
export const diffusionSpotlights: SpotlightItem[] = [
  {
    name: "StableDiffusionUI",
    description:
      "Interfaz gráfica para usar stable-diffusion.cpp sin pelearte con la terminal. Guarda preajustes con todos los componentes y parámetros para cargarlos en un clic, reutiliza tus prompts guardados y mejóralos automáticamente con Gemini.",
    image: "/stablediffusioncppui.webp",
    imageAlt: "Captura de StableDiffusionUI generando una imagen",
    links: [
      { label: "Ver en GitHub", href: "https://github.com/igisbert/StableDiffusionUI" },
    ],
  },
];
