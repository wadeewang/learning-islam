import Link from "next/link";
import { dancong } from "@/lib/tea";

export default function DancongLessonPage() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-12">
      <article className="flex w-full max-w-3xl flex-col gap-10">
        <div>
          <Link href="/" className="text-sm text-teal hover:underline">
            ← 回到首页
          </Link>
          <p className="mt-4 text-sm font-medium tracking-wide text-gold">
            {dancong.category} · {dancong.subtitle}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {dancong.title}
          </h1>
          <p className="mt-4 text-[17px] leading-8 text-muted">
            {dancong.summary}
          </p>
        </div>

        <section className="rounded-3xl border border-line bg-card px-6 py-8 sm:px-10">
          <p className="text-sm text-gold">产地</p>
          <p className="mt-2 text-xl font-semibold">{dancong.origin}</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            高山村寨：{dancong.villages.join("、")}
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">先把名字说清</h2>
          <div className="grid gap-4">
            {dancong.points.map((point) => (
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
          <h2 className="text-xl font-semibold">常见香型</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {dancong.aromas.map((aroma) => (
              <article
                key={aroma.name}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <h3 className="font-semibold">
                  {aroma.name}
                  {aroma.alsoCalled ? (
                    <span className="ml-2 text-sm font-normal text-gold">
                      俗称{aroma.alsoCalled}
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{aroma.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">从鲜叶到干茶</h2>
          <ol className="grid gap-3">
            {dancong.steps.map((step, index) => (
              <li
                key={step.name}
                className="rounded-2xl border border-line bg-card px-6 py-4"
              >
                <p className="text-sm text-gold">
                  {index + 1}. {step.name}
                </p>
                <p className="mt-1 text-[15px] leading-7">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl border border-line bg-card p-6">
          <h2 className="text-xl font-semibold">{dancong.confuseWith.title}</h2>
          <p className="mt-2 text-[15px] leading-7 text-muted">
            {dancong.confuseWith.body}
          </p>
        </section>

        <p className="text-xs leading-6 text-muted">
          产地与工艺依据潮州府志记载、潮安凤凰单丛茶文化系统及公开的乌岽单丛茶标准整理，供辨认和学习，不是品鉴或购买建议。
        </p>

        <Link
          href="/quiz/dancong"
          className="inline-flex h-11 w-fit items-center rounded-full bg-teal px-6 font-medium text-white transition-opacity hover:opacity-90"
        >
          用测验检查理解
        </Link>
      </article>
    </div>
  );
}
