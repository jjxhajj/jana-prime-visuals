import Link from "next/link";

const tools = [
  "Premiere Pro", "After Effects", "DaVinci Resolve",
  "Adobe Audition", "Figma", "Next.js", "Tailwind CSS", "WordPress",
];

export default function About() {
  return (
    <>
      <section className="px-6 md:px-12 pt-16 pb-12" style={{ borderBottom: "1px solid #1e2a0a" }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-px" style={{ background: "#677D26" }} />
          <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: "#677D26" }}>
            Behind the work
          </span>
        </div>
        <h1
          className="font-display font-black uppercase leading-none tracking-[2px]"
          style={{ fontSize: "clamp(56px, 9vw, 96px)", color: "#e8ead8" }}
        >
          About me
        </h1>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: "1px solid #1e2a0a" }}>
        <div className="p-6 md:p-12" style={{ borderRight: "1px solid #1e2a0a" }}>
          <div
            className="w-full flex items-center justify-center mb-6"
            style={{ aspectRatio: "3/4", background: "#1b2209", border: "1px solid #1e2a0a" }}
          >
            <span
              className="font-display font-black tracking-[8px] uppercase"
              style={{ fontSize: 72, color: "#1e2a09" }}
            >
              JPV
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-blink" style={{ background: "#BFE344" }} />
            <span className="text-[10px] font-bold tracking-[2.5px] uppercase" style={{ color: "#677D26" }}>
              Available for new projects
            </span>
          </div>
        </div>

        <div className="p-6 md:p-12 flex flex-col justify-center">
          <h2
            className="font-display font-black uppercase leading-[0.9] tracking-[1px] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", color: "#e8ead8" }}
          >
            Fast.<br />Precise.<br /><span style={{ color: "#BFE344" }}>Cinematic.</span>
          </h2>
          <p className="text-sm leading-loose mb-4" style={{ color: "#8a9a50", fontWeight: 300 }}>
            I&apos;m Jana — a freelance creative based in Vienna working at the intersection
            of video, sound, web and storytelling. I deliver fast without compromising
            craft. That&apos;s not a pitch, it&apos;s how I operate.
          </p>
          <p className="text-sm leading-loose mb-8" style={{ color: "#8a9a50", fontWeight: 300 }}>
            Whether it&apos;s a 30-second reel or a full cinematic trailer, I bring the
            same focus to every frame. The result speaks before I do.
          </p>
          <p className="text-[10px] font-bold tracking-[3px] uppercase mb-4" style={{ color: "#677D26" }}>
            Tools &amp; stack
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold tracking-wide uppercase px-3 py-[5px]"
                style={{ border: "1px solid #242e0d", color: "#5a6632" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16" style={{ borderBottom: "1px solid #1e2a0a" }}>
        <p className="text-[10px] font-bold tracking-[3px] uppercase mb-10" style={{ color: "#677D26" }}>
          How I work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: "1px solid #1e2a0a" }}>
          {[
            { n: "01", title: "Fast turnaround", desc: "I know deadlines are real. I respect them. Always." },
            { n: "02", title: "Quality first", desc: "Speed means nothing without craft. I don&apos;t ship mediocre work." },
            { n: "03", title: "Clear communication", desc: "No surprises. You always know where your project stands." },
          ].map((v, i) => (
            <div
              key={i}
              className="p-8"
              style={{ borderRight: i < 2 ? "1px solid #1e2a0a" : "none" }}
            >
              <p className="text-[11px] font-bold tracking-[2px] mb-3" style={{ color: "#BFE344" }}>{v.n}</p>
              <h3 className="font-display font-extrabold text-xl uppercase tracking-wide mb-3" style={{ color: "#e8ead8" }}>
                {v.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#8a9a50" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ background: "#141808" }}
      >
        <h2
          className="font-display font-black uppercase leading-none tracking-[2px]"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#e8ead8" }}
        >
          Ready to work?
        </h2>
        <Link
          href="/contact"
          className="text-[12px] font-bold tracking-[2px] uppercase px-8 py-4"
          style={{ background: "#BFE344", color: "#101406" }}
        >
          Start a project
        </Link>
      </section>
    </>
  );
}
