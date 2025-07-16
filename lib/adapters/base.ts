import { languages } from "google-translate-api-x";

import type {
  TranslatorAdapter,
  TranslatorProps,
  TranslatorResult,
} from "../types";
import { cyrb64Hash } from "../utils";
import { Batcher } from "./_batcher";

export type BaseLang = keyof typeof languages;

interface Translation extends Pick<TranslatorProps, "from" | "to"> {
  text: TranslatorResult;
}

export interface BaseAdapterConfig
  extends Pick<TranslatorProps<BaseLang>, "from" | "to"> {
  /**
   * Translation proxy url. Must implement `POST /translate ({ text: string | string[], from: string, to: string })`
   */
  baseURL: string;

  chunkSize?: number;
  batchSize: number;
  batchTimeout: number;
}

export class BaseAdapter implements TranslatorAdapter<BaseLang> {
  private cache = new Map<
    string,
    Promise<TranslatorResult | TranslatorResult[]>
  >();
  private batcher: Batcher<Translation, TranslatorResult>;

  constructor(private config: BaseAdapterConfig) {
    this.batcher = new Batcher<Translation, TranslatorResult>(
      this.config.batchSize ?? 20,
      this.config.batchTimeout ?? 100,
      this.getCacheKey.bind(this),
      this.translateBatch.bind(this)
    );
    this.config.chunkSize ??= 5000;
  }

  translate(
    text: string,
    opts?: TranslatorProps<BaseLang> | undefined
  ): Promise<TranslatorResult>;
  translate(
    text: string[],
    opts?: TranslatorProps<BaseLang> | undefined
  ): Promise<TranslatorResult[]>;

  async translate(
    text: string | string[],
    opts?: TranslatorProps<BaseLang> | undefined
  ): Promise<TranslatorResult | TranslatorResult[]> {
    const normalizedFrom = opts?.from ?? this.config.from;
    const normalizedTo = opts?.to ?? this.config.to;

    if (Array.isArray(text)) {
      return Promise.all(
        text.map((t) =>
          this.translateSingle({
            text: t,
            from: normalizedFrom,
            to: normalizedTo,
          })
        )
      );
    }
    return this.translateSingle({
      text,
      from: normalizedFrom,
      to: normalizedTo,
    });
  }

  protected getCacheKey({ from, to, text }: Translation): string {
    if (!text) return "";
    return `${from}:${to}:${cyrb64Hash(text)}`;
  }

  protected async translateSingle(
    data: Translation
  ): Promise<TranslatorResult> {
    const key = this.getCacheKey(data);

    if (this.cache.has(key)) {
      return this.cache.get(key)! as Promise<TranslatorResult>;
    }

    const chunkedTexts = this.splitTextIntoChunks(data.text as string);
    if (chunkedTexts.length === 1) {
      const promise = this.batcher.add(data);
      this.cache.set(key, promise);
      return promise;
    }

    const promises = chunkedTexts.map((chunk) =>
      this.batcher.add({ text: chunk, from: data.from, to: data.to })
    );

    const translatedChunks = await Promise.all(promises);
    const fullTranslation = translatedChunks.join(" ");
    this.cache.set(key, Promise.resolve(fullTranslation));

    return fullTranslation;
  }

  private splitTextIntoChunks(text: string): string[] {
    const chunks = new Array<string>();

    for (let i = 0; i < text.length; ) {
      const endIndex = i + this.config.chunkSize!;

      const endIndexFullSentence =
        Math.min(endIndex, text.lastIndexOf(".", endIndex - 1) + 1) || endIndex;
      const chunk = text.slice(i, endIndexFullSentence);
      chunks.push(chunk);

      i += endIndexFullSentence;
    }

    return chunks;
  }

  private async translateBatch(
    data: Translation[]
  ): Promise<TranslatorResult[]> {
    if (!data.length) return [];
    try {
      const res = await fetch(this.config.baseURL + "/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: data.flatMap((x) => x.text),
          from: data[0]!.from,
          to: data[0]!.to,
        }),
      });

      const result = (await res.json()) as
        | { text: string }
        | { text: string }[];

      if (Array.isArray(result)) {
        return result.map((x) => x.text);
      }
      return [result.text];
    } catch (err) {
      console.error("Translation error:", err);
      return data.map((x) => x.text);
    }
  }
}
