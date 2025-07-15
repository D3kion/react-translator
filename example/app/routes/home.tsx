import { TranslatorExample } from "~/translator/example";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="container mx-auto pt-16 pb-24">
      <TranslatorExample />
    </main>
  );
}
