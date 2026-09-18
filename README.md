# learning-islam

一个用短课和测验学习伊斯兰的小站。当前第一课是《古兰经》**准则章 25:54**：

> 他从水上创造人类，并使人们成为亲属

站点用 [Next.js](https://nextjs.org)（App Router）、TypeScript 和 Tailwind CSS 写成，界面以中文为主，并附阿拉伯原文与英文译文。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动开发服务器（http://localhost:3000） |
| `pnpm build` | 生产构建 |
| `pnpm start` | 运行生产构建 |
| `pnpm lint` | 运行 ESLint |
| `pnpm test` | 运行单元测试（Vitest） |

## 结构

- `src/app/page.tsx` — 首页，展示 25:54 与血亲 / 姻亲
- `src/app/lessons/25-54/page.tsx` — 经文研读：译文、逐词、讲解、相关经文
- `src/app/quiz/page.tsx` — 围绕这节经文的测验
- `src/components/WordStudy.tsx` — 可点按的逐词学习
- `src/components/Quiz.tsx` — 测验交互
- `src/lib/ayah.ts` — 经文数据
- `src/lib/quiz.ts` — 题目与 `scoreQuiz`

中文译文引自马坚译本，英文译文引自 Sahih International。讲解综合伊本·凯西尔等经典经注的通行理解，供学习参考。
