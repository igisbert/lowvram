import type { ResultSet } from "@/types";
import cobainAnimaCsv from "@/data/charts/cobain-cat/anima.csv?raw";
import cobainFluxCsv from "@/data/charts/cobain-cat/flux2-klein.csv?raw";
import cobainKreaQ3Csv from "@/data/charts/cobain-cat/krea2-turbo-q3-k-m.csv?raw";
import cobainKreaQ4Csv from "@/data/charts/cobain-cat/krea2-turbo-q4-k-s.csv?raw";
import cobainQwenCsv from "@/data/charts/cobain-cat/qwen2-1-q5-k-m.csv?raw";
import cobainQwenQ6Csv from "@/data/charts/cobain-cat/qwen2-1-q6-k.csv?raw";
import cobainZTurboCsv from "@/data/charts/cobain-cat/z-image-turbo.csv?raw";
import cobainZCsv from "@/data/charts/cobain-cat/z-image.csv?raw";
import cobainIrisCsv from "@/data/charts/cobain-cat/iris.csv?raw";
import cobainFlux3Csv from "@/data/charts/cobain-cat/flux3-klein.csv?raw";
import peliAnimaCsv from "@/data/charts/pelirroja/anima.csv?raw";
import peliFluxCsv from "@/data/charts/pelirroja/flux2-klein.csv?raw";
import peliFlux3Csv from "@/data/charts/pelirroja/flux3-klein.csv?raw";
import peliIrisCsv from "@/data/charts/pelirroja/iris.csv?raw";
import peliKreaQ3Csv from "@/data/charts/pelirroja/krea2-turbo-q3-k-m.csv?raw";
import peliKreaQ4Csv from "@/data/charts/pelirroja/krea2-turbo-q4-k-s.csv?raw";
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
        src: "/galleries/pelirroja/flux3-klein.png",
        model: "Flux.3 Klein",
        time: 372.04,
        alt: "Pelirroja con guitarra generada con Flux.3 Klein",
        chartCsv: peliFlux3Csv,
      },
      {
        src: "/galleries/pelirroja/iris.png",
        model: "Iris 3B",
        time: 565.2,
        alt: "Pelirroja con guitarra generada con Iris 3B",
        chartCsv: peliIrisCsv,
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
  {
    id: "megaton",
    label: "Megaton",
    prompt: `Create a bold vintage travel poster for MEGATON, a ramshackle settlement in a post-apocalyptic wasteland, inspired by the visual world of Fallout. A gigantic unexploded atomic bomb stands upright at the center of the composition, set in a sunken central plaza. All around it and rising above it, a dense, chaotic vertical slum of shacks built from rusted corrugated metal sheets, scrap wood, car doors, old pipes and salvaged machinery, stacked on top of each other in crooked layers, with sagging rooftops, leaning poles, rickety ramps, wooden catwalks and staircases crossing between the buildings. Strings of small bulb lights hang between the shacks, a wrecked school bus sits on a high rooftop, a large rusty fan wheel hangs from a tower, water tanks and antennas poke out everywhere. The overall silhouette is a crowded, improvised, towering mass of scrap converging toward the bomb. Harsh desert sunlight, long shadows, a bleak but strangely defiant atmosphere. Authentic 1950s American atomic-age advertising aesthetics combined with distressed screen printing and retro propaganda poster design. Restricted palette of faded mustard yellow, oxidized teal, rusty red, dirty cream and charcoal black. Strong silhouettes, simplified geometric shapes, visible paper grain and imperfect ink textures. Typography is bold and uncompromising. The exact word "MEGATON" in enormous, heavy vintage block lettering across the top. At the bottom, the exact welcome slogan "TU NUEVA VIDA EMPIEZA AQUÍ" in uppercase type, and just below it, in smaller type, "SE ACABÓ VAGAR POR EL YERMO". In one corner, a round badge designed as a vintage Nuka-Cola bottle cap, red and cream with a crimped metal edge, with the exact text "100% LIBRE DE SUPERMUTANTES" inside. The text must be perfectly spelled, sharp, readable and integrated into the poster composition. Striking graphic design, authentic retrofuturist atmosphere. No modern skyscrapers, no neon cyberpunk aesthetic, no gibberish, no watermark, no text other than the specified texts, no readable signs on the buildings.`,
    seed: 41,
    ratio: "1 / 1",
    images: [
      {
        src: "/galleries/megaton/anima.png",
        model: "Anima Turbo",
        time: 72.28,
        alt: "Póster de Megaton generado con Anima Turbo",
      },
      {
        src: "/galleries/megaton/flux2-klein.png",
        model: "Flux.2 Klein",
        time: 300.94,
        alt: "Póster de Megaton generado con Flux.2 Klein",
      },
      {
        src: "/galleries/megaton/flux3-klein.png",
        model: "Flux.3 Klein",
        time: 308.67,
        alt: "Póster de Megaton generado con Flux.3 Klein",
      },
      {
        src: "/galleries/megaton/iris.png",
        model: "Iris 3B",
        time: 520.4,
        alt: "Póster de Megaton generado con Iris 3B",
      },
      {
        src: "/galleries/megaton/krea2-turbo-q3-k-m.png",
        model: "Krea 2 Turbo Q3",
        time: 234.06,
        alt: "Póster de Megaton generado con Krea 2 Turbo Q3",
      },
      {
        src: "/galleries/megaton/krea2-turbo-q4-k-s.png",
        model: "Krea 2 Turbo Q4",
        time: 242.66,
        alt: "Póster de Megaton generado con Krea 2 Turbo Q4",
      },
      {
        src: "/galleries/megaton/qwen2-1-q5-k-m.png",
        model: "Qwen-Image-2.1 Q5",
        time: 528.58,
        alt: "Póster de Megaton generado con Qwen-Image-2.1 Q5",
      },
      {
        src: "/galleries/megaton/qwen2-1-q6-k.png",
        model: "Qwen-Image-2.1 Q6",
        time: 492.98,
        alt: "Póster de Megaton generado con Qwen-Image-2.1 Q6",
      },
      {
        src: "/galleries/megaton/z-image.png",
        model: "Z-Image",
        time: 449.09,
        alt: "Póster de Megaton generado con Z-Image",
      },
      {
        src: "/galleries/megaton/z-image-turbo.png",
        model: "Z-Image-Turbo",
        time: 127.5,
        alt: "Póster de Megaton generado con Z-Image-Turbo",
      },
    ],
  },
  {
    id: "anime-cat",
    label: "Anime Cat",
    prompt: `A beautiful anime-style illustration of a small fluffy cat with a tiny blue cape and a little satchel, sitting on a grassy cliff and looking out over a vast fantasy kingdom. Its cape and fur move gently in the breeze, and its ears are tilted slightly back. Below, green rolling hills dotted with wildflowers stretch toward a winding river, and ancient ruined stone towers rise in the distance. On the horizon, a giant castle glows softly under a sky full of painterly clouds. The scene is lit by warm golden-hour sunlight, with a soft rim light outlining the cat's fur. The style is a soft watercolor anime look with clean cel shading, a vibrant but gentle color palette, and a rich, detailed background. The mood is peaceful and epic, with a wide cinematic composition. No text and no watermark.`,
    seed: 41,
    ratio: "1 / 1",
    images: [
      {
        src: "/galleries/anime-cat/anima.png",
        model: "Anima Turbo",
        time: 84.5,
        alt: "Gato anime generado con Anima Turbo",
      },
      {
        src: "/galleries/anime-cat/flux2-klein.png",
        model: "Flux.2 Klein",
        time: 345.41,
        alt: "Gato anime generado con Flux.2 Klein",
      },
      {
        src: "/galleries/anime-cat/flux3-klein.png",
        model: "Flux.3 Klein",
        time: 316.28,
        alt: "Gato anime generado con Flux.3 Klein",
      },
      {
        src: "/galleries/anime-cat/iris.png",
        model: "Iris 3B",
        time: 520.14,
        alt: "Gato anime generado con Iris 3B",
      },
      {
        src: "/galleries/anime-cat/krea2-turbo-q3-k-m.png",
        model: "Krea 2 Turbo Q3",
        time: 257.58,
        alt: "Gato anime generado con Krea 2 Turbo Q3",
      },
      {
        src: "/galleries/anime-cat/krea2-turbo-q4-k-s.png",
        model: "Krea 2 Turbo Q4",
        time: 251.74,
        alt: "Gato anime generado con Krea 2 Turbo Q4",
      },
      {
        src: "/galleries/anime-cat/qwen2-1-q5-k-m.png",
        model: "Qwen-Image-2.1 Q5",
        time: 478.19,
        alt: "Gato anime generado con Qwen-Image-2.1 Q5",
      },
      {
        src: "/galleries/anime-cat/qwen2-1-q6-k.png",
        model: "Qwen-Image-2.1 Q6",
        time: 489.58,
        alt: "Gato anime generado con Qwen-Image-2.1 Q6",
      },
      {
        src: "/galleries/anime-cat/z-image.png",
        model: "Z-Image",
        time: 307.07,
        alt: "Gato anime generado con Z-Image",
      },
      {
        src: "/galleries/anime-cat/z-image-turbo.png",
        model: "Z-Image-Turbo",
        time: 124.37,
        alt: "Gato anime generado con Z-Image-Turbo",
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
