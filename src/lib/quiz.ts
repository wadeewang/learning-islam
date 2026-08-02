export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How many pillars of Islam are there?",
    options: ["Three", "Five", "Seven", "Ten"],
    answerIndex: 1,
    explanation:
      "There are five pillars: Shahada, Salah, Zakat, Sawm, and Hajj.",
  },
  {
    id: 2,
    question: "What is the holy book of Islam called?",
    options: ["The Torah", "The Gospel", "The Qur'an", "The Vedas"],
    answerIndex: 2,
    explanation:
      "The Qur'an is the central religious text of Islam, believed to be a revelation from God.",
  },
  {
    id: 3,
    question: "In which month do Muslims fast from dawn to sunset?",
    options: ["Rajab", "Sha'ban", "Ramadan", "Muharram"],
    answerIndex: 2,
    explanation:
      "Fasting during the month of Ramadan (Sawm) is the fourth pillar of Islam.",
  },
  {
    id: 4,
    question: "How many times a day do Muslims perform obligatory prayers?",
    options: ["Three", "Five", "Six", "Two"],
    answerIndex: 1,
    explanation:
      "Muslims perform five daily prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha.",
  },
];

/**
 * Counts how many answers are correct. `answers` maps a question id to the
 * selected option index; unanswered questions are simply not present.
 */
export function scoreQuiz(
  questions: QuizQuestion[],
  answers: Record<number, number>,
): number {
  return questions.reduce((score, q) => {
    return answers[q.id] === q.answerIndex ? score + 1 : score;
  }, 0);
}
