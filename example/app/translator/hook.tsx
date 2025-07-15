import { useEffect, useState } from "react";
import { useTranslator } from "react-translator";

const content = ["First testing", "Second testing", "Third testing"];

export function HookTranslator() {
  const { translate } = useTranslator();
  const [translation, setTranslation] = useState<string[]>([]);

  useEffect(() => {
    translate(content).then((res) => {
      if (!res) return;
      setTranslation(res as string[]);
    });
  }, []);

  return (
    <div>
      {(!translation.length ? content : translation).map((x) => (
        <div key={x}>{x}</div>
      ))}
    </div>
  );
}
