# learning-islam

A small web app for learning the fundamentals of Islam through short lessons and
an interactive quiz. Built with [Next.js](https://nextjs.org) (App Router),
TypeScript, and Tailwind CSS.

## Getting started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server (http://localhost:3000) |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run the unit tests (Vitest) |

## Structure

- `src/app/page.tsx` — home page with lessons and a link to the quiz
- `src/app/quiz/page.tsx` — the quiz page
- `src/components/Quiz.tsx` — interactive quiz client component
- `src/lib/quiz.ts` — quiz questions and the pure `scoreQuiz` scoring function
- `src/lib/quiz.test.ts` — unit tests for the scoring logic
