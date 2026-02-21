import Image from "next/image";
import Link from "next/link";

const traits = [
  "Work ethic",
  "Attention to detail",
  "Patience",
  "Adaptability",
  "Competitive mindset",
  "Balance / recovery",
];

export default function GolfSkiingPage() {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/50 bg-white/95 p-8 shadow-2xl shadow-black/15 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-500">
            Interests & Mindset
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Golf & Skiing
          </h1>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Golf and skiing are two of my favorite outlets outside of work and lacrosse.
            They help me recharge, stay competitive, and spend quality time with family.
            Both have also shaped the way I think about discipline, preparation, and confidence.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Photos</h2>
            <span className="text-sm text-slate-500">Golf + skiing</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/golf-skiing/golf1.jpg"
                  alt="Golf photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/golf-skiing/ski1.jpg"
                  alt="Skiing photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">
              Golf / Cherry Hills Country Club
            </h2>

            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Golf has always been something I enjoy, and it became even more meaningful through my work at
                <span> Cherry Hills Country Club</span>.
                I worked on the grounds crew for the past
                <span> three summers (May through August)</span>,
                which gave me a deeper appreciation for the game and everything that goes into maintaining a
                high-level golf course.
              </p>

              <p>
                Grounds crew work is detail-oriented and physically demanding. The job includes mowing,
                trimming, bunker maintenance, course setup, and daily upkeep to make sure the course is
                in top condition. A lot of the work happens early, and consistency matters because small details
                have a big impact on how the course plays and looks.
              </p>

              <p>
                That experience taught me a lot about standards, discipline, and taking pride in doing the small things right.
                It also reinforced how important teamwork is—everyone has a role, and the best results come when the group
                communicates well and executes consistently.
              </p>

              <p>
                I was also an <span>Arnold Palmer Scholarship recipient</span>,
                which is something I am proud of. It reflects the effort and consistency I tried to bring each summer.
              </p>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm text-amber-900">
                  Cherry Hills helped strengthen habits that carry into work: reliability, attention to detail,
                  and showing up prepared every day.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">
              Skiing / Family Trips to Crested Butte
            </h2>

            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Skiing is one of my favorite things to do, especially because it is tied to family time.
                One of our traditions is taking family trips to
                <span> Crested Butte</span> over winter break.
                Those trips are something I always look forward to.
              </p>

              <p>
                It is a chance for everyone to be together, reset, and enjoy time in the mountains.
                Between skiing during the day and hanging out at night, those trips have become some of
                our best memories. They are a great reminder to make time for family and enjoy the moment.
              </p>

              <p>
                I also like skiing because of the mindset it builds. It pushes you to stay confident,
                adapt quickly, and make decisions in changing conditions. Every run is a little different,
                which keeps you focused and helps you trust your preparation.
              </p>

              <p>
                For me, skiing is both fun and a way to recharge. It helps me come back with better energy,
                a clearer head, and a strong balance between work, goals, and personal life.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-blue-900">
                  Skiing reminds me to stay composed, be adaptable, and enjoy the process—skills that help in sports, work, and life.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <h2 className="text-2xl font-semibold text-slate-900">What These Hobbies Build</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Together, golf and skiing have helped me develop discipline, patience, adaptability, and a competitive mindset.
            They also keep me balanced and give me a way to reset so I can perform better in school, work, and athletics.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {traits.map((trait) => (
              <div
                key={trait}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-700"
              >
                {trait}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/family-friends"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Back: Family & Friends
          </Link>
          <Link
            href="/resume"
            className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-bold text-white hover:brightness-110"
          >
            Go to Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

