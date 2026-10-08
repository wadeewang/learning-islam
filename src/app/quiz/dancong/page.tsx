import Link from "next/link";
import Quiz from "@/components/Quiz";
import { dancongQuizQuestions } from "@/lib/tea";

export default function DancongQuizPage() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-12">
      <div className="mb-8 flex w-full max-w-2xl flex-col gap-2">
        <Link
          href="/lessons/dancong"
          className="text-sm text-teal hover:underline"
        >
          ← 回到单丛茶
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">
          凤凰单丛茶叶测验
        </h1>
        <p className="text-muted">回答全部题目后提交，查看得分与讲解。</p>
      </div>
      <Quiz questions={dancongQuizQuestions} />
    </div>
  );
}
