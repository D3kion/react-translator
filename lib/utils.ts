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
