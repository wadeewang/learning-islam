import Link from "next/link";

const lessons = [
  {
    title: "The Five Pillars",
    description:
      "Shahada, Salah, Zakat, Sawm, and Hajj — the foundations of Muslim practice.",
  },
  {
    title: "The Qur'an",
    description:
      "An introduction to the central religious text of Islam and how it is recited.",
  },
  {
    title: "Daily Prayers",
    description:
      "The five daily prayers, their timings, and their place in a Muslim's day.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-16 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-12">
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Learning Islam
          </h1>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Explore short lessons on the fundamentals of Islam, then test your
            understanding with an interactive quiz.
          </p>
          <div>
            <Link
              href="/quiz"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Take the quiz
            </Link>
          </div>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Lessons
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {lessons.map((lesson) => (
              <article
                key={lesson.title}
                className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900"
              >
                <h3 className="mb-2 font-medium text-black dark:text-zinc-50">
                  {lesson.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {lesson.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
