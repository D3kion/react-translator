export interface TranslatorProps<Language = string> {
  /**
   * Content language that would be translated from
   *
   * @default "auto"
   */
  from: Language;

  /**
   * Language for translation output
   *
   * @default window.navigator.language ?? "en"
   */
  to: Language;

  /**
   * Should auto-batch request
   *
   * @default true
   */
  batch: boolean;
}

export interface TranslatorContextProps<Adapter extends TranslatorAdapter>
  extends TranslatorProps {
  /**
   * Adapter for translation API
   *
   * @default GoogleAdapter
   */
  adapter: Adapter;
}

export interface TranslatorAdapter<Language = string> {
  translate(
    text: string,
    opts?: TranslatorProps<Language>
  ): Promise<string | null>;

  translate(
    text: string[],
    opts?: TranslatorProps<Language>
  ): Promise<string[] | null>;
}
