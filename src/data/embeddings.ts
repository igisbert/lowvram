export type EmbeddingComparison = {
  text: string;
  similarity: number;
};

export type EmbeddingTest = {
  model: string;
  prompt?: string;
  reference: string;
  comparisons: EmbeddingComparison[];
};

export const embeddingTests: EmbeddingTest[] = [
  {
    model: "EmbeddingGemma-2-GGUF",
    prompt: "task: sentence similarity | query: ",
    reference: "Mi ordenador tiene 16 GB de memoria RAM.",
    comparisons: [
      { text: "Mi PC dispone de 16 gigabytes de memoria.", similarity: 0.9755 },
      { text: "Mi portátil lleva 16 GB de RAM.", similarity: 0.9746 },
      { text: "La memoria de mi equipo es de 16 GB.", similarity: 0.9561 },
      {
        text: "Tengo dieciséis gigas de RAM en el ordenador.",
        similarity: 0.9680,
      },
      { text: "La tarjeta gráfica tiene 8 GB de VRAM", similarity: 0.9060 },
      {
        text: "Mi ordenador tiene 32 GB de memoria RAM.",
        similarity: 0.9713,
      },
      {
        text: "Mi ordenador tiene un disco SSD de 1 TB.",
        similarity: 0.9200,
      },
      {
        text: "Mi ordenador es muy lento y se cuelga a menudo.",
        similarity: 0.8530,
      },
      {
        text: "Compré un ordenador nuevo la semana pasada.",
        similarity: 0.8523,
      },
      { text: "Mi móvil tiene 8 GB de memoria RAM.", similarity: 0.9365 },
      { text: "Hoy hace un buen día para salir a pasear.", similarity: 0.7803 },
      { text: "Mañana lloverá durante toda la tarde", similarity: 0.7645 },
      { text: "Me gusta comer pizza", similarity: 0.7670 },
      {
        text: "El partido empieza a las nueve de la noche.",
        similarity: 0.7476,
      },
      { text: "Mi hermana se casa en junio.", similarity: 0.7657 },
      {
        text: "Tengo que renovar el DNI antes de fin de mes.",
        similarity: 0.7889,
      },
      {
        text: "El gato se ha subido al armario otra vez.",
        similarity: 0.7843,
      },
      { text: "My computer has 16 GB of RAM.", similarity: 0.9822 },
      {
        text: "The weather is nice today, let's go for a walk.",
        similarity: 0.7537,
      },
      {
        text: "Du, du hast, du hast mich, du hast mich",
        similarity: 0.7814,
      },
    ],
  },
  {
    model: "EmbeddingGemma-2-GGUF",
    prompt: "",
    reference: "Mi ordenador tiene 16 GB de memoria RAM.",
    comparisons: [
      { text: "Mi PC dispone de 16 gigabytes de memoria.", similarity: 0.9644 },
      { text: "Mi portátil lleva 16 GB de RAM.", similarity: 0.9457 },
      { text: "La memoria de mi equipo es de 16 GB.", similarity: 0.9152 },
      {
        text: "Tengo dieciséis gigas de RAM en el ordenador.",
        similarity: 0.9333,
      },
      { text: "La tarjeta gráfica tiene 8 GB de VRAM", similarity: 0.8356 },
      {
        text: "Mi ordenador tiene 32 GB de memoria RAM.",
        similarity: 0.9597,
      },
      {
        text: "Mi ordenador tiene un disco SSD de 1 TB.",
        similarity: 0.8744,
      },
      {
        text: "Mi ordenador es muy lento y se cuelga a menudo.",
        similarity: 0.8396,
      },
      {
        text: "Compré un ordenador nuevo la semana pasada.",
        similarity: 0.8305,
      },
      { text: "Mi móvil tiene 8 GB de memoria RAM.", similarity: 0.9071 },
      { text: "Hoy hace un buen día para salir a pasear.", similarity: 0.6598 },
      { text: "Mañana lloverá durante toda la tarde", similarity: 0.6788 },
      { text: "Me gusta comer pizza", similarity: 0.6790 },
      {
        text: "El partido empieza a las nueve de la noche.",
        similarity: 0.6591,
      },
      { text: "Mi hermana se casa en junio.", similarity: 0.6824 },
      {
        text: "Tengo que renovar el DNI antes de fin de mes.",
        similarity: 0.6969,
      },
      {
        text: "El gato se ha subido al armario otra vez.",
        similarity: 0.6884,
      },
      { text: "My computer has 16 GB of RAM.", similarity: 0.8878 },
      {
        text: "The weather is nice today, let's go for a walk.",
        similarity: 0.6167,
      },
      {
        text: "Du, du hast, du hast mich, du hast mich",
        similarity: 0.6917,
      },
    ],
  },
  {
    model: "Qwen3-Embedding-0.6B-GGUF",
    prompt: "task: sentence similarity | query: ",
    reference: "Mi ordenador tiene 16 GB de memoria RAM.",
    comparisons: [
      { text: "Mi PC dispone de 16 gigabytes de memoria.", similarity: 0.9727 },
      { text: "Mi portátil lleva 16 GB de RAM.", similarity: 0.9262 },
      { text: "La memoria de mi equipo es de 16 GB.", similarity: 0.8703 },
      {
        text: "Tengo dieciséis gigas de RAM en el ordenador.",
        similarity: 0.9226,
      },
      { text: "La tarjeta gráfica tiene 8 GB de VRAM", similarity: 0.8971 },
      {
        text: "Mi ordenador tiene 32 GB de memoria RAM.",
        similarity: 0.9938,
      },
      {
        text: "Mi ordenador tiene un disco SSD de 1 TB.",
        similarity: 0.9412,
      },
      {
        text: "Mi ordenador es muy lento y se cuelga a menudo.",
        similarity: 0.8290,
      },
      {
        text: "Compré un ordenador nuevo la semana pasada.",
        similarity: 0.8569,
      },
      { text: "Mi móvil tiene 8 GB de memoria RAM.", similarity: 0.9159 },
      { text: "Hoy hace un buen día para salir a pasear.", similarity: 0.7283 },
      { text: "Mañana lloverá durante toda la tarde", similarity: 0.7462 },
      { text: "Me gusta comer pizza", similarity: 0.8065 },
      {
        text: "El partido empieza a las nueve de la noche.",
        similarity: 0.7112,
      },
      { text: "Mi hermana se casa en junio.", similarity: 0.7970 },
      {
        text: "Tengo que renovar el DNI antes de fin de mes.",
        similarity: 0.7656,
      },
      {
        text: "El gato se ha subido al armario otra vez.",
        similarity: 0.7228,
      },
      { text: "My computer has 16 GB of RAM.", similarity: 0.9567 },
      {
        text: "The weather is nice today, let's go for a walk.",
        similarity: 0.6978,
      },
      {
        text: "Du, du hast, du hast mich, du hast mich",
        similarity: 0.7209,
      },
    ],
  },
  {
    model: "Qwen3-Embedding-0.6B-GGUF",
    prompt: "",
    reference: "Mi ordenador tiene 16 GB de memoria RAM.",
    comparisons: [
      { text: "Mi PC dispone de 16 gigabytes de memoria.", similarity: 0.9072 },
      { text: "Mi portátil lleva 16 GB de RAM.", similarity: 0.8183 },
      { text: "La memoria de mi equipo es de 16 GB.", similarity: 0.6999 },
      {
        text: "Tengo dieciséis gigas de RAM en el ordenador.",
        similarity: 0.8553,
      },
      { text: "La tarjeta gráfica tiene 8 GB de VRAM", similarity: 0.7388 },
      {
        text: "Mi ordenador tiene 32 GB de memoria RAM.",
        similarity: 0.9796,
      },
      {
        text: "Mi ordenador tiene un disco SSD de 1 TB.",
        similarity: 0.8614,
      },
      {
        text: "Mi ordenador es muy lento y se cuelga a menudo.",
        similarity: 0.6808,
      },
      {
        text: "Compré un ordenador nuevo la semana pasada.",
        similarity: 0.6971,
      },
      { text: "Mi móvil tiene 8 GB de memoria RAM.", similarity: 0.8038 },
      { text: "Hoy hace un buen día para salir a pasear.", similarity: 0.4406 },
      { text: "Mañana lloverá durante toda la tarde", similarity: 0.4325 },
      { text: "Me gusta comer pizza", similarity: 0.4929 },
      {
        text: "El partido empieza a las nueve de la noche.",
        similarity: 0.4068,
      },
      { text: "Mi hermana se casa en junio.", similarity: 0.4997 },
      {
        text: "Tengo que renovar el DNI antes de fin de mes.",
        similarity: 0.4841,
      },
      {
        text: "El gato se ha subido al armario otra vez.",
        similarity: 0.4745,
      },
      { text: "My computer has 16 GB of RAM.", similarity: 0.8966 },
      {
        text: "The weather is nice today, let's go for a walk.",
        similarity: 0.3762,
      },
      {
        text: "Du, du hast, du hast mich, du hast mich",
        similarity: 0.4602,
      },
    ],
  },
];
