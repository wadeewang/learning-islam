import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/lessons/25-54", label: "研读经文" },
  { href: "/quiz", label: "测验" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-line bg-card/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          学伊斯兰
        </Link>
        <nav className="flex gap-5 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
