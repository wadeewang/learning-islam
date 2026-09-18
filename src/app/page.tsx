import Link from "next/link";
import { ayah254, formatAyahRef } from "@/lib/ayah";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-14">
      <main className="flex w-full max-w-4xl flex-col gap-12">
        <section className="rounded-3xl border border-line bg-card px-6 py-10 shadow-sm sm:px-12">
          <p className="text-sm font-medium tracking-wide text-gold">
            {formatAyahRef(ayah254)} · {ayah254.surahNameEn}
          </p>
          <p
            dir="rtl"
            className="mt-6 font-arabic text-3xl leading-relaxed sm:text-4xl"
          >
            {ayah254.arabic}
          </p>
          <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            {ayah254.paraphraseZh}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            {ayah254.translationZh}
            <span className="ml-2 text-sm">（{ayah254.translationZhSource}）</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/lessons/25-54"
              className="inline-flex h-11 items-center rounded-full bg-teal px-6 font-medium text-white transition-opacity hover:opacity-90"
            >
              研读这节经文
            </Link>
            <Link
              href="/quiz"
              className="inline-flex h-11 items-center rounded-full border border-line px-6 font-medium transition-colors hover:bg-teal-soft"
            >
              自我检测
            </Link>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-line bg-card p-6">
            <p className="font-arabic text-2xl">نَسَب</p>
            <h2 className="mt-2 text-xl font-semibold">血亲</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              由出生与血统结成的亲属：为人子女、为人父母、兄弟姊妹。人首先进入的，是这条血缘之链。
            </p>
          </article>
          <article className="rounded-2xl border border-line bg-card p-6">
            <p className="font-arabic text-2xl">صِهْر</p>
            <h2 className="mt-2 text-xl font-semibold">姻亲</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              由婚姻结成的亲属：岳父母、女婿、亲家。两条纽带一起，使人与人成为亲属。
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
