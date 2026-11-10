export type PromptTest = {
  name: string;
  focus: string;
  text: string;
};

export const prompts: PromptTest[] = [
  {
    name: "Calculadora",
    focus:
      "Un componente con aritmética, casos límite explícitos (precedencia, coma flotante, división entre cero) y un CSS encapsulado que no salga del componente.",
    text: `Crea un componente de calculadora para Astro llamado Calculator.astro.

Requisitos técnicos

- Utiliza Astro, JavaScript vanilla y CSS nativo.
- Devuelve únicamente el código de Calculator.astro, sin explicaciones ni Markdown. HTML, CSS y JS van dentro del propio componente.
- No uses eval ni new Function: evalúa las expresiones con tu propio algoritmo.
- Todo el CSS bajo una clase raíz propia (por ejemplo .calc). Prohibidos :root, * y selectores de etiqueta sueltos.
- Sin id ni manejadores inline (onclick=""): usa clases y addEventListener, consultando solo dentro de tu raíz.
- No añadas estilos ni JS que afecten al resto de la página.

Funcionalidad

- Suma, resta, multiplicación y división.
- Botones numéricos, decimal, borrar último dígito, limpiar e igual.
- Encadenar operaciones respetando la precedencia (2+3*4 = 14).
- Evita errores de coma flotante en resultados habituales (0.1+0.2 debe mostrar 0.3).
- División entre cero: muestra un error claro y permite recuperarse al pulsar cualquier tecla.
- Define y documenta en un comentario breve cómo gestionas: expresión incompleta al pulsar igual (5+=), operadores consecutivos (5++3, 5+-3), punto decimal suelto, segundo punto en un mismo número (1.2.3) y continuar operando tras un resultado (2+3= y luego +4).

Interfaz

- Diseño oscuro, minimalista y cuidado, adaptable a escritorio y móvil.
- Jerarquía clara entre resultado, expresión y botones.
- Estados hover, active y foco visibles. Botones con etiquetas accesibles y áreas táctiles de al menos 44px.

Antes de terminar, repasa mentalmente cada caso límite indicado y corrige los errores que encuentres.
Prioriza la corrección y la simplicidad. No añadas funciones que no se hayan pedido.`,
  },
  {
    name: "Reproductor de música",
    focus:
      "Un MusicPlayer.astro con el audio nativo del navegador y tres pistas concretas de Wikimedia. ",
    text: `Crea un componente MusicPlayer.astro para un proyecto Astro existente, usando Astro, JavaScript vanilla y CSS nativo. Devuelve únicamente el código del componente, sin explicaciones ni Markdown.

Aislamiento obligatorio: los estilos y el JavaScript afectan exclusivamente al componente. No uses selectores CSS globales, variables globales ni listeners que interfieran con el resto de la web.

Reglas de integración (el componente vivirá dentro de una página existente):

- Prohibido <html>, <body>, <main> y <h1>: no eres una página.
- Prohibido :root, * y selectores de etiqueta (body, button...). Todo el CSS bajo una clase raíz propia (por ejemplo .music-player).
- Prohibido id y manejadores inline (onclick=""): usa clases y addEventListener, consultando solo dentro de tu raíz. Los scripts empaquetados no ven funciones globales.
- Nada de sintaxis de otros motores de plantillas (Svelte, Vue, JSX): solo HTML y JS válidos.
- Todo elemento referenciado desde JS debe existir en el markup: revisa cada consulta una por una.
- Si capturas teclado, solo cuando el foco esté dentro del componente y sin preventDefault fuera de él. Nunca secuestres flechas ni espacio globales.
- Sin emojis en la interfaz. Sin animaciones de hover con transform.
- La barra de progreso solo cambia por clic o toque, nunca por pasar el ratón.
- Áreas táctiles de al menos 44px y foco visible en todo lo interactivo.
- Controles con nombre accesible: el slider de volumen y la barra de progreso llevan aria-label.

Canciones
Usa el elemento HTML audio nativo y estas tres pistas (licencia CC0, Wikimedia Commons). Usa exactamente estas URLs, no inventes otras:

1. Free To Use 1: https://upload.wikimedia.org/wikipedia/commons/b/b6/Monplaisir_-_01_-_Free_To_Use_1.ogg
2. Free To Use 2: https://upload.wikimedia.org/wikipedia/commons/8/84/Monplaisir_-_02_-_Free_To_Use_2.ogg
3. Free To Use 5: https://upload.wikimedia.org/wikipedia/commons/9/9c/Monplaisir_-_05_-_Free_To_Use_5.ogg

Funcionalidad y diseño

- Reproducir, pausar, anterior/siguiente y avance automático al terminar una pista.
- Barra de progreso interactiva, tiempo actual y duración, y control de volumen.
- Lista de canciones con la pista activa resaltada y el título de la pista actual visible.
- Gestión de errores de reproducción con un mensaje visible.
- Interfaz oscura, moderna, minimalista y responsive.`,
  },
  {
    name: "FAQ",
    focus:
      "Un acordeón accesible con aria-expanded, animación de altura y respeto por prefers-reduced-motion. ",
    text: `Crea un componente FAQ.astro para un proyecto Astro existente, con JavaScript vanilla y CSS nativo. Devuelve únicamente el código del componente, sin explicaciones ni Markdown. HTML, CSS y JS van en el mismo fichero.

Todo debe ser autónomo: inventa 5 preguntas y respuestas de ejemplo en español, escribe todos los estilos y la lógica. No uses contenido, imágenes, iconos, fuentes, librerías ni recursos externos. No instales dependencias.

Funcionalidad

- Abrir y cerrar cada respuesta.
- Transición fluida al desplegar y plegar (anima la altura sin dejar saltos), respetando prefers-reduced-motion.
- Botones semánticos con aria-expanded y aria-controls.
- Prohibido usar id, salvo los estrictamente necesarios para aria-controls: genera ids únicos con prefijo propio (por ejemplo faq-panel-1), sin usarlos en CSS ni en JS.

Diseño

- Interfaz moderna, minimalista y oscura, con separadores sutiles y tipografía bien jerarquizada.
- Indicadores de apertura creados con CSS (sin iconos ni imágenes).
- Responsive para escritorio y móvil, foco visible.

Aislamiento y calidad

- Estilos encapsulados bajo una clase raíz propia: nada de selectores globales ni efectos sobre el resto de la web.
- JavaScript limitado al componente, sin variables globales ni listeners innecesarios.
- Prioriza un resultado funcional, accesible y visualmente cuidado, sin sobreingeniería.`,
  },
  {
    name: "Landing page",
    focus:
      "Una marca ficticia en cinco secciones, con CSS puro, sin imágenes ni fuentes externas.", 
    text: `Crea una landing page original para una marca ficticia, en un componente Landing.astro.

Estructura: exactamente 5 secciones.

1. Hero: nombre de marca, titular memorable, descripción breve, CTA y composición visual protagonista.
2. Propuesta de valor: tres beneficios concretos, con una composición editorial que no use tarjetas repetitivas.
3. Sección conceptual: explica la idea central de la marca mediante tipografía, contenido y una composición visual diferenciada.
4. Sección estética: una pausa visual de gran impacto, casi como un póster editorial integrado en la web. Tipografía de gran escala, formas geométricas, capas, líneas, bloques de color o ilustraciones creadas con CSS. Identidad visual propia, que rompa el ritmo de las anteriores y resulte memorable. Sin contenido de relleno.
5. Cierre: mensaje final contundente y CTA. No crees un footer independiente.

Dirección artística: decide una identidad visual coherente y aplícala a toda la página: paleta limitada, tipografía expresiva, contraste, espacios negativos, asimetría y composiciones variadas. Evita el aspecto genérico de landing SaaS, las cuadrículas de tarjetas repetidas, los degradados gratuitos y la decoración sin propósito. Elige una dirección visual concreta en lugar de mezclar estilos. Al no poder usar fuentes externas, trabaja con stacks de fuentes del sistema (serif, sans, mono, condensadas) y juega con peso, tamaño y espaciado.

Restricciones técnicas

- Devuelve únicamente el código del componente Astro, sin explicaciones ni Markdown.
- Incluye exclusivamente el HTML de las cinco secciones, la navegación y un único bloque <style>.
- Sin DOCTYPE, html, head ni body.
- Sin el ":global" de Astro
- Sin JavaScript, scripts, frameworks, dependencias, Tailwind ni estilos inline.
- Sin imágenes, fuentes, iconos ni recursos externos: construye los elementos visuales con HTML y CSS.
- Selectores CSS acotados al componente (clase raíz propia); no modifiques estilos globales.
- Responsive real, HTML semántico, enlaces accesibles, foco visible y respeto por prefers-reduced-motion.
- Textos ficticios coherentes con la marca, no lorem ipsum.
- Prioriza la calidad de la composición y los detalles visuales sobre la cantidad de código.
- No uses position fixed
- No uses custom properties o variables de CSS
- Usa los <a> sin href`,
  },
  {
    name: "Correo con faltas",
    focus:
      "Un texto con errores de ortografía que hay que corregir, reescribir en registro formal y resumir en tres frases prohibiendo palabras concretas.",
    text: `Tienes este correo:

"Hola Rubén,

Te escribo para contarte como fue el cierre del proyecto de la tienda online, por que creo que deveriamos hacer balance antes de que se nos olbide. Teniamos que entregarselo al cliente el martes 13 de Octubre, pero al final no lo entregamos hasta el lunes 19. La causa principal fue, que la pasarela de pago fallo en las pruebas finales y hubieron que rehacer casi todo el flujo de compra. Yo ya le avise a Marcos hace semanas, pero no me hiso caso; la dije que habia que probarla antes y el pensaba de que no hacia falta.

Ademas, el presupuesto inicial era de 12.500 € y al final nos pasamos un 8 %, sobretodo por las horas extra del equipo de desarrollo. Me alegro que el cliente se halla mostrado comprensivo, aunque se que no abra una segunda oportunidad si volvemos a fallar. Si no mejoramos la planificacion, tendremos los mismos problemas el proximo trimestre.

Por ultimo, quiero proponerte una reunion con todo el equipo, a ser posible la semana que viene, para hablar a cerca de como evitar que esto se repita. Hay que decidir que herramientas usamos y quien se encarga de cada tarea, sobretodo en las fases finales. Ya me diras que dia te viene mejor.

Un abrazo,
Elena"

Responde con estas seis secciones, numeradas y en este orden:

1. Texto corregido: devuelve el correo completo corrigiendo ortografía, tildes, puntuación y gramática. No cambies el contenido, el estilo ni el orden de las frases.
2. Versión formal: reescribe el correo para enviarlo a la dirección de la empresa, en tono formal y con saludo y despedida formales. Conserva todas las fechas y cifras y no inventes datos.
3. Resumen: exactamente 3 frases, de máximo 25 palabras cada una, sin usar las palabras "problema", "retraso" ni "fallo".
4. Preguntas sobre el texto (responde con el dato y, si hay cálculo, la operación):
   a) ¿Cuántos días naturales y cuántos días laborables (lunes a viernes) pasaron entre la fecha prevista de entrega y la entrega real?
   b) ¿Cuál fue aproximadamente el coste final del proyecto?`,
  },
  {
    name: "Factura en JSON",
    focus:
      "Extraer cliente, servicios, totales y forma de pago de un PDF y devolver JSON válido. ",
    text: `Extrae el nombre del cliente, los servicios y el precio, el total a pagar y la forma de pago. Salida en formato JSON
Usar el pdf invoice`,
  },
  {
    name: "Snake",
    focus:
      "Un juego con canvas, foco de teclado encapsulado y estados completos (pausa, game over, reinicio).",
    text: `Crea el juego de la serpiente (Snake) como componente SnakeGame.astro para un proyecto Astro existente, usando Astro, JavaScript vanilla y CSS nativo. Devuelve únicamente el código del componente, sin explicaciones ni Markdown. HTML, CSS y JS van dentro del propio componente.

Aislamiento obligatorio: los estilos y el JavaScript afectan exclusivamente al componente. No uses selectores CSS globales, variables globales ni listeners que interfieran con el resto de la web.

Reglas de integración (el componente vivirá dentro de una página existente):

- Prohibido <html>, <body>, <main> y <h1>: no eres una página.
- Prohibido :root, * y selectores de etiqueta (body, button, canvas...). Todo el CSS bajo una clase raíz propia (por ejemplo .snake-game).
- Prohibido id y manejadores inline (onclick=""): usa clases y addEventListener, consultando solo dentro de tu raíz. Los scripts empaquetados no ven funciones globales.
- Prohibido registrar listeners en window o document. Los eventos se escuchan solo en elementos del componente.
- El teclado se captura únicamente cuando el foco está dentro del componente (haz el canvas o el contenedor focusable con tabindex). Usa preventDefault solo sobre las teclas del juego y solo cuando el foco esté dentro: las flechas y la barra espaciadora del resto de la página no se tocan.
- Nada de sintaxis de otros motores de plantillas (Svelte, Vue, JSX): solo HTML y JS válidos.
- Todo elemento referenciado desde JS debe existir en el markup: revisa cada consulta una por una.
- Si hay varias instancias del componente en la misma página, cada una funciona de forma independiente (sin estado compartido).
- Sin librerías, imágenes ni recursos externos. Sin emojis en la interfaz.
- Áreas táctiles de al menos 44px y foco visible en todo lo interactivo.

Funcionalidad

- Canvas con una rejilla (por ejemplo 20x20).
- Control con flechas y WASD, solo cuando el componente tiene el foco. Añade botones táctiles direccionales visibles en pantallas táctiles/estrechas.
- La serpiente avanza sola y crece al comer. La comida nunca aparece sobre el cuerpo de la serpiente.
- No se permite girar 180 grados sobre sí misma, ni siquiera pulsando dos teclas muy rápido dentro del mismo tick.
- Game over al chocar con las paredes o con su propio cuerpo; al terminar, el bucle del juego se detiene (sin temporizadores huérfanos).
- Puntuación visible y mejor puntuación de la sesión.
- Pausa con la barra espaciadora y reinicio con Enter tras el game over. El juego se pausa solo si el componente pierde el foco.
- La velocidad aumenta ligeramente cada cierto número de puntos.
- Mensaje de inicio ("haz clic o pulsa una tecla para empezar") y mensaje de game over.
- Interfaz oscura, minimalista y responsive, con el canvas adaptado al ancho disponible sin desbordar.

Antes de terminar, revisa mentalmente cada requisito y cada regla de integración, y corrige los fallos que encuentres.`,
  },
];
