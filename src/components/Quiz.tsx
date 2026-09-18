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
            className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900"
          >
            <p className="mb-4 font-medium text-black dark:text-zinc-50">
              {index + 1}. {q.question}
            </p>
            <div className="flex flex-col gap-2">
              {q.options.map((option, optionIndex) => {
                const isSelected = selected === optionIndex;
                const isCorrect = optionIndex === q.answerIndex;
                let stateClass =
                  "border-black/10 hover:border-emerald-500 dark:border-white/15";
                if (submitted && isCorrect) {
                  stateClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950";
                } else if (submitted && isSelected && !isCorrect) {
                  stateClass = "border-red-500 bg-red-50 dark:bg-red-950";
                } else if (!submitted && isSelected) {
                  stateClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950";
                }
                return (
                  <button
                    key={optionIndex}
                    type="button"
                    onClick={() => select(q.id, optionIndex)}
                    aria-pressed={isSelected}
                    className={`rounded-lg border px-4 py-2 text-left text-sm transition-colors text-black dark:text-zinc-50 ${stateClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {q.explanation}
              </p>
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
            className="rounded-full bg-emerald-600 px-6 py-2 font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit answers
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-black/15 px-6 py-2 font-medium text-black transition-colors hover:bg-black/5 dark:border-white/20 dark:text-zinc-50 dark:hover:bg-white/10"
          >
            Try again
          </button>
        )}

        {submitted && (
          <p
            data-testid="quiz-result"
            className="text-lg font-semibold text-black dark:text-zinc-50"
          >
            You scored {score} / {quizQuestions.length}
          </p>
        )}
      </div>
    </div>
  );
}
