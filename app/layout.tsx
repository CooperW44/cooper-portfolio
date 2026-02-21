import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cooper Williams Portfolio",
  description: "Portfolio website for Cooper Williams",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lacrosse", label: "Lacrosse" },
  { href: "/resume", label: "Resume" },
  { href: "/family-friends", label: "Family & Friends" },
  { href: "/golf-skiing", label: "Golf & Skiing" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 border-b border-slate-700/40 bg-slate-800/85 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
                <Link href="/" className="text-lg font-bold tracking-tight text-white">
                  <span className="text-cyan-300">Cooper</span>{" "}
                  <span className="text-blue-200">Williams</span>
                </Link>

                <nav className="flex flex-wrap gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl border border-slate-600 bg-slate-700/50 px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="mt-16 border-t border-slate-300/40 bg-white/90">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-slate-900">Cooper Williams</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Information Systems graduate focused on web development, analytics, and leadership.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Quick Links</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs text-slate-500">Built with Next.js + Tailwind CSS</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
