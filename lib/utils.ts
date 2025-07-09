export function detectBrowserLanguage(): string {
  if (typeof window === "undefined") return "en";
  const lang = window.navigator?.language?.startsWith("zh")
    ? window.navigator.language
    : window.navigator?.language?.split("-").at(0);
  return lang ?? "en";
}
