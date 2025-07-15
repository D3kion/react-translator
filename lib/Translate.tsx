import { useEffect, useState } from "react";
import type { TranslatorProps } from "./types";
import { useTranslator } from "./useTranslator";

interface TranslateProps extends Partial<TranslatorProps> {
  /**
   * Text that would be translated
   */
  text: string;
}

export function Translate({ text, from, to, batch }: TranslateProps) {
  const { translate } = useTranslator({ from, to, batch });
  const [translated, setTranslated] = useState<string | null>(null);

  useEffect(() => {
    translate(text).then((res) =>
      setTranslated(Array.isArray(res) ? res.join("") : res)
    );
  }, [text, translate]);

  return translated ?? text;
}
