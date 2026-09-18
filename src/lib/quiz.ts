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
    question: "「他从水上创造人类，并使人们成为亲属」对应《古兰经》哪一节？",
    options: ["黄牛章 2:255", "准则章 25:54", "开端章 1:1", "夜行章 17:1"],
    answerIndex: 1,
    explanation: "这是准则章（الفرقان / Al-Furqan）第 54 节。",
  },
  {
    id: 2,
    question: "这节经文里的「نَسَب」主要指哪种关系？",
    options: ["朋友往来", "血缘亲属", "商业合伙", "同乡邻里"],
    answerIndex: 1,
    explanation: "نَسَب 是由出生、血统结成的亲属，即血亲。",
  },
  {
    id: 3,
    question: "这节经文里的「صِهْر」主要指哪种关系？",
    options: ["师生传授", "战场同盟", "通过婚姻结成的姻亲", "主仆契约"],
    answerIndex: 2,
    explanation: "صِهْر 是由婚姻结成的亲属，如岳父母、女婿、亲家。",
  },
  {
    id: 4,
    question: "马坚译本把这节里的「الْمَاءِ」译作什么？",
    options: ["雨水", "河水", "海水", "精水"],
    answerIndex: 3,
    explanation:
      "马坚译作「精水」。经注常把它理解为创造人的精液；《古兰经》也在别处说一切活物由水造成。",
  },
  {
    id: 5,
    question: "这节经文以哪句话收束？",
    options: [
      "你的主是全能的",
      "真主是至赦的",
      "真主是全聪的",
      "真主是至睿的",
    ],
    answerIndex: 0,
    explanation: "原文是 وَكَانَ رَبُّكَ قَدِيرًا：你的主是全能的。",
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
