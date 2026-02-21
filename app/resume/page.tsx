import Link from "next/link";

const skills = {
  languages: ["Python", "SQL", "JavaScript / TypeScript", "Java", "HTML/CSS", "PowerShell"],
  frameworks: ["React", "Angular", "Node.js / Express", "Django / DRF", "Redux / Thunk", "MongoDB (Mongoose)", "SQLite"],
  tools: ["REST APIs", "JWT / Auth", "Axios", "Git / GitHub", "Linux / CLI", "Webpack", "Babel", "Tableau", "Advanced Excel", "Firebase Hosting", "AWS"],
};

const projects = [
  {
    title: "Multi-Shop (React Web App)",
    subtitle: "Deployed app • Firebase Hosting",
    link: "https://multi-shop-b2730.web.app",
    bullets: [
      "Built and deployed a React-based web application using Firebase Hosting.",
      "Created multi-page navigation and reusable UI components for a clean, consistent user experience.",
      "Organized components and state structure to keep the project maintainable as features expanded.",
    ],
  },
  {
    title: "Mentor Course Platform (Node/Express + MongoDB)",
    subtitle: "Full-stack course registration app",
    bullets: [
      "Built authentication, session handling, and role-based access (admin vs. user).",
      "Implemented CRUD for courses plus registration/unregistration workflows with validation and error handling.",
      "Worked with file uploads for course images and structured data models for users and courses.",
    ],
  },
];

export default function ResumePage() {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/50 bg-white/95 p-8 shadow-2xl shadow-black/15 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-purple-500">
            Professional Overview
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Resume</h1>
          <p className="mt-4 max-w-4xl leading-7 text-slate-600">
            Information Systems graduate with hands-on experience supporting web applications
            through SQL reporting and front-end development. Built and deployed web projects
            using React and modern JavaScript, and comfortable learning new tools quickly while
            collaborating in team environments.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <div className="mb-3 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
            <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p><span className="font-semibold text-slate-900">Phone:</span> (443) 823-8283</p>
              <p><span className="font-semibold text-slate-900">Email:</span> cooplax44@aol.com</p>
              <p>
                <span className="font-semibold text-slate-900">Portfolio:</span>{" "}
                <a
                  href="https://multi-shop-b2730.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-700 hover:text-cyan-800"
                >
                  multi-shop-b2730.web.app
                </a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
            <div className="mb-3 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <h2 className="text-2xl font-semibold text-slate-900">Education</h2>
            <p className="mt-4 font-semibold text-slate-900">
              Utah State University – Jon M. Huntsman School of Business
            </p>
            <p className="text-slate-700">B.S., Information Systems Management</p>
            <p className="mt-2 text-sm text-slate-600">
              Graduated December 2025 • GPA: 3.41 • Dean&apos;s List (2025)
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Relevant coursework: Advanced Excel; SQL & Database Management; Python (OOP);
              UI/UX Web Design (HTML/CSS/JavaScript); Data Visualization (Tableau);
              Regression & Hypothesis Testing; Cloud Computing (Azure/AWS); React.js
              (API integration, deployment).
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <h2 className="text-2xl font-semibold text-slate-900">Technical Skills</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">Languages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">Frameworks / DB</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">Tools / Cloud</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
          <div className="mt-5 space-y-4">
            {projects.map((project) => (
              <div key={project.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{project.title}</p>
                    <p className="text-sm text-slate-500">{project.subtitle}</p>
                  </div>
                  {"link" in project && project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                    >
                      View project ↗
                    </a>
                  ) : null}
                </div>

                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <h2 className="text-2xl font-semibold text-slate-900">Experience</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">Gymshare – A Private Home Gym Experience | Provo, UT</p>
                  <p className="text-sm text-slate-600">IT Intern – Web Developer</p>
                </div>
                <p className="text-sm text-slate-500">Jul 2024–Aug 2024; May 2025–Aug 2025</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" /><span>Created and maintained complex SQL statements and views to support reporting and application needs.</span></li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" /><span>Assisted with front-end development in an object-oriented Angular/TypeScript codebase.</span></li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" /><span>Validated data accuracy, troubleshot issues, and improved reliability of data and UI features through testing and refinement.</span></li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">Cherry Hills Country Club | Denver, CO</p>
                  <p className="text-sm text-slate-600">Grounds Crew</p>
                </div>
                <p className="text-sm text-slate-500">May 2023–Jul 2024; May 2025–Aug 2025</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" /><span>Maintained high standards across daily operations including mowing, trimming, bunker maintenance, and course upkeep.</span></li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" /><span>Helped prepare the course for the 2023 U.S. Amateur.</span></li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" /><span>Recipient of the Arnold Palmer Scholarship (2023, 2024, 2025).</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-lg shadow-black/10">
          <h2 className="text-2xl font-semibold text-slate-900">Leadership & Achievements</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500" /><span><span className="font-semibold text-slate-900">4x Captain</span>, Utah State University Men&apos;s Lacrosse (led communication, accountability, and team culture).</span></li>
            <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500" /><span>Selected Honors: <span className="font-semibold text-slate-900">RMLC Rookie of the Year (2022)</span>; <span className="font-semibold text-slate-900">1st Team All-American (MCLA, 2025)</span>.</span></li>
            <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500" /><span><span className="font-semibold text-slate-900">MCLA D2 Scholar Athlete</span> (2024, 2025).</span></li>
          </ul>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-bold text-white hover:brightness-110"
          >
            Download Resume PDF
          </a>
          <Link
            href="/lacrosse"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            View Lacrosse Page
          </Link>
        </div>
      </div>
    </section>
  );
}
