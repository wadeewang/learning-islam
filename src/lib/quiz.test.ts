import { describe, expect, it } from "vitest";
import { quizQuestions, scoreQuiz } from "./quiz";

describe("quizQuestions", () => {
  it("has five questions about 25:54", () => {
    expect(quizQuestions).toHaveLength(5);
  });

  it("keeps every answerIndex inside the option list", () => {
    for (const question of quizQuestions) {
      expect(question.options.length).toBeGreaterThan(1);
      expect(question.answerIndex).toBeGreaterThanOrEqual(0);
      expect(question.answerIndex).toBeLessThan(question.options.length);
    }
  });
});

describe("scoreQuiz", () => {
  it("returns 0 when there are no answers", () => {
    expect(scoreQuiz(quizQuestions, {})).toBe(0);
  });

  it("counts only correct answers", () => {
    const answers = {
      1: quizQuestions[0].answerIndex,
      2: 0,
      3: quizQuestions[2].answerIndex,
    };
    expect(scoreQuiz(quizQuestions, answers)).toBe(2);
  });

  it("returns a perfect score when every answer is correct", () => {
    const answers = Object.fromEntries(
      quizQuestions.map((q) => [q.id, q.answerIndex]),
    );
    expect(scoreQuiz(quizQuestions, answers)).toBe(quizQuestions.length);
  });
});
