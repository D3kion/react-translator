import {
  Children,
  cloneElement,
  isValidElement,
  useMemo,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from "react";

import type { TranslatorProps } from "./types";
import { isVoidElement } from "./utils";
import { Translate } from "./Translate";

interface TransaltorProps extends PropsWithChildren, Partial<TranslatorProps> {}

export function Translator({
  children,
  from,
  to,
  batch,
}: TransaltorProps): ReactNode {
  const translated = useMemo(
    () => recursivelyTranslate(children, from, to, batch),
    [children, from, to, batch]
  );

  return translated;
}

function recursivelyTranslate(
  node: ReactNode,
  from?: string,
  to?: string,
  batch?: boolean
): ReactNode {
  if (!node || Children.count(node) === 0) {
    return node;
  }

  if (typeof node === "string") {
    if (!node.trim()) return node;
    return <Translate text={node} from={from} to={to} batch={batch} />;
  }

  if (
    Children.count(node) === 0 ||
    isVoidElement(node) ||
    typeof node === "number" ||
    (typeof node === "string" && Number.isFinite(+node))
  ) {
    return node;
  }

  if (isValidElement(node)) {
    //  skip translation if functional component
    //  for scoping of `to` & `from` props in nested components
    //  (also applies to nested <Translator /> and <Translate /> wrappers)
    if (typeof node.type === "function") {
      return node;
    }

    if (
      node.type === "textarea" ||
      node.type === "input" ||
      node.type === "img"
    ) {
      return node;
      // return (
      //   <TranslationInputImg
      //     node={node}
      //     from={from}
      //     to={to}
      //     shouldFallback={shouldFallback}
      //   />
      // );
    }

    const dangerHTML = (node.props as any).dangerouslySetInnerHTML as
      | { __html: string }
      | undefined;
    if (dangerHTML) {
      return (
        <Translate
          text={dangerHTML.__html}
          from={from}
          to={to}
          batch={batch}
          isHTML
        />
      );
    }

    const el = node as ReactElement<PropsWithChildren>;
    return cloneElement(el, {
      children: recursivelyTranslate(
        Children.toArray(el.props.children),
        from,
        to,
        batch
      ),
    });
  }

  return Children.map(node, (child) =>
    recursivelyTranslate(child, from, to, batch)
  );
}
