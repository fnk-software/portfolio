import Image from "next/image";
import Reveal from "./Reveal";
import {
  profile,
  skillGroups,
  experience,
  projects,
  education,
  interests,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Reveal />

      {/* Nav */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">
            FN<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#experience">experience</a>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </nav>

      <main className="container" id="top">
        {/* Hero */}
        <header className="hero">
          <div>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{profile.tagline}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Work →
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="avatar-wrap">
            <div className="avatar-ring">
              <Image
                src="/profile.jpg"
                alt={profile.name}
                width={260}
                height={260}
                priority
              />
            </div>
            <div className="avatar-badge">
              <b>13+</b> years engineering
            </div>
          </div>
        </header>

        {/* About */}
        <section id="about" className="reveal">
          <div className="section-head">
            <span className="section-index">01.</span>
            <h3>About</h3>
            <div className="rule" />
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>{profile.summary}</p>
              <div className="tag-row">
                {interests.map((i) => (
                  <span className="chip" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
            <div className="info-card">
              <div className="info-row">
                <span className="k">name</span>
                <span className="v">{profile.name}</span>
              </div>
              <div className="info-row">
                <span className="k">role</span>
                <span className="v">{profile.title}</span>
              </div>
              <div className="info-row">
                <span className="k">location</span>
                <span className="v">{profile.location}</span>
              </div>
              <div className="info-row">
                <span className="k">email</span>
                <span className="v">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </span>
              </div>
              <div className="info-row">
                <span className="k">phone</span>
                <span className="v">{profile.phone}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="reveal">
          <div className="section-head">
            <span className="section-index">02.</span>
            <h3>Experience</h3>
            <div className="rule" />
          </div>
          <div className="timeline">
            {experience.map((e) => (
              <article className="exp-card" key={e.company}>
                <div className="exp-head">
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-context">{e.context}</div>
                </div>
                <ul className="exp-points">
                  {e.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="reveal">
          <div className="section-head">
            <span className="section-index">03.</span>
            <h3>Skills &amp; Technologies</h3>
            <div className="rule" />
          </div>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div className="skill-card" key={g.label}>
                <h4>{g.label}</h4>
                <div className="skill-tags">
                  {g.items.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="reveal">
          <div className="section-head">
            <span className="section-index">04.</span>
            <h3>Selected Projects</h3>
            <div className="rule" />
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.name}>
                <div className="project-top">
                  <svg
                    className="project-icon"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h4>{p.name}</h4>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="reveal">
          <div className="section-head">
            <span className="section-index">05.</span>
            <h3>Education</h3>
            <div className="rule" />
          </div>
          <div className="two-col">
            <div className="info-card">
              {education.map((ed) => (
                <div className="edu-item" key={ed.degree}>
                  <div className="d">{ed.degree}</div>
                  <div className="s">{ed.school}</div>
                </div>
              ))}
            </div>
            <div className="info-card">
              <h4 style={{ fontFamily: "var(--mono)", color: "var(--accent)", marginBottom: 14 }}>
                Interests
              </h4>
              <div className="skill-tags">
                {interests.map((i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.85rem",
                      background: "var(--panel-2)",
                      border: "1px solid var(--border)",
                      padding: "6px 12px",
                      borderRadius: 7,
                    }}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact reveal">
          <div className="section-head">
            <span className="section-index">06.</span>
            <h3>Get In Touch</h3>
          </div>
          <p className="contact-lead">
            I&apos;m always open to discussing new projects, engineering
            challenges, or opportunities to build reliable software. Let&apos;s
            connect.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          Designed &amp; built by {profile.shortName} · Next.js on Vercel
        </div>
      </footer>
    </>
  );
}
