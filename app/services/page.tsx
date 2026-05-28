import Link from "next/link";

const services = [
  {
    n: "01",
    name: "Video Editing",
    short: "Social media, YouTube & gaming",
    desc: "I edit videos for social media platforms, YouTube channels and gaming content creators. Every cut is intentional — paced for maximum retention and impact. I work with any footage and can match or build an editing style from scratch.",
    tags: ["YouTube", "Instagram Reels", "TikTok", "Gaming", "Short-form"],
  },
  {
    n: "02",
    name: "Trailer Editing",
    short: "Cinematic trailers for your project",
    desc: "From indie films to game reveals, I craft trailers that build tension, land the emotion and make people want more. I handle the cut, the pacing, music selection and sound design to create a complete cinematic experience.",
    tags: ["Film", "Game", "Event", "Brand", "Documentary"],
  },
  {
    n: "03",
    name: "Sound Design",
    short: "Audio that gives your visuals a heartbeat",
    desc: "Good sound is invisible — great sound is unforgettable. I design audio landscapes that match the energy of your visuals: from subtle ambient textures to hard-hitting impact effects. Every project gets a unique sonic identity.",
    tags: ["SFX", "Foley", "Ambient", "Music supervision", "Mix & Master"],
  },
  {
    n: "04",
    name: "Website Redesign",
    short: "Clean, modern, functional",
    desc: "I redesign websites that are beautiful and actually work. No bloat, no unnecessary complexity — just clean, fast, conversion-focused design built in Next.js and Tailwind. The site you&apos;re looking at right now is an example.",
    tags: ["Next.js", "Tailwind", "Figma", "Responsive", "Performance"],
  },
  {
    n: "05",
    name: "Subtitling & Captioning",
    short: "Accurate, styled, timed to the frame",
    desc: "Professional subtitles and captions for any video format. I handle timing, styling, formatting and translation coordination. Available for German, English and more. Deliverable in SRT, VTT, ASS or burned-in.",
    tags: ["SRT", "VTT", "Styled captions", "Multilingual", "Accessibility"],
  },
  {
    n: "06",
    name: "Social Media Management",
    short: "Content planning & execution",
    desc: "I plan, create and manage social media content that builds real audiences. From content calendars to caption writing to post scheduling — I handle the strategy and the execution so you can focus on your work.",
    tags: ["Instagram", "TikTok", "YouTube", "Content calendar", "Analytics"],
  },
  {
    n: "07",
    name: "Blog Writing & SEO",
    short: "Words that rank and convert",
    desc: "I write long-form blog content that performs in search and actually reads well. No AI slop, no keyword stuffing — just well-researched, engaging articles that bring organic traffic and establish authority.",
    tags: ["SEO", "Long-form", "Research", "English & German", "Strategy"],
  },
];

export default function Services() {
  return (
    <>
      <section className="px-6 md:px-12 pt-16 pb-12" style={{ borderBottom: "1px solid #1e2a0a" }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-px" style={{ background: "#677D26" }} />
          <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: "#677D26" }}>
            What I offer
          </span>
        </div>
        <h1
          className="font-display font-black uppercase leading-none tracking-[2px]"
          style={{ fontSize: "clamp(56px, 9vw, 96px)", color: "#e8ead8" }}
        >
          Services
        </h1>
      </section>

      <section style={{ borderBottom: "1px solid #1e2a0a" }}>
        {services.map((s, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-0 group"
            style={{ borderBottom: i < services.length - 1 ? "1px solid #1e2a0a" : "none" }}
          >
            <div
              className="hidden md:flex items-start justify-center pt-8"
              style={{ borderRight: "1px solid #1e2a0a" }}
            >
              <span className="text-[11px] font-bold tracking-[2px]" style={{ color: "#BFE344" }}>{s.n}</span>
            </div>
            <div className="px-6 md:px-10 py-8" style={{ borderRight: "1px solid #1e2a0a" }}>
              <p className="text-[11px] font-bold tracking-[2px] mb-2 md:hidden" style={{ color: "#BFE344" }}>{s.n}</p>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl uppercase tracking-wide mb-1" style={{ color: "#e8ead8" }}>
                {s.name}
              </h2>
              <p className="text-xs mb-4" style={{ color: "#677D26" }}>{s.short}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-semibold tracking-[1px] uppercase px-2 py-1"
                    style={{ border: "1px solid #1e2a0a", color: "#5a6632" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-6 md:px-10 py-8">
              <p
                className="text-sm leading-loose"
                style={{ color: "#8a9a50", fontWeight: 300 }}
                dangerouslySetInnerHTML={{ __html: s.desc }}
              />
            </div>
          </div>
        ))}
      </section>

      <section
        className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ background: "#141808" }}
      >
        <h2
          className="font-display font-black uppercase leading-none tracking-[2px]"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#e8ead8" }}
        >
          Need something<br /><span style={{ color: "#BFE344" }}>specific?</span>
        </h2>
        <Link
          href="/contact"
          className="text-[12px] font-bold tracking-[2px] uppercase px-8 py-4 flex-shrink-0"
          style={{ background: "#BFE344", color: "#101406" }}
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
