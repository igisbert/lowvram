import type { SpecItem } from "@/types";

/* Real specs del equipo. Fotos pendientes: sustituir el placeholder. */
export const specs: SpecItem[] = [
  {
    id: "gpu",
    label: "GPU",
    value: "RTX 2070 · 8 GB VRAM",
    detail: "2018",
    photoAlt: "Foto de la GPU RTX 2070",
  },
  {
    id: "ram",
    label: "RAM",
    value: "16 GB DDR4",
    photoAlt: "Foto de la memoria RAM",
  },
  {
    id: "cpu",
    label: "CPU",
    value: "Ryzen 7 5800X",
    photoAlt: "Foto de la CPU Ryzen 7 5800X",
  },
  {
    id: "ssd",
    label: "SSD",
    value: "Samsung 980 PRO 1 TB",
    photoAlt: "Foto del SSD Samsung 980 PRO",
  },
];
