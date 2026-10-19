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
import cobainIrisCsv from "@/data/charts/cobain-cat/iris.csv?raw";
import cobainFlux3Csv from "@/data/charts/cobain-cat/flux3-klein.csv?raw";
import peliAnimaCsv from "@/data/charts/pelirroja/anima.csv?raw";
import peliFluxCsv from "@/data/charts/pelirroja/flux2-klein.csv?raw";
import peliKreaQ3Csv from "@/data/charts/pelirroja/krea2-turbo-q3-k-m.csv?raw";
import peliKreaQ4Csv from "@/data/charts/pelirroja/krea2-turbo-q4-k-s.csv?raw";
import peliTunedCsv from "@/data/charts/pelirroja/flux2-klein-tuned.csv?raw";
import peliQwenQ5Csv from "@/data/charts/pelirroja/qwen2-1-q5-k-m.csv?raw";
import peliQwenQ6Csv from "@/data/charts/pelirroja/qwen2-1-q6-k.csv?raw";
import peliZCsv from "@/data/charts/pelirroja/z-image.csv?raw";
import peliZTurboCsv from "@/data/charts/pelirroja/z-image-turbo.csv?raw";

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
        src: "/galleries/cobain-cat/flux3-klein.png",
        model: "Flux.3 Klein",
        time: 398.05,
        alt: "Gato Cobain generado con Flux.3 Klein",
        chartCsv: cobainFlux3Csv,
      },
      {
        src: "/galleries/cobain-cat/iris.png",
        model: "Iris 3B",
        time: 567.29,
        alt: "Gato Cobain generado con Iris 3B",
        chartCsv: cobainIrisCsv,
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
        src: "/galleries/cobain-cat/flux2-klein-tuned.png",
        model: "PornMaster Klein 9B",
        time: 159.86,
        alt: "Gato Cobain generado con PornMaster Klein 9B",
        chartCsv: cobainTunedCsv,
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
        src: "/galleries/cobain-cat/z-image.png",
        model: "Z-Image",
        time: 368.81,
        alt: "Gato Cobain generado con Z-Image",
        chartCsv: cobainZCsv,
      },
      {
        src: "/galleries/cobain-cat/z-image-turbo.png",
        model: "Z-Image-Turbo",
        time: 136.81,
        alt: "Gato Cobain generado con Z-Image-Turbo",
        chartCsv: cobainZTurboCsv,
      },
    ],
  },
  {
    id: "pelirroja",
    label: "Pelirroja",
    prompt: "Close-up portrait of a captivating young woman with flowing copper-red hair and vivid olive-green eyes, playing an acoustic guitar with quiet, absorbed intensity. Her slender fingers rest with graceful pressure on the steel strings of a dark rosewood fretboard. Warm, directional side light sculpts the refined bone structure of her face — high cheekbones, delicate nose, soft full lips parted in concentration — revealing the subtle texture of her luminous skin and catching soft highlights on the polished spruce top of the guitar. Shallow depth of field melts the background into a smooth, velvety dark bokeh, creating a deeply intimate and atmospheric musical moment.",
    seed: 41,
    ratio: "1 / 1",
    images: [
      {
        src: "/galleries/pelirroja/anima.png",
        model: "Anima Turbo",
        time: 80.68,
        alt: "Pelirroja con guitarra generada con Anima Turbo",
        chartCsv: peliAnimaCsv,
      },
      {
        src: "/galleries/pelirroja/flux2-klein.png",
        model: "Flux.2 Klein",
        time: 324.34,
        alt: "Pelirroja con guitarra generada con Flux.2 Klein",
        chartCsv: peliFluxCsv,
      },
      {
        src: "/galleries/pelirroja/krea2-turbo-q3-k-m.png",
        model: "Krea 2 Turbo Q3",
        time: 243.24,
        alt: "Pelirroja con guitarra generada con Krea 2 Turbo Q3",
        chartCsv: peliKreaQ3Csv,
      },
      {
        src: "/galleries/pelirroja/krea2-turbo-q4-k-s.png",
        model: "Krea 2 Turbo Q4",
        time: 235.43,
        alt: "Pelirroja con guitarra generada con Krea 2 Turbo Q4",
        chartCsv: peliKreaQ4Csv,
      },
      {
        src: "/galleries/pelirroja/flux2-klein-tuned.png",
        model: "PornMaster Klein 9B",
        time: 128.61,
        alt: "Pelirroja con guitarra generada con PornMaster Klein 9B",
        chartCsv: peliTunedCsv,
      },
      {
        src: "/galleries/pelirroja/qwen2-1-q5-k-m.png",
        model: "Qwen-Image-2.1 Q5",
        time: 679.59,
        alt: "Pelirroja con guitarra generada con Qwen-Image-2.1 Q5",
        chartCsv: peliQwenQ5Csv,
      },
      {
        src: "/galleries/pelirroja/qwen2-1-q6-k.png",
        model: "Qwen-Image-2.1 Q6",
        time: 639.21,
        alt: "Pelirroja con guitarra generada con Qwen-Image-2.1 Q6",
        chartCsv: peliQwenQ6Csv,
      },
      {
        src: "/galleries/pelirroja/z-image.png",
        model: "Z-Image",
        time: 409.73,
        alt: "Pelirroja con guitarra generada con Z-Image",
        chartCsv: peliZCsv,
      },
      {
        src: "/galleries/pelirroja/z-image-turbo.png",
        model: "Z-Image-Turbo",
        time: 132.4,
        alt: "Pelirroja con guitarra generada con Z-Image-Turbo",
        chartCsv: peliZTurboCsv,
      },
    ],
  },
];

/* Galería real: original + una ampliación por modelo. */
export const upscaleResults: ResultSet[] = [
  {
    id: "upscale-gato-violin",
    label: "Gato violín",
    ratio: "1 / 1",
    firstIsOriginal: true,
    images: [
      {
        src: "/galleries/upscale-gato-violin/original.png",
        model: "Original",
        time: 0,
        alt: "Gato naranja tocando el violín en un salón",
      },
      {
        src: "/galleries/upscale-gato-violin/lsdir-plus-n.png",
        model: "4xLSDIRplusN",
        time: 0,
        alt: "Gato ampliado con 4xLSDIRplusN",
      },
      {
        src: "/galleries/upscale-gato-violin/realesrgan-x4plus.png",
        model: "RealESRGAN_x4plus",
        time: 0,
        alt: "Gato ampliado con RealESRGAN_x4plus",
      },
      {
        src: "/galleries/upscale-gato-violin/ultrasharp-v10.png",
        model: "4xUltrasharpV10",
        time: 0,
        alt: "Gato ampliado con 4xUltrasharpV10",
      },
    ],
  },
  {
    id: "upscale-anime-cyberpunk",
    label: "Anime cyberpunk",
    ratio: "1 / 1",
    firstIsOriginal: true,
    images: [
      {
        src: "/galleries/upscale-anime-cyberpunk/original.png",
        model: "Original",
        time: 0,
        alt: "Chico anime en una calle cyberpunk de noche",
      },
      {
        src: "/galleries/upscale-anime-cyberpunk/lsdir-plus-n.png",
        model: "4xLSDIRplusN",
        time: 0,
        alt: "Anime ampliado con 4xLSDIRplusN",
      },
      {
        src: "/galleries/upscale-anime-cyberpunk/realesrgan-general.png",
        model: "RealESRGAN General",
        time: 0,
        alt: "Anime ampliado con RealESRGAN General",
      },
      {
        src: "/galleries/upscale-anime-cyberpunk/ultrasharp-v10.png",
        model: "4xUltrasharpV10",
        time: 0,
        alt: "Anime ampliado con 4xUltrasharpV10",
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
  {
    id: "fondo-dante",
    label: "Dante",
    ratio: "1 / 1",
    firstIsOriginal: true,
    checker: true,
    images: [
      {
        src: "/galleries/fondo-dante/original.png",
        model: "Original",
        time: 0,
        alt: "Espadachín de pelo blanco ante una catedral gótica de noche",
      },
      {
        src: "/galleries/fondo-dante/ben2.png",
        model: "BEN2",
        time: 0,
        alt: "Espadachín recortado con BEN2, fondo transparente",
      },
      {
        src: "/galleries/fondo-dante/birefnet-512x512.png",
        model: "BiRefNet",
        time: 0,
        alt: "Espadachín recortado con BiRefNet, fondo transparente",
      },
    ],
  },
  {
    id: "fondo-vice-cat",
    label: "Vice Cat",
    ratio: "1 / 1",
    firstIsOriginal: true,
    checker: true,
    images: [
      {
        src: "/galleries/fondo-vice-cat/original.png",
        model: "Original",
        time: 0,
        alt: "Gato con gafas de sol y camisa hawaiana apoyado en un coche rojo en Miami al atardecer",
      },
      {
        src: "/galleries/fondo-vice-cat/ben2.png",
        model: "BEN2",
        time: 0,
        alt: "Gato recortado con BEN2, fondo transparente",
      },
      {
        src: "/galleries/fondo-vice-cat/birefnet-512x512.png",
        model: "BiRefNet",
        time: 0,
        alt: "Gato recortado con BiRefNet, fondo transparente",
      },
    ],
  },
  {
    id: "fondo-raider-cat",
    label: "Raider Cat",
    ratio: "1 / 1",
    firstIsOriginal: true,
    checker: true,
    images: [
      {
        src: "/galleries/fondo-raider-cat/original.png",
        model: "Original",
        time: 0,
        alt: "Gato con armadura y fusil en un desguace desértico",
      },
      {
        src: "/galleries/fondo-raider-cat/ben2.png",
        model: "BEN2",
        time: 0,
        alt: "Gato recortado con BEN2, fondo transparente",
      },
      {
        src: "/galleries/fondo-raider-cat/birefnet-512x512.png",
        model: "BiRefNet",
        time: 0,
        alt: "Gato recortado con BiRefNet, fondo transparente",
      },
    ],
  },
];
