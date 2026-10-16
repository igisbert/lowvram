/* Minimal JSON syntax highlighter. Runs at build time, no client JS.
   Single-pass tokenizer over HTML-escaped source so inserted spans
   are never re-matched. Output is meant for Astro's set:html. */

const TOKEN_RE =
  /("(?:[^"\\]|\\.)*")(\s*:)?|\b(true|false|null)\b|-?\b\d+(\.\d+)?([eE][+-]?\d+)?\b/g;

export function highlightJson(source: string): string {
  const escaped = source
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped.replace(
    TOKEN_RE,
    (match: string, str?: string, colon?: string, literal?: string) => {
      if (str !== undefined) {
        return colon !== undefined
          ? `<span class="tok-key">${str}</span>${colon}`
          : `<span class="tok-str">${str}</span>`;
      }
      if (literal !== undefined) {
        return `<span class="tok-kw">${literal}</span>`;
      }
      return `<span class="tok-num">${match}</span>`;
    },
  );
}
