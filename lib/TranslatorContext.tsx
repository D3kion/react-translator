import { createContext, useContext, type PropsWithChildren } from "react";

import type { TranslatorAdapter, TranslatorContextProps } from "./types";
import { detectBrowserLanguage } from "./utils";
import { GoogleAdapter } from "./adapters/google";

const TranslatorContext = createContext<
  TranslatorContextProps<TranslatorAdapter>
>(null!);

export function useTranslatorContext() {
  const ctx = useContext(TranslatorContext);
  if (!ctx) {
    throw new Error(
      "useTranslatorContext must be used within a TranslatorProvider"
    );
  }
  return ctx;
}

export function TranslatorProvider<
  Adapter extends TranslatorAdapter = GoogleAdapter
>({
  children,
  from = "auto",
  to = detectBrowserLanguage(),
  batch = true,
  adapter,
}: PropsWithChildren &
  Partial<Omit<TranslatorContextProps<Adapter>, "adapter">> &
  Pick<TranslatorContextProps<Adapter>, "adapter">) {
  return (
    <TranslatorContext.Provider
      value={{
        from,
        to,
        batch,
        adapter,
      }}
    >
      {children}
    </TranslatorContext.Provider>
  );
}
