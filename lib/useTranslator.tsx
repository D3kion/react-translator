import { useCallback } from "react";

import type { TranslatorProps } from "./types";
import { useTranslatorContext } from "./TranslatorContext";

type TranslateHookFn = (
  text: string | string[]
) => Promise<string | string[] | null>;

export function useTranslator({
  from,
  to,
  batch,
}: Partial<TranslatorProps> = {}) {
  const ctx = useTranslatorContext();
  const translate = useCallback<TranslateHookFn>(
    (text: string | string[]) =>
      ctx.adapter.translate(text as string[], {
        from: from ?? ctx.from,
        to: to ?? ctx.to,
        batch: batch ?? ctx.batch,
      }),
    [from, to, ctx]
  );
  return { translate };
}
