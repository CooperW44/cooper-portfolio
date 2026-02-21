import Image from "next/image";
import Link from "next/link";

const seasonStats = [
  { season: "2025", number: "1", gp: 18, gb: 49, sh: 140, g: 62, a: 48 },
  { season: "2024", number: "1", gp: 14, gb: 20, sh: 8, g: 36, a: 23 },
  { season: "2023", number: "3", gp: 5, gb: 20, sh: 33, g: 21, a: 7 },
  { season: "2022", number: "3", gp: 12, gb: 13, sh: 55, g: 23, a: 16 },
];

const awards = {
  "2025": [
    "1st Team All-America Attack",
    "1st Team All-Conference Attack",
    "Offensive Player of the Year",
    "Scholar Athlete",
  ],
  "2024": ["2nd Team All-Conference Attack", "Warrior Player of the Week '24"],
  "2023": ["2nd Team All-Conference Attack"],
  "2022": [
    "1st Team All-Conference Attack",
    "Honorable Mention All-America Attack",
    "Rookie of the Year",
  ],
};

export default function LacrossePage() {
  const totals = seasonStats.reduce(
    (acc, s) => {
      acc.gp += s.gp; acc.gb += s.gb; acc.sh += s.sh; acc.g += s.g; acc.a += s.a;
      return acc;
    },
    { gp: 0, gb: 0, sh: 0, g: 0, a: 0 }
  );

  const points = totals.g + totals.a;
  const ppg = (points / totals.gp).toFixed(2);
  const gpg = (totals.g / totals.gp).toFixed(2);
  const apg = (totals.a / totals.gp).toFixed(2);

  const s2025 = seasonStats.find((s) => s.season === "2025");
  const p2025 = s2025 ? s2025.g + s2025.a : 0;
  const ppg2025 = s2025 ? (p2025 / s2025.gp).toFixed(2) : "0.00";

  return (
    <section className="px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/50 bg-white/95 p-8 shadow-2xl shadow-black/15 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-500">
                Utah State University Men&apos;s Lacrosse • MCLA
              </p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
                Lacrosse Stats & Achievements
              </h1>
              <p className="mt-4 leading-7 text-slate-600">
                Attack • Senior • Information Systems major. Career statistics, awards, and
                leadership impact from Utah State lacrosse.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Position", "Attack"],
                ["Hometown", "Baltimore, MD"],
                ["Height / Weight", "5'11\" / 175 lbs"],
                ["High School", "Legend High School"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-1 font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Lacrosse Photos</h2>
            <span className="text-sm text-slate-500">Game / action shots</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/lacrosse/lacrosse1.png" alt="Lacrosse photo 1" fill className="object-cover" />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/lacrosse/lacrosse2.jpg" alt="Lacrosse photo 2" fill className="object-cover object-[center_20%]" />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Career GP", totals.gp, "from-cyan-500 to-blue-500"],
            ["Career Goals", totals.g, "from-blue-500 to-indigo-500"],
            ["Career Assists", totals.a, "from-purple-500 to-pink-500"],
            ["Career Points", points, "from-emerald-500 to-teal-500"],
          ].map(([label, value, gradient]) => (
            <div key={label as string} className="rounded-2xl border border-white/50 bg-white/95 p-5 shadow-lg shadow-black/10">
              <div className={`mb-3 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10 xl:col-span-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">Career Statistics by Season</h2>
              <a
                href="https://mcla.us/players/cooper-williams-265e6d"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-cyan-600 hover:text-cyan-700"
              >
                Source profile ↗
              </a>
            </div>

            <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-3 py-3">Season</th>
                    <th className="px-3 py-3">#</th>
                    <th className="px-3 py-3">GP</th>
                    <th className="px-3 py-3">GB</th>
                    <th className="px-3 py-3">SH</th>
                    <th className="px-3 py-3">G</th>
                    <th className="px-3 py-3">A</th>
                    <th className="px-3 py-3">Points</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {seasonStats.map((s) => {
                    const pts = s.g + s.a;
                    return (
                      <tr key={s.season} className="border-t border-slate-100">
                        <td className="px-3 py-3 font-semibold text-slate-900">{s.season}</td>
                        <td className="px-3 py-3 text-slate-700">{s.number}</td>
                        <td className="px-3 py-3 text-slate-700">{s.gp}</td>
                        <td className="px-3 py-3 text-slate-700">{s.gb}</td>
                        <td className="px-3 py-3 text-slate-700">{s.sh}</td>
                        <td className="px-3 py-3 text-slate-700">{s.g}</td>
                        <td className="px-3 py-3 text-slate-700">{s.a}</td>
                        <td className="px-3 py-3 font-bold text-cyan-700">{pts}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">Performance Snapshot</h2>
            <div className="mt-4 space-y-3">
              {[
                ["Career PPG", ppg, "bg-cyan-50 border-cyan-200"],
                ["Career GPG", gpg, "bg-blue-50 border-blue-200"],
                ["Career APG", apg, "bg-purple-50 border-purple-200"],
                ["2025 PPG", ppg2025, "bg-emerald-50 border-emerald-200"],
              ].map(([label, value, cls]) => (
                <div key={label as string} className={`rounded-xl border p-4 ${cls}`}>
                  <p className="text-sm text-slate-600">{label}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
                </div>
              ))}
              <p className="text-xs text-slate-500">{p2025} points in {s2025?.gp ?? 0} games during 2025</p>
            </div>
          </section>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">Awards & Honors</h2>
            <div className="mt-5 space-y-4">
              {Object.entries(awards).map(([year, list]) => (
                <div key={year} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-900">{year}</h3>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {list.map((award) => (
                      <li key={award} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">What These Stats Say</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                My production increased across my career and peaked in 2025 with
                <span className="font-semibold text-slate-900"> 62 goals and 48 assists</span>,
                showing both scoring and playmaking ability as an attackman.
              </p>
              <p>
                Across four seasons, I recorded
                <span className="font-semibold text-slate-900"> {points} total points</span>
                {" "}({totals.g} goals, {totals.a} assists) in {totals.gp} games, averaging
                <span className="font-semibold text-slate-900"> {ppg} points per game</span>.
              </p>
              <p>
                Honors like All-America, All-Conference, Offensive Player of the Year,
                and Scholar Athlete reflect performance, consistency, and discipline.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/resume" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-bold text-white hover:brightness-110">
                View Resume
              </Link>
              <Link href="/golf-skiing" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Next: Golf & Skiing
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}


