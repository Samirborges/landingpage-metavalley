"use client";
import { motion } from "framer-motion";

type SplitTextProps = {
  text: string;
  gradientPhrases?: Record<string, string>;
};

const buildTextSegments = (
  text: string,
  gradientPhrases: Record<string, string> = {},
) => {
  const phrases = Object.keys(gradientPhrases).sort(
    (a, b) => b.length - a.length,
  );
  const segments: Array<{ text: string; gradientClass?: string }> = [];
  let cursor = 0;

  while (cursor < text.length) {
    let nextMatch: {
      index: number;
      phrase: string;
      gradientClass: string;
    } | null = null;

    for (const phrase of phrases) {
      const index = text.indexOf(phrase, cursor);
      if (index === -1) continue;
      if (!nextMatch || index < nextMatch.index) {
        nextMatch = {
          index,
          phrase,
          gradientClass: gradientPhrases[phrase],
        };
      }
    }

    if (!nextMatch) {
      segments.push({ text: text.slice(cursor) });
      break;
    }

    if (nextMatch.index > cursor) {
      segments.push({ text: text.slice(cursor, nextMatch.index) });
      cursor = nextMatch.index;
    }

    segments.push({
      text: nextMatch.phrase,
      gradientClass: nextMatch.gradientClass,
    });
    cursor += nextMatch.phrase.length;
  }

  return segments;
};

export const SplitText = ({ text, gradientPhrases }: SplitTextProps) => {
  const segments = buildTextSegments(text, gradientPhrases);
  const words = segments.flatMap((segment) =>
    segment.text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({
        word,
        gradientClass: segment.gradientClass,
      })),
  );

  return (
    <h1 className="text-4xl md:text-3xl font-bold leading-tight overflow-hidden flex flex-wrap gap-x-3">
      {words.map((token, i) => (
        <motion.span
          key={`${token.word}-${i}`}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
          className={`inline-block ${token.gradientClass ?? ""}`}
        >
          {token.word}
        </motion.span>
      ))}
    </h1>
  );
};
