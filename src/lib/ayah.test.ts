import { describe, expect, it } from "vitest";
import { ayah254, formatAyahRef, getLessonBySlug } from "./ayah";

describe("ayah254", () => {
  it("is Furqan 25:54", () => {
    expect(ayah254.surahNumber).toBe(25);
    expect(ayah254.ayahNumber).toBe(54);
    expect(ayah254.slug).toBe("25-54");
  });

  it("keeps the learner paraphrase the user asked about", () => {
    expect(ayah254.paraphraseZh).toBe(
      "他从水上创造人类，并使人们成为亲属",
    );
  });

  it("covers the key kinship words", () => {
    const arabic = ayah254.words.map((word) => word.ar).join(" ");
    expect(arabic).toContain("نَسَبًا");
    expect(arabic).toContain("وَصِهْرًا");
    expect(arabic).toContain("الْمَاءِ");
  });
});

describe("getLessonBySlug", () => {
  it("returns the 25:54 lesson", () => {
    expect(getLessonBySlug("25-54")).toEqual(ayah254);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getLessonBySlug("1-1")).toBeUndefined();
  });
});

describe("formatAyahRef", () => {
  it("formats the Chinese surah name with chapter and verse", () => {
    expect(formatAyahRef(ayah254)).toBe("准则章 25:54");
  });
});
