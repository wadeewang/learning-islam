import Link from "next/link";
import WordStudy from "@/components/WordStudy";
import { ayah254, formatAyahRef } from "@/lib/ayah";

export default function Lesson2554Page() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-12">
      <article className="flex w-full max-w-3xl flex-col gap-10">
        <div>
          <Link href="/" className="text-sm text-teal hover:underline">
            ← 回到首页
          </Link>
          <p className="mt-4 text-sm font-medium tracking-wide text-gold">
            {formatAyahRef(ayah254)} · {ayah254.surahNameAr}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {ayah254.paraphraseZh}
          </h1>
        </div>

        <section className="rounded-3xl border border-line bg-card px-6 py-8 sm:px-10">
          <p
            dir="rtl"
            className="font-arabic text-3xl leading-[2] sm:text-4xl"
          >
            {ayah254.arabic}
          </p>
          <div className="mt-8 space-y-4 text-[17px] leading-8">
            <p>
              {ayah254.translationZh}
              <span className="ml-2 text-sm text-muted">
                {ayah254.translationZhSource}
              </span>
            </p>
            <p className="text-muted">
              {ayah254.translationEn}
              <span className="ml-2 text-sm">{ayah254.translationEnSource}</span>
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">逐词学习</h2>
          <p className="text-sm text-muted">点按阿拉伯语单词，查看中文与英文意思。</p>
          <div className="rounded-2xl border border-line bg-card p-6">
            <WordStudy words={ayah254.words} />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">理解这节经文</h2>
          <div className="grid gap-4">
            {ayah254.points.map((point) => (
              <section
                key={point.title}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">
                  {point.body}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">相关经文</h2>
          <div className="grid gap-4">
            {ayah254.related.map((ayah) => (
              <section
                key={ayah.ref}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <p className="text-sm font-medium text-gold">{ayah.ref}</p>
                <p dir="rtl" className="mt-3 font-arabic text-2xl leading-relaxed">
                  {ayah.ar}
                </p>
                <p className="mt-3 leading-7">{ayah.zh}</p>
                <p className="mt-1 text-sm text-muted">{ayah.en}</p>
              </section>
            ))}
          </div>
        </section>

        <p className="text-xs leading-6 text-muted">
          中文译文引自马坚译本，英文译文引自 Sahih International。讲解综合伊本·凯西尔等经典经注的通行理解，供学习参考。
        </p>

        <Link
          href="/quiz"
          className="inline-flex h-11 w-fit items-center rounded-full bg-teal px-6 font-medium text-white transition-opacity hover:opacity-90"
        >
          用测验检查理解
        </Link>
      </article>
    </div>
  );
}
