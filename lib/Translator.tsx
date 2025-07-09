import type { PropsWithChildren } from "react";
import type { TranslatorProps } from "./types";

// import React, {
//   JSX,
//   useMemo,
//   ReactNode,
//   ReactElement,
//   Children,
//   cloneElement,
//   isValidElement,
// } from 'react';

// import isVoidElement from '../utils/isVoidElement';

// import Translation from './helpers/Translation';
// import TranslationInputImg from './helpers/TranslationInputImage';

export function Translator({}: PropsWithChildren & Partial<TranslatorProps>) {
  //  memoised to eliminate unnecessary re-renders
  // const translatedChildren = useMemo(() => (
  //   recursivelyTranslate(
  //     <>{children}</>,
  //     from,
  //     to,
  //     shouldFallback,
  //   )
  // ), [children, from, to, shouldFallback]);

  return "todo";
}

// const recursivelyTranslate = (
//   node: ReactNode,
//   from?: language,
//   to?: language,
//   shouldFallback?: boolean,
// ): ReactNode => {
//   if ((typeof node === 'string' && !node)) return node;

//   if (typeof node === 'string') {
//     return (
//       <Translation
//         text={node}
//         from={from}
//         to={to}
//         shouldFallback={shouldFallback}
//       />
//     );
//   }

//   if (Children.count(node) === 0 || isVoidElement(node) || typeof node === 'number') {
//     return (
//       <>
//         &nbsp;
//         {node}
//         &nbsp;
//       </>
//     );
//   }

//   if (isValidElement(node)) {
//     //  skip translation if functional component
//     //  for scoping of `to` & `from` props in nested components
//     //  (also applies to nested <Translator /> and <Translate /> wrappers)
//     if (typeof node.type === 'function') return node;

//     if (node.type === 'textarea' || node.type === 'input' || node.type === 'img') {
//       return (
//         <TranslationInputImg
//           node={node}
//           from={from}
//           to={to}
//           shouldFallback={shouldFallback}
//         />
//       );
//     }

//     return cloneElement(node as ReactElement, {
//       children: (
//         recursivelyTranslate(Children.toArray(node.props.children), from, to, shouldFallback)
//       ),
//     });
//   }

//   return Children.map(node, (child) => recursivelyTranslate(child, from, to, shouldFallback));
// };
