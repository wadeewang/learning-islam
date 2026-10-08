import { describe, expect, it } from "vitest";
import { scoreQuiz } from "./quiz";
import { dancong, dancongQuizQuestions, getTeaLesson } from "./tea";

describe("dancong", () => {
  it("is Phoenix Dancong from Chaozhou", () => {
    expect(dancong.slug).toBe("dancong");
    expect(dancong.title).toContain("凤凰单丛");
    expect(dancong.origin).toContain("潮州");
    expect(dancong.villages).toContain("乌岽村");
  });

  it("lists yashixiang as honeysuckle aroma", () => {
    const yashi = dancong.aromas.find((aroma) => aroma.alsoCalled === "鸭屎香");
    expect(yashi?.name).toBe("银花香");
  });

  it("separates Wuyi phoenix-egg tea from Dancong", () => {
    expect(dancong.confuseWith.body).toContain("武夷");
    expect(dancong.confuseWith.body).toContain("草药");
  });
});

describe("getTeaLesson", () => {
  it("returns the dancong lesson", () => {
    expect(getTeaLesson("dancong")).toEqual(dancong);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getTeaLesson("longjing")).toBeUndefined();
  });
});

describe("dancongQuizQuestions", () => {
  it("has five questions with valid answers", () => {
    expect(dancongQuizQuestions).toHaveLength(5);
    for (const question of dancongQuizQuestions) {
      expect(question.answerIndex).toBeGreaterThanOrEqual(0);
      expect(question.answerIndex).toBeLessThan(question.options.length);
    }
  });

  it("scores a perfect paper", () => {
    const answers = Object.fromEntries(
      dancongQuizQuestions.map((q) => [q.id, q.answerIndex]),
    );
    expect(scoreQuiz(dancongQuizQuestions, answers)).toBe(5);
  });
});
