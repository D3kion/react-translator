import { useCallback } from "react";

import type { TranslatorProps } from "./types";
import { useTranslatorContext } from "./TranslatorContext";

export function useTranslator({
  from,
  to,
  batch,
}: Partial<TranslatorProps> = {}) {
  const ctx = useTranslatorContext();
  const translate = useCallback(
    (text: string) =>
      ctx.adapter.translate(text, {
        from: from ?? ctx.from,
        to: to ?? ctx.to,
        batch: batch ?? ctx.batch,
      }),
    [from, to, ctx]
  );
  return { translate };
}
