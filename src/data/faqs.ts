export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "¿Son estas pruebas infalibles?",
    answer:
      "No. Soy un aficionado jugando con esto en mi tiempo libre. Puedo haber medido mal, usado un ajuste que no era el mejor o sacado una conclusión errónea. Todo lo que leas aquí puede estar mal, así que compáralo con otras fuentes y, sobre todo, pruébalo tú mismo.",
  },
  {
    question: "¿Por qué recomiendas un software y no otro?",
    answer:
      "Porque a mí me funciona. Lo que marco como recomendado es mi opinión, y responde a mi caso de uso concreto. Puede que a ti te funcione mejor otro software, así que pruébalo y decide por ti mismo.",
  },
  {
    question: "¿Has probado todos los modelos?",
    answer:
      "No, ni de lejos. Pruebo los modelos que me llaman la atención y que puedan funcionar en 8 GB. Es perfectamente posible que haya una joya escondida que no haya probado o que salga un modelo nuevo que sea increíble y que aún no lo haya podido probar. ",
  },
  {
    question: "¿Por qué una GPU de 2018?",
    answer:
      "Porque es la que tengo. Tiene poca memoria y la arquitectura Turing es vieja, por esto es interesante ver y probar qué cosas se pueden hacer y cuales no. Si tuviera una RTX 5090 esta página web no existiría. ",
  },
  {
    question: "¿Le das uso real o solo trasteo?",
    answer:
      "La verdad es que sí. Para generar imágenes ya no recurro a ChatGPT o Grok, los modelos locales funcionan perfectamente. También uso a veces Whisper para transcribir o FaceFusion para hacer memes. En LLM, sinceramente, para el día a día suelo tirar de IA cloud y de OpenCode. Pero si necesito privacidad recurro a los LLM locales. ",
  },
  {
    question: "¿Y esto se va a ir actualizando?",
    answer:
      "Sí. Si encuentro un modelo o aplicación interesante, lo probaré y añadiré. ",
  },
];

