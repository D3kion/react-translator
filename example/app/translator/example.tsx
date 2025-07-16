"use client";

import { TranslatorProvider } from "react-translator";
import { BaseAdapter } from "react-translator/adapters";

import { HookTranslator } from "./hook";
import { InlineTranslator } from "./inline";
import { DocumentTranslator } from "./document";
import { HTMLTranslator } from "./html";

export function TranslatorExample() {
  return (
    <TranslatorProvider
      adapter={
        new BaseAdapter({
          baseURL: "http://localhost:3000",
          from: "en",
          to: "ru",
          batchSize: 100,
          batchTimeout: 100,
          chunkSize: 5000,
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
        <DocumentTranslator />
      </section>
      <section className="pb-4">
        <h2 className="py-2 text-2xl font-semibold">HTML translator</h2>
        <HTMLTranslator />
      </section>
    </TranslatorProvider>
  );
}
