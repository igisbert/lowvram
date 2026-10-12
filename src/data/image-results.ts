import type { ResultSet } from "@/types";

/* TODO: sustituir por datos reales. Placeholders con el ratio correcto.
   Sets 2-4: solo para probar la galería, borrar al poner datos reales. */
export const diffusionResults: ResultSet[] = [
  {
    id: "difusion-ejemplo",
    label: "Comparativa 1 (prueba)",
    prompt: "TODO: prompt real en monoespaciada",
    ratio: "1 / 1",
    images: [
      {
        src: "/placeholders/difusion-1.svg",
        model: "Modelo A",
        time: 12,
        alt: "Placeholder de resultado de difusión con el modelo A",
      },
      {
        src: "/placeholders/difusion-2.svg",
        model: "Modelo B",
        time: 301.84,
        alt: "Placeholder de resultado de difusión con el modelo B",
      },
    ],
  },
  {
    id: "difusion-prueba-2",
    label: "Comparativa 2 (prueba)",
    prompt: "TODO: prompt real en monoespaciada",
    ratio: "1 / 1",
    images: [
      {
        src: "/placeholders/difusion-1.svg",
        model: "Modelo A",
        time: 14,
        alt: "Placeholder de resultado de difusión con el modelo A",
      },
      {
        src: "/placeholders/difusion-2.svg",
        model: "Modelo C",
        time: 42,
        alt: "Placeholder de resultado de difusión con el modelo C",
      },
    ],
  },
  {
    id: "difusion-prueba-3",
    label: "Comparativa 3 (prueba)",
    prompt: "TODO: prompt real en monoespaciada",
    ratio: "1 / 1",
    images: [
      {
        src: "/placeholders/difusion-2.svg",
        model: "Modelo B",
        time: 301.84,
        alt: "Placeholder de resultado de difusión con el modelo B",
      },
      {
        src: "/placeholders/difusion-1.svg",
        model: "Modelo D",
        time: 95,
        alt: "Placeholder de resultado de difusión con el modelo D",
      },
    ],
  },
  {
    id: "difusion-prueba-4",
    label: "Comparativa 4 (prueba)",
    prompt: "TODO: prompt real en monoespaciada",
    ratio: "1 / 1",
    images: [
      {
        src: "/placeholders/difusion-1.svg",
        model: "Modelo A",
        time: 12,
        alt: "Placeholder de resultado de difusión con el modelo A",
      },
      {
        src: "/placeholders/difusion-2.svg",
        model: "Modelo B",
        time: 301.84,
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
        time: 0,
        alt: "Placeholder de imagen original antes del upscale",
      },
      {
        src: "/placeholders/upscale-modelo.svg",
        model: "Modelo de upscale",
        time: 8,
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
        time: 0,
        alt: "Placeholder de imagen original antes del recorte",
      },
      {
        src: "/placeholders/recorte-modelo.svg",
        model: "Modelo de recorte",
        time: 3,
        alt: "Placeholder de imagen con fondo transparente",
      },
    ],
  },
];
