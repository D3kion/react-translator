"use client";

import { TranslatorProvider } from "react-translator";
import { GoogleAdapter } from "react-translator/adapters";

import { InlineTranslator } from "~/translator/inline";
// import { DocumentTranslator } from "~/translator/document";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="hidden">{}</div>
      <h1>React Translator example</h1>
      <TranslatorProvider
        adapter={new GoogleAdapter({ tld: "ru", rejectOnPartialFail: false })}
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
    </main>
  );
}
