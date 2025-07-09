"use client";

import { TranslatorProvider } from "react-translator";
import { GoogleAdapter } from "react-translator/adapters";

import { InlineTranslator } from "./inline";

export function TranslatorExample() {
  return (
    <TranslatorProvider
      batch={false}
      adapter={
        new GoogleAdapter({
          rejectOnPartialFail: false,
          // forceBatch: false,
        })
      }
    >
      <section>
        <h2>Inline translator</h2>
        <InlineTranslator />
      </section>
      {/* <section>
        <h2>Document translator</h2>
        <DocumentTranslator />
      </section> */}
    </TranslatorProvider>
  );
}
