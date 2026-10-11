import type { ResultSet } from "@/types";

/* TODO: sustituir por datos reales. Placeholders con el ratio correcto. */
export const diffusionResults: ResultSet[] = [
  {
    id: "difusion-ejemplo",
    prompt: "TODO: prompt real en monoespaciada",
    ratio: "1 / 1",
    images: [
      {
        src: "/placeholders/difusion-1.svg",
        model: "Modelo A",
        time: "12 s",
        alt: "Placeholder de resultado de difusión con el modelo A",
      },
      {
        src: "/placeholders/difusion-2.svg",
        model: "Modelo B",
        alt: "Placeholder de resultado de difusión con el modelo B",
      },
    ],
  },
];

/* TODO: sustituir por datos reales. La primera imagen es la original. */
export const upscaleResults: ResultSet[] = [
  {
    id: "upscale-ejemplo",
    description: "TODO: descripción corta de la comparativa",
    ratio: "4 / 3",
    firstIsOriginal: true,
    images: [
      {
        src: "/placeholders/upscale-original.svg",
        model: "Original",
        alt: "Placeholder de imagen original antes del upscale",
      },
      {
        src: "/placeholders/upscale-modelo.svg",
        model: "Modelo de upscale",
        time: "8 s",
        alt: "Placeholder de imagen tras el upscale",
      },
    ],
  },
];

/* TODO: sustituir por datos reales. checker muestra el fondo de cuadros. */
export const otherResults: ResultSet[] = [
  {
    id: "otros-ejemplo",
    description: "TODO: descripción corta del recorte",
    ratio: "4 / 3",
    firstIsOriginal: true,
    checker: true,
    images: [
      {
        src: "/placeholders/recorte-original.svg",
        model: "Original",
        alt: "Placeholder de imagen original antes del recorte",
      },
      {
        src: "/placeholders/recorte-modelo.svg",
        model: "Modelo de recorte",
        alt: "Placeholder de imagen con fondo transparente",
      },
    ],
  },
];
