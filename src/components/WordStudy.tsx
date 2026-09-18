"use client";

import { useState } from "react";
import type { Word } from "@/lib/ayah";

export default function WordStudy({ words }: { words: Word[] }) {
  const [active, setActive] = useState(0);
  const current = words[active];

  return (
    <div className="flex flex-col gap-5">
      <div
        dir="rtl"
        className="flex flex-wrap justify-center gap-2 font-arabic text-3xl leading-relaxed sm:text-4xl"
      >
        {words.map((word, index) => {
          const isActive = index === active;
          return (
            <button
              key={`${word.ar}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={isActive}
              className={`rounded-lg px-2 py-1 transition-colors ${
                isActive
                  ? "bg-teal text-white"
                  : "hover:bg-teal-soft"
              }`}
            >
              {word.ar}
            </button>
          );
        })}
      </div>

      {current && (
        <div
          data-testid="word-detail"
          className="rounded-xl border border-line bg-teal-soft px-5 py-4 text-center"
        >
          <p className="font-arabic text-3xl">{current.ar}</p>
          <p className="mt-1 text-sm text-muted">{current.transliteration}</p>
          <p className="mt-3 text-lg font-medium">{current.zh}</p>
          <p className="text-sm text-muted">{current.en}</p>
        </div>
      )}
    </div>
  );
}
