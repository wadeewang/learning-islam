<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- This is a Next.js 16 (App Router) + TypeScript + Tailwind app managed with `pnpm`. The update script runs `pnpm install`, so dependencies are already installed when a session starts.
- Standard commands live in `package.json` scripts (see `README.md`): `pnpm dev` (dev server on port 3000), `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm test` (Vitest).
- `pnpm dev` uses Turbopack and serves on http://localhost:3000. It hot-reloads edits to files under `src/`; no restart needed for normal code changes.
- Fonts are loaded via `next/font/google` (Noto Sans SC and Amiri), so the first dev/build compile fetches from Google Fonts and requires outbound network. If that egress is blocked, switch to a system font stack in `src/app/layout.tsx`.
- Unit tests (`pnpm test`) cover pure logic and lesson data (`src/lib/quiz.ts`, `src/lib/ayah.ts`). Interactive flows are best verified in the browser: `/` (home), `/lessons/25-54` (word study), and `/quiz`.
- The UI is Chinese-first. The first lesson is Qur'an 25:54 (Al-Furqan / 准则章).
