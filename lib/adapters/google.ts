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

// const chunkRequest = (
//   text: string,
//   chunkSize: number = 0,
// ) => {
//   const chunks = [];

//   for (let i = 0; i < text.length;) {
//     const endIndex = i + chunkSize;

//     //  slices at last full sentences (within chunkSize)
//     //  to aid better translation
//     const endIndexFullSentence = (Math.min(endIndex, text.lastIndexOf('.', endIndex - 1) + 1) || endIndex);
//     const chunk = (text.slice(i, endIndexFullSentence));
//     chunks.push(chunk);

//     //  afterthough: next index is the last translated full sentence endIndex
//     i += endIndexFullSentence;
//   }

//   return chunks;
// };

export class GoogleAdapter implements TranslatorAdapter<GoogleLang> {
  private cache = new Map<string, Promise<string | string[] | null>>();
  // private batcher = new Batcher(this.config.maxBatchSize ?? 20, this.translateBatch.bind(this));

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        from: opts?.from ?? this.config.from,
        to: opts?.to ?? this.config.to,
      }),
    });
    const data = (await res.json()) as { text: string } | { text: string }[];
    return Array.isArray(data) ? data.map((x) => x.text) : data.text;
  }

  private getCacheKey(text: string, from: string, to: string): string {
    return `${from}:${to}:${text}`;
  }
}
