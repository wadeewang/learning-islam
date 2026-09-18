"use client";

import { useMemo, useState } from "react";
import { quizQuestions, scoreQuiz } from "@/lib/quiz";

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => scoreQuiz(quizQuestions, answers),
    [answers],
  );
  const allAnswered = Object.keys(answers).length === quizQuestions.length;

  function select(questionId: number, optionIndex: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="flex w-full max-w-2xl flex-col gap-6">
      {quizQuestions.map((q, index) => {
        const selected = answers[q.id];
        return (
          <div
            key={q.id}
            className="rounded-2xl border border-line bg-card p-5 shadow-sm"
          >
            <p className="mb-4 font-medium">
              {index + 1}. {q.question}
            </p>
            <div className="flex flex-col gap-2">
              {q.options.map((option, optionIndex) => {
                const isSelected = selected === optionIndex;
                const isCorrect = optionIndex === q.answerIndex;
                let stateClass = "border-line hover:border-teal";
                if (submitted && isCorrect) {
                  stateClass = "border-teal bg-teal-soft";
                } else if (submitted && isSelected && !isCorrect) {
                  stateClass = "border-red-500 bg-red-50 dark:bg-red-950/40";
                } else if (!submitted && isSelected) {
                  stateClass = "border-teal bg-teal-soft";
                }
                return (
                  <button
                    key={optionIndex}
                    type="button"
                    onClick={() => select(q.id, optionIndex)}
                    aria-pressed={isSelected}
                    className={`rounded-lg border px-4 py-2 text-left text-sm transition-colors ${stateClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-3 text-sm text-muted">{q.explanation}</p>
            )}
          </div>
        );
      })}

      <div className="flex items-center gap-4">
        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="rounded-full bg-teal px-6 py-2 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            提交答案
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-line px-6 py-2 font-medium transition-colors hover:bg-teal-soft"
          >
            再测一次
          </button>
        )}

        {submitted && (
          <p
            data-testid="quiz-result"
            className="text-lg font-semibold"
          >
            得分 {score} / {quizQuestions.length}
          </p>
        )}
      </div>
    </div>
  );
}
