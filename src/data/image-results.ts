import type { ResultSet } from "@/types";
import cobainAnimaCsv from "@/data/charts/cobain-cat/anima.csv?raw";
import cobainFluxCsv from "@/data/charts/cobain-cat/flux2-klein.csv?raw";
import cobainKreaQ3Csv from "@/data/charts/cobain-cat/krea2-turbo-q3-k-m.csv?raw";
import cobainKreaQ4Csv from "@/data/charts/cobain-cat/krea2-turbo-q4-k-s.csv?raw";
import cobainQwenCsv from "@/data/charts/cobain-cat/qwen2-1-q5-k-m.csv?raw";
import cobainQwenQ6Csv from "@/data/charts/cobain-cat/qwen2-1-q6-k.csv?raw";
import cobainZTurboCsv from "@/data/charts/cobain-cat/z-image-turbo.csv?raw";
import cobainZCsv from "@/data/charts/cobain-cat/z-image.csv?raw";
import cobainTunedCsv from "@/data/charts/cobain-cat/flux2-klein-tuned.csv?raw";

/* Galería real: un prompt, una foto por modelo. */
export const diffusionResults: ResultSet[] = [
  {
    id: "cobain-cat",
    label: "Cobain Cat",
    prompt: "Close-up portrait of an anthropomorphic domestic cat looking like Kurt Cobain. Messy, unkempt long blonde hair framing its face, melancholy blue eyes, detailed whiskers. Wearing a vintage, distressed green mohair cardigan over a white t-shirt. Moody, dramatic studio lighting with dark shadows, gritty texture, 90s alternative rock album cover style, highly intricate fur texture, cinematic, sharp focus.",
    seed: 41,
    ratio: "1 / 1",
    images: [
      {
        src: "/galleries/cobain-cat/anima.png",
        model: "Anima Turbo",
        time: 78.91,
        alt: "Gato Cobain generado con Anima Turbo",
        chartCsv: cobainAnimaCsv,
      },
      {
        src: "/galleries/cobain-cat/flux2-klein.png",
        model: "Flux.2 Klein",
        time: 328.31,
        alt: "Gato Cobain generado con Flux.2 Klein",
        chartCsv: cobainFluxCsv,
      },
      {
        src: "/galleries/cobain-cat/krea2-turbo-q3-k-m.png",
        model: "Krea 2 Turbo Q3",
        time: 268.09,
        alt: "Gato Cobain generado con Krea 2 Turbo Q3",
        chartCsv: cobainKreaQ3Csv,
      },
      {
        src: "/galleries/cobain-cat/krea2-turbo-q4-k-s.png",
        model: "Krea 2 Turbo Q4",
        time: 266.64,
        alt: "Gato Cobain generado con Krea 2 Turbo Q4",
        chartCsv: cobainKreaQ4Csv,
      },
      {
        src: "/galleries/cobain-cat/qwen2-1-q5-k-m.png",
        model: "Qwen-Image-2.1 Q5",
        time: 301.97,
        alt: "Gato Cobain generado con Qwen-Image-2.1 Q5",
        chartCsv: cobainQwenCsv,
      },
      {
        src: "/galleries/cobain-cat/qwen2-1-q6-k.png",
        model: "Qwen-Image-2.1 Q6",
        time: 344.54,
        alt: "Gato Cobain generado con Qwen-Image-2.1 Q6",
        chartCsv: cobainQwenQ6Csv,
      },
      {
        src: "/galleries/cobain-cat/z-image-turbo.png",
        model: "Z-Image-Turbo",
        time: 136.81,
        alt: "Gato Cobain generado con Z-Image-Turbo",
        chartCsv: cobainZTurboCsv,
      },
      {
        src: "/galleries/cobain-cat/z-image.png",
        model: "Z-Image",
        time: 368.81,
        alt: "Gato Cobain generado con Z-Image",
        chartCsv: cobainZCsv,
      },
      {
        src: "/galleries/cobain-cat/flux2-klein-tuned.png",
        model: "Flux 2 Klein tuneado",
        time: 159.86,
        alt: "Gato Cobain generado con Flux 2 Klein tuneado",
        chartCsv: cobainTunedCsv,
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

/* Galería real: original + un recorte por modelo, con fondo de cuadros. */
export const bgResults: ResultSet[] = [
  {
    id: "fondo-stalker",
    label: "Stalker",
    ratio: "1 / 1",
    firstIsOriginal: true,
    checker: true,
    images: [
      {
        src: "/galleries/fondo-stalker/original.png",
        model: "Original",
        time: 0,
        alt: "Stalker con máscara antigás ante una ciudad nevada en ruinas",
      },
      {
        src: "/galleries/fondo-stalker/ben2.png",
        model: "BEN2",
        time: 0,
        alt: "Stalker recortado con BEN2, fondo transparente",
      },
      {
        src: "/galleries/fondo-stalker/birefnet-512x512.png",
        model: "BiRefNet",
        time: 0,
        alt: "Stalker recortado con BiRefNet, fondo transparente",
      },
    ],
  },
];
