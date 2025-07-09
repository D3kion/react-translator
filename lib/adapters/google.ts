import { Translator, languages } from "google-translate-api-x";

import type { TranslatorAdapter, TranslatorProps } from "../types";

type GoogleLang = keyof typeof languages;

// TODO: cache
// queryKey: [sha256(`${text}-${from}-${to}`).toString()],

export class GoogleAdapter implements TranslatorAdapter<GoogleLang> {
  protected translator: Translator;

  constructor(opts?: ConstructorParameters<typeof Translator>[0]) {
    this.translator = new Translator(opts ?? {});
  }

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
    const res = await this.translator.translate(text, {
      from: opts?.from,
      to: opts?.to,
      forceBatch: opts?.batch,
    });
    if (Array.isArray(res)) {
      return res.map((x) => x.text);
    }
    return res.text;
  }
}
