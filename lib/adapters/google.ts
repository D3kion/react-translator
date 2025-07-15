import { languages } from "google-translate-api-x";

import type { TranslatorAdapter, TranslatorProps } from "../types";

export type GoogleLang = keyof typeof languages;
export interface GoogleAdapterConfig
  extends Omit<TranslatorProps<GoogleLang>, "batch"> {
  /**
   * Translation proxy url. Must implement `POST /translate ({ text: string | string[], from: string, to: string })`
   */
  baseURL: string;
}

// TODO: cache
// queryKey: [sha256(`${text}-${from}-${to}`).toString()],

export class GoogleAdapter implements TranslatorAdapter<GoogleLang> {
  constructor(private config: GoogleAdapterConfig) {}

  translate(
    text: string,
    opts?: TranslatorProps<GoogleLang> | undefined
  ): Promise<string | null>;
  translate(
    text: string[],
    opts?: TranslatorProps<GoogleLang> | undefined
  ): Promise<string[] | null>;

  async translate(
    text: string | string[],
    opts?: TranslatorProps<GoogleLang> | undefined
  ): Promise<string | string[] | null> {
    const res = await fetch(this.config.baseURL + "/translate", {
      method: "POST",
      body: JSON.stringify({
        text,
        from: opts?.from ?? this.config.from,
        to: opts?.to ?? this.config.to,
      }),
    });
    const data = (await res.json()) as { text: string } | { text: string }[];
    return Array.isArray(data) ? data.map((x) => x.text) : data.text;
  }
}
