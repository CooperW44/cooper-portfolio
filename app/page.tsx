import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    href: "/lacrosse",
    title: "Lacrosse Stats & Achievements",
    desc: "Career statistics, honors, awards, and leadership impact at Utah State (MCLA).",
    accent: "bg-cyan-400",
  },
  {
    href: "/resume",
    title: "Resume",
    desc: "Education, technical skills, projects, and professional experience highlights.",
    accent: "bg-purple-400",
  },
  {
    href: "/family-friends",
    title: "Family & Friends",
    desc: "The support system and values that shaped my mindset and work ethic.",
    accent: "bg-emerald-400",
  },
  {
    href: "/golf-skiing",
    title: "Golf & Skiing",
    desc: "Interests that build focus, discipline, confidence, and balance.",
    accent: "bg-amber-400",
  },
];

export default function HomePage() {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/50 bg-white/95 p-6 shadow-2xl shadow-black/20 md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[320px_1fr]">
            <div className="mx-auto w-full max-w-xs">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/headshot/headshot.jpg"
                    alt="Cooper Williams headshot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-500">
                Personal Portfolio
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                Cooper Williams
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Information Systems graduate focused on web development, full-stack applications,
                and analytics. This site highlights my resume, lacrosse achievements, and the
                experiences that shape how I work and lead.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/cooper-j-williams/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/CooperW44"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  GitHub
                </a>
                <Link
                  href="/resume"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:brightness-110"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`mb-4 h-1.5 w-full rounded-full ${card.accent}`} />
              <h2 className="text-2xl font-semibold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.desc}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-600 group-hover:text-cyan-700">
                Open page →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
