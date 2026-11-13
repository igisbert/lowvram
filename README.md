# lowvram

Pruebas reales de IA local en una RTX 2070 de 8 GB de VRAM: qué modelos caben, a qué velocidad van y qué resultados dan. En castellano, sin nube ni suscripciones.

**Web:** https://lowvram.pages.dev

## Stack

Astro, componentes nativos (sin frameworks) y CSS. Sin CMS ni backend: contenido en componentes y arrays de TypeScript en `src/data/`.

```text
src/
├── components/   # Componentes .astro, algunos con demos interactivas
├── data/         # Specs, modelos, veredictos, glosario, FAQ...
├── layouts/      # Layout común con SEO (canonical, OG, JSON-LD)
└── pages/        # Una página por sección + glosario y pruebas
```

## Secciones

- **LLM** — modelos de texto: software, modelos probados y artefactos que generan (calculadoras, FAQ, Snake...).
- **Imágenes** — difusión (Stable Diffusion), upscale y borrado de fondo, con galerías comparativas.
- **Vídeo** — generación de vídeo en 8 GB de VRAM, con clip de ejemplo.
- **Audio** — transcripción, síntesis de voz y música, con muestras reales.
- **Miscelánea** — OCR, clasificadores y pruebas de embeddings.
- **Aplicaciones** — apps de IA listas para usar sin configurar nada, dentro y fuera de Pinokio.
- **Glosario y pruebas** — jerga explicada fácil y los prompts íntegros que se usaron con los LLM.

## Comandos

```sh
pnpm install
pnpm dev        # Servidor de desarrollo
pnpm build      # Build a ./dist/
pnpm preview    # Previsualizar el build
```

Requiere Node 22.12 o superior.
