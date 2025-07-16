import { isValidElement, type ReactNode } from "react";

export function detectBrowserLanguage(): string {
  if (typeof window === "undefined") return "en";
  const lang = window.navigator?.language?.startsWith("zh")
    ? window.navigator.language
    : window.navigator?.language?.split("-").at(0);
  return lang ?? "en";
}

// List of known void elements and elements to skip translation for
const voidElements = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
  "abbr",
  "code",
  "var",
  "sub",
  "sup",
  "svg",
  "progress",
  "kbd",
  "ruby",
];

export function isVoidElement(node: ReactNode | null | undefined) {
  if (isValidElement(node)) return voidElements.includes(node.type as string);
  return false;
}

function cyrb64(str: string, seed = 0): [number, number] {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return [h2 >>> 0, h1 >>> 0];
}

/**
 * An *insecure* 64-bit hash that's short, fast, and has no dependencies.
 * Output is always 14 characters.
 */
export function cyrb64Hash(str: string[] | string, seed = 0): string {
  if (Array.isArray(str)) {
    return cyrb64Hash(str.map(cyrb64Hash).join(""));
  }

  const [h2, h1] = cyrb64(str, seed);
  return h2.toString(36).padStart(7, "0") + h1.toString(36).padStart(7, "0");
}
