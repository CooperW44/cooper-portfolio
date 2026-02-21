export default function LacrossePage() {
  const statCards = [
    { value: "3x", label: "Team Captain" },
    { value: "USU", label: "Men's Lacrosse" },
    { value: "MCLA", label: "League" },
    { value: "Coach", label: "High School Lacrosse" },
  ];

  const achievements = [
    "Three-time captain demonstrating leadership, accountability, and consistency.",
    "Mentored teammates and helped build a strong team culture.",
    "Coaching experience supporting high school player development and fundamentals.",
    "Built discipline, communication, and resilience through competitive athletics.",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold">Lacrosse Stats & Achievements</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Utah State University Men&apos;s Lacrosse (MCLA) — leadership, competition, and growth on and off the field.
        </p>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
              <p className="text-2xl font-bold">{card.value}</p>
              <p className="mt-1 text-sm text-slate-400">{card.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
          <h2 className="text-2xl font-semibold">Career Highlights</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
