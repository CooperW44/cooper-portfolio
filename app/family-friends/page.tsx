import Image from "next/image";
import Link from "next/link";

const values = [
  "Loyalty and consistency",
  "Accountability",
  "Respect and communication",
  "Showing up for others",
  "Gratitude",
  "Work ethic",
];

export default function FamilyFriendsPage() {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/50 bg-white/95 p-8 shadow-2xl shadow-black/15 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-500">
            Personal Foundation
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Family & Friends
          </h1>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            My family and close friends have shaped my mindset, values, and work ethic.
            They are a major reason I approach life with gratitude, competitiveness, and
            the desire to keep improving.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Photos</h2>
            <span className="text-sm text-slate-500">Family / friends moments</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/family/family1.jpg"
                  alt="Family photo 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/family/family2.jpg"
                  alt="Family photo 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">My Family</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                I come from a family of <span>six</span>.
                I have <span>one sister and two brothers</span>,
                and I am the <span>youngest of the four siblings</span>.
                I am also an <span>uncle of four</span>, which has
                been one of the coolest parts of getting older.
              </p>
              <p>
                As I reflect on my life, I realize how much my family has done for me.
                They have always been supportive, encouraging, and present through the ups and downs.
                I appreciate them a lot, and I do not take that support for granted.
              </p>
              <p>
                My family has always loved doing things together. We enjoy activities like hiking,
                skiing, and traveling, and a lot of my favorite memories come from those experiences.
                Looking back, I had an amazing childhood, and I did not fully realize how special it was until I got older.
              </p>
              <p>
                My mom and dad did a great job making sure we were always having fun and enjoying life.
                They created an environment where we could work hard, compete, and still have a lot of fun together.
                That balance is something I try to carry into my own life now.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">Beach Life in Maryland</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Growing up in Maryland, we had a beach house that was about
                <span> three hours from home</span> and only
                <span> about ten minutes from the beach</span>.
                Some of my best memories come from those trips.
              </p>
              <p>
                We had two jet skis and would go tubing whenever we were down there.
                Family members would each bring a couple of friends, and the house would fill up fast.
                A typical trip could have around <span>15 people</span>
                {" "}there, which made it loud, competitive, and a lot of fun.
              </p>
              <p>
                We spent our days playing wiffleball, golf, card games, and hanging out together.
                At night, we would head to the boardwalk. One of everyone&apos;s favorite stops was
                <span> Thrasher&apos;s fries</span>, and we also loved
                getting <span>Polish Ice</span>.
              </p>
              <p>
                One of the funniest memories from growing up was playing tag on the playgrounds along the boardwalk.
                We would play for hours, and if we got bored at one playground, we would just walk to the next one
                and keep going. Those kinds of memories are a big reason family means so much to me.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">Friends & Support System</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                My friends have also played a big role in my life. Through school, sports, and work,
                I have been lucky to be around people who push me to be better and keep me grounded.
              </p>
              <p>
                I value friendships built on trust, consistency, and showing up for each other.
                A lot of what I bring to teams—communication, energy, and accountability—comes from
                what I learned through family and friendships over the years.
              </p>
              <p>
                Whether it is sports, travel, or everyday life, having strong people around me has made
                a huge difference. It has helped shape how I lead, how I work with others, and how I handle challenges.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <h2 className="text-2xl font-semibold text-slate-900">Why This Matters to Me</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                My family has been a consistent source of support through every challenge I have faced.
                They are understanding, encouraging, and always pushing me in the right direction.
              </p>
              <p>
                Seeing my family members succeed in life pushes me to be a better person.
                They have shaped who I am, and they continue to be a constant force in my life.
              </p>
              <p>
                In addition to shaping my past, they are still helping shape my future by giving me
                perspective, support, and motivation to build a meaningful life and career.
              </p>

              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm text-emerald-900">
                  Family values I carry into work and leadership: reliability, humility, effort, and appreciation.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <h2 className="text-2xl font-semibold text-slate-900">Values I Carry Forward</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {v}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/golf-skiing"
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-bold text-white hover:brightness-110"
          >
            Next: Golf & Skiing
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}

