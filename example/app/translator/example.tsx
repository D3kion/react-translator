"use client";

import { TranslatorProvider } from "react-translator";
import { GoogleAdapter } from "react-translator/adapters";

import { InlineTranslator } from "./inline";
import { HookTranslator } from "./hook";

export function TranslatorExample() {
  return (
    <TranslatorProvider
      adapter={
        new GoogleAdapter({
          baseURL: "http://localhost:3000",
          from: "en",
          to: "ru",
        })
      }
    >
      <section className="pb-4">
        <h2 className="py-2 text-2xl font-semibold">Hook translator</h2>
        <HookTranslator />
      </section>
      <hr className="my-2" />
      <section className="pb-4">
        <h2 className="py-2 text-2xl font-semibold">Inline translator</h2>
        <InlineTranslator />
      </section>
      <hr className="my-2" />
      <section className="pb-4">
        <h2 className="py-2 text-2xl font-semibold">Document translator</h2>
        {/* <DocumentTranslator /> */}
      </section>
    </TranslatorProvider>
  );
}
