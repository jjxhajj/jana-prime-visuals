import Link from "next/link";

const cases = [
  {
    id: "gaming-channel-rebrand",
    bg: "YT",
    cat: "Gaming / YouTube",
    year: "2025",
    title: "Gaming Channel Rebrand",
    subtitle: "Full channel identity overhaul for a growing gaming creator",
    challenge:
      "The client had a growing audience but no consistent visual identity. Every video looked different — thumbnails, intro style, color palette — which hurt brand recognition and click-through rates.",
    approach:
      "I audited 30+ videos, identified what was working and what wasn&apos;t, then designed a complete visual system: a new intro sequence, a thumbnail template system with 3 variants, a defined color palette and a new editing rhythm tuned for the gaming niche.",
    result:
      "Watch time increased significantly within 6 weeks of the rebrand. The channel&apos;s click-through rate on thumbnails improved and subscriber growth accelerated. The client now has a system they can execute consistently.",
    tags: ["Video Editing", "Motion Graphics", "Brand Identity", "YouTube"],
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    week: "Week 2",
  },
  {
    id: "indie-film-trailer",
    bg: "FM",
    cat: "Trailer / Sound Design",
    year: "2025",
    title: "Indie Film Trailer",
    subtitle: "Cinematic trailer with original sound design for a Vienna premiere",
    challenge:
      "An Austrian indie director needed a trailer that could stand alongside studio productions — with none of the budget. The raw footage was beautiful but unstructured, and there was no score or sound design in place.",
    approach:
      "I built the trailer structure first from the emotional arc of the story, then selected and licensed music that matched the tone. From there I edited picture, created all sound design from scratch and mixed the final deliverable for cinema and online playback.",
    result:
      "The trailer premiered at a film festival in Vienna to strong audience response. It&apos;s since been used for the film&apos;s press kit and festival submissions across Europe. The director returned for a second project.",
    tags: ["Trailer Editing", "Sound Design", "Film", "Post-production"],
    tools: ["Premiere Pro", "Adobe Audition", "DaVinci Resolve"],
    week: "Week 2",
  },
  {
    id: "portfolio-build",
    bg: "ME",
    cat: "Meta Case Study",
    year: "2026",
    title: "This Portfolio",
    subtitle: "Building a live Next.js portfolio with Claude Code — end-to-end",
    challenge:
      "The brief was clear: build a portfolio that demonstrates the workflow. Showing up with a WordPress site would contradict the pitch. The site itself had to be proof of craft.",
    approach:
      "I used Claude Code to scaffold, design and deploy this site from scratch in a single session. Next.js 16, Tailwind, shadcn/ui — everything spec&apos;d in the brief. The build session itself became a case study in AI-assisted creative development.",
    result:
      "A live, deployed portfolio on Vercel with a public GitHub repo. Built and shipped in one session. The meta case study documents the full process — prompts, decisions and all.",
    tags: ["Next.js", "Tailwind", "Claude Code", "Vercel", "shadcn/ui"],
    tools: ["Next.js 16", "Tailwind CSS", "Vercel", "Claude Code"],
    week: "Week 3",
    meta: true,
  },
];

export default function CaseStudies() {
  return (
    <>
      <section className="px-6 md:px-12 pt-16 pb-12" style={{ borderBottom: "1px solid #1e2a0a" }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-px" style={{ background: "#677D26" }} />
          <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: "#677D26" }}>
            Selected projects
          </span>
        </div>
        <h1
          className="font-display font-black uppercase leading-none tracking-[2px]"
          style={{ fontSize: "clamp(56px, 9vw, 96px)", color: "#e8ead8" }}
        >
          Case Studies
        </h1>
      </section>

      {cases.map((c, i) => (
        <article
          key={c.id}
          style={{ borderBottom: "1px solid #1e2a0a" }}
        >
          {/* Visual header */}
          <div
            className="relative flex items-center justify-center"
            style={{ height: 240, background: "#1b2209", borderBottom: "1px solid #1e2a0a" }}
          >
            <span
              className="font-display font-black select-none"
              style={{ fontSize: 160, color: "#1e2a09", letterSpacing: 8, lineHeight: 1 }}
            >
              {c.bg}
            </span>
            <div className="absolute top-5 left-6 flex items-center gap-3">
              <span
                className="text-[9px] font-bold tracking-[2.5px] uppercase px-2 py-1"
                style={{ color: "#BFE344", border: "1px solid #677D26" }}
              >
                {c.cat}
              </span>
              {c.meta && (
                <span
                  className="text-[9px] font-bold tracking-[2px] uppercase px-2 py-1"
                  style={{ color: "#e8ead8", background: "#677D26" }}
                >
                  Meta case study
                </span>
              )}
            </div>
            <span
              className="absolute top-5 right-6 text-[10px]"
              style={{ color: "#5a6632" }}
            >
              {c.year}
            </span>
            <span
              className="absolute bottom-5 left-6 text-[9px] font-bold tracking-[2px] uppercase"
              style={{ color: "#5a6632" }}
            >
              {c.week}
            </span>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]" style={{ borderBottom: "1px solid #1e2a0a" }}>
            <div className="p-6 md:p-10" style={{ borderRight: "1px solid #1e2a0a" }}>
              <h2 className="font-display font-extrabold text-3xl uppercase tracking-wide mb-2" style={{ color: "#e8ead8" }}>
                {c.title}
              </h2>
              <p className="text-xs leading-relaxed mb-8" style={{ color: "#677D26" }}>{c.subtitle}</p>
              <div className="mb-6">
                <p className="text-[9px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "#677D26" }}>Tags</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[9px] font-semibold tracking-[1px] uppercase px-2 py-1"
                      style={{ border: "1px solid #1e2a0a", color: "#5a6632" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "#677D26" }}>Tools</p>
                <div className="flex flex-wrap gap-2">
                  {c.tools.map((t) => (
                    <span key={t} className="text-[9px] font-semibold tracking-[1px] uppercase px-2 py-1"
                      style={{ background: "#1b2209", color: "#8a9a50" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 grid grid-cols-1 gap-8">
              {[
                { label: "Challenge", text: c.challenge },
                { label: "Approach", text: c.approach },
                { label: "Result", text: c.result },
              ].map((block) => (
                <div key={block.label}>
                  <p className="text-[9px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "#BFE344" }}>
                    {block.label}
                  </p>
                  <p
                    className="text-sm leading-loose"
                    style={{ color: "#8a9a50", fontWeight: 300 }}
                    dangerouslySetInnerHTML={{ __html: block.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}

      <section
        className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ background: "#141808" }}
      >
        <h2
          className="font-display font-black uppercase leading-none tracking-[2px]"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#e8ead8" }}
        >
          Your project<br /><span style={{ color: "#BFE344" }}>next?</span>
        </h2>
        <Link
          href="/contact"
          className="text-[12px] font-bold tracking-[2px] uppercase px-8 py-4 flex-shrink-0"
          style={{ background: "#BFE344", color: "#101406" }}
        >
          Start a project
        </Link>
      </section>
    </>
  );
}
