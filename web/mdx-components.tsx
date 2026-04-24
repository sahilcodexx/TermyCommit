import type { ComponentType } from "react";
import { H1, H2, H3, P, Code, Pre, Ul, Ol, Li, A, Blockquote } from "@/components/docs/mdx-elements";

type MDXComponentMap = {
  [key: string]: ComponentType<any>;
};

export function useMDXComponents(components: MDXComponentMap): MDXComponentMap {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    code: Code,
    pre: Pre,
    ul: Ul,
    ol: Ol,
    li: Li,
    a: A,
    blockquote: Blockquote,
    ...components,
  };
}
