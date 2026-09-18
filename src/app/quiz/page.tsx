import Link from "next/link";
import Quiz from "@/components/Quiz";

export default function QuizPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-16 dark:bg-black">
      <div className="mb-8 flex w-full max-w-2xl flex-col gap-2">
        <Link
          href="/"
          className="text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400"
        >
          ← Back to lessons
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Fundamentals Quiz
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Answer each question, then submit to see your score and explanations.
        </p>
      </div>
      <Quiz />
    </div>
  );
}
