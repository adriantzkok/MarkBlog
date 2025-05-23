import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayCurrentLocale(locale: string) {
  switch (locale) {
    case "en-US":
      return "A";
    case "ja":
      return "あ";
    case "zh-CN":
      return "简";
    case "zh-TW":
      return "繁";
  }
}

export async function parseMarkdown(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(remarkGfm)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .use(rehypeSanitize)
    .use(rehypeMathjax)
    .process(markdown);

  return result;
}
