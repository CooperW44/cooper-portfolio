export default function ResumePage() {
  const skills = ["Python","SQL","JavaScript","TypeScript","React","Node.js / Express","Django / DRF","HTML / CSS","Git / GitHub","APIs"];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold">Resume</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Information Systems graduate focused on web development, full-stack applications, and analytics.
        </p>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="mt-3 text-slate-300">Utah State University — Information Systems</p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
