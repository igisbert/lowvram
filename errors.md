# Errores vistos en las pruebas

Inventario para redactar los resultados. Solo defectos del artefacto tal como
lo generó el modelo, no del andamiaje de integración.

## Ling 3.0 Tiny Q5_K_M

### Calculadora (llama-server)
- Botones C, ⌫ y ÷ muertos: sin `data-value` o con acción inexistente en el switch.
- El ⌫ de abajo inserta el carácter "⌫" en la cuenta.
- Backspace limpia todo en vez de borrar un dígito.
- Duplicada toda la botonera para móvil (bloque `.keyboard` innecesario).

### Calculadora 2 → final (llama-server)
- El display de expresión no tenía `id` y el script lo buscaba: muerta al primer clic.
  Reparación mínima aplicada para poder ejecutarla (documentada en la prueba).

### MusicPlayer v1 (Pi)
- Restos de otro motor de plantillas (`<#each…>`) que dejaban el script roto.
- Todo con `onclick=""` globales: no funcionan con scripts empaquetados.

### MusicPlayer v2 = final (OpenCode)
- Ignora restricciones del prompt: `min-height: 100vh`, toast a `document.body`,
  `keydown` global con `preventDefault` en flechas/espacio.
- El play no hace nada hasta elegir canción (nunca carga la primera).
- Botón de volumen sin cablear.
- Cada play apila un intervalo nuevo sin limpiar el anterior.

### FAQ v1 (Pi)
- Sin `<script>`: acordeón muerto al llegar.
- Alucinaciones en el contenido: `<script setup>` en Astro (es sintaxis Vue),
  "Astro Block" inventado, todas las siglas mal desarrolladas
  (SSR, SSG, SPA, ISR).
- Bloque `prefers-color-scheme: light` en una web solo oscura.
- Preguntas con `nowrap`: se cortan en móvil.

### FAQ v2 (Pi)
- Escrito en Svelte (`{#each}`, `{item.q}`): no compila en Astro.
- JS con `document` en el frontmatter (se ejecuta en servidor): rompe el build.
- Vuelven `<main>`, `<h1>`, `*` y estilos de `body` pese a prohibirlos.
- `.faq-header` usada a la vez para la cabecera y los botones (estilos cruzados).
- Las respuestas hablan del propio acordeón y mienten
  ("los estados se mantienen tras recargas").

## Patrones generales
1. **Cableado**: IDs que no existen, acciones sin caso, botones muertos.
2. **Fugas**: globales, `*`, `:root`, `body`, `main`, `h1`, toast fuera, teclado global.
3. **Framework confundido**: Svelte en vez de Astro, sintaxis Vue en respuestas.
4. **Contenido alucinado**: siglas, APIs y conceptos inventados con seguridad total.
5. **Prompt ignorado**: las restricciones explícitas se saltan igual (100vh, light mode).
