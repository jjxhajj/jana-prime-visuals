import Link from "next/link";

const services = [
  "Video Editing",
  "Trailer Editing",
  "Sound Design",
  "Web Redesign",
  "Subtitling",
  "Social Media",
];

const ticker = [...services, ...services, ...services, ...services];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ borderBottom: "1px solid #1e2a0a" }}>
        <div className="px-6 md:px-12 pt-16 md:pt-24 pb-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px" style={{ background: "#677D26" }} />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: "#677D26" }}>
              Freelance Creative — Vienna, Austria
            </span>
          </div>
          <h1
            className="font-display font-black uppercase leading-[0.88] tracking-[2px]"
            style={{ fontSize: "clamp(56px, 10vw, 104px)", color: "#e8ead8" }}
          >
            <span style={{ color: "#8a9a50", fontWeight: 700 }}>Content</span>
            <br />
            <span style={{ color: "#BFE344", display: "block" }}>that moves</span>
            <span>people.</span>
          </h1>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 mt-12"
          style={{ borderTop: "1px solid #1e2a0a" }}
        >
          <div className="px-6 md:px-12 py-8" style={{ borderRight: "1px solid #1e2a0a" }}>
            <p className="text-sm leading-loose mb-8 max-w-sm" style={{ color: "#8a9a50", fontWeight: 300 }}>
              Video editing, cinematic trailers, sound design, web redesign &amp; social
              media — I craft content that stops the scroll and makes people feel
              something.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/case-studies"
                className="text-[11px] font-bold tracking-[2px] uppercase px-6 py-3"
                style={{ background: "#BFE344", color: "#101406" }}
              >
                View work
              </Link>
              <Link
                href="/contact"
                className="text-[11px] font-semibold tracking-[2px] uppercase px-6 py-3 border transition-colors hover:border-[#677D26] hover:text-[#BFE344]"
                style={{ borderColor: "#5a6632", color: "#8a9a50" }}
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-end justify-end px-12 py-8">
            <span
              className="text-[10px] font-semibold tracking-[3px] uppercase"
              style={{ color: "#5a6632", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div
        className="overflow-hidden py-3"
        style={{ borderBottom: "1px solid #1e2a0a", background: "#141808" }}
      >
        <div className="flex animate-ticker whitespace-nowrap w-max">
          {ticker.map((s, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "#677D26" }}
              />
              <span
                className="text-[10px] font-bold tracking-[2.5px] uppercase"
                style={{ color: "#5a6632" }}
              >
                {s}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="px-6 md:px-12 py-16 md:py-20" style={{ borderBottom: "1px solid #1e2a0a" }}>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] font-bold tracking-[3px] uppercase mb-2" style={{ color: "#677D26" }}>
              What I offer
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-[2px] leading-none" style={{ color: "#e8ead8" }}>
              Services
            </h2>
          </div>
          <span className="font-display font-black text-8xl md:text-9xl" style={{ color: "#1b2209", lineHeight: 1 }}>
            01
          </span>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          style={{ border: "1px solid #1e2a0a" }}
        >
          {[
            { n: "01", name: "Video Editing", desc: "Social media, YouTube & gaming — cut for impact, paced for retention." },
            { n: "02", name: "Trailer Editing", desc: "Cinematic storytelling with rhythm, tension and a perfect release." },
            { n: "03", name: "Sound Design", desc: "Audio that gives your visuals depth, emotion and a heartbeat." },
            { n: "04", name: "Web Redesign", desc: "Clean, modern, functional — sites that actually convert." },
            { n: "05", name: "Subtitling", desc: "Precise, styled, timed to the frame. In any language." },
            { n: "06", name: "Social Media", desc: "Strategy, content planning & management that drives real growth." },
          ].map((s, i) => (
            <div
              key={i}
              className="p-7 relative overflow-hidden group"
              style={{
                borderRight: i % 3 !== 2 ? "1px solid #1e2a0a" : "none",
                borderBottom: i < 3 ? "1px solid #1e2a0a" : "none",
              }}
            >
              <p className="text-[11px] font-bold tracking-[2px] mb-3" style={{ color: "#BFE344" }}>{s.n}</p>
              <h3 className="font-display font-extrabold text-xl uppercase tracking-wide mb-2" style={{ color: "#e8ead8" }}>
                {s.name}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#8a9a50" }}>{s.desc}</p>
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "#BFE344" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/services"
            className="text-[11px] font-bold tracking-[2px] uppercase flex items-center gap-3 hover:gap-5 transition-all"
            style={{ color: "#BFE344" }}
          >
            <span className="w-8 h-px" style={{ background: "#BFE344" }} />
            All services
          </Link>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="px-6 md:px-12 py-16 md:py-20" style={{ borderBottom: "1px solid #1e2a0a" }}>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] font-bold tracking-[3px] uppercase mb-2" style={{ color: "#677D26" }}>
              Selected projects
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-[2px] leading-none" style={{ color: "#e8ead8" }}>
              Case Studies
            </h2>
          </div>
          <span className="font-display font-black text-8xl md:text-9xl" style={{ color: "#1b2209", lineHeight: 1 }}>
            02
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: "1px solid #1e2a0a" }}>
          {[
            {
              bg: "YT",
              cat: "Gaming / YouTube",
              year: "2025",
              title: "Gaming Channel Rebrand",
              desc: "Full overhaul of a gaming YouTube channel — intro, thumbnails, editing language & rhythm. Watch time grew significantly within weeks.",
            },
            {
              bg: "FM",
              cat: "Trailer / Sound",
              year: "2025",
              title: "Indie Film Trailer",
              desc: "Cinematic trailer with original sound design for an Austrian indie production. Premiered at a Vienna film festival.",
            },
          ].map((w, i) => (
            <div key={i} style={{ borderRight: i === 0 ? "1px solid #1e2a0a" : "none" }}>
              <div
                className="flex items-center justify-center relative"
                style={{ height: 200, background: "#1b2209", borderBottom: "1px solid #1e2a0a" }}
              >
                <span
                  className="font-display font-black select-none"
                  style={{ fontSize: 110, color: "#1e2a09", letterSpacing: 6, lineHeight: 1 }}
                >
                  {w.bg}
                </span>
                <span
                  className="absolute top-4 left-4 text-[9px] font-bold tracking-[2.5px] uppercase px-2 py-1"
                  style={{ color: "#BFE344", border: "1px solid #677D26" }}
                >
                  {w.cat}
                </span>
                <span
                  className="absolute top-4 right-4 text-[10px]"
                  style={{ color: "#5a6632" }}
                >
                  {w.year}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-extrabold text-2xl uppercase tracking-wide mb-2" style={{ color: "#e8ead8" }}>
                  {w.title}
                </h3>
                <p className="text-xs leading-loose mb-4" style={{ color: "#8a9a50" }}>{w.desc}</p>
                <Link
                  href="/case-studies"
                  className="text-[10px] font-bold tracking-[2px] uppercase flex items-center gap-3 hover:gap-5 transition-all"
                  style={{ color: "#BFE344" }}
                >
                  <span className="w-6 h-px" style={{ background: "#BFE344" }} />
                  View case study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ background: "#141808" }}
      >
        <h2
          className="font-display font-black uppercase leading-none tracking-[2px]"
          style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#e8ead8" }}
        >
          Let&apos;s make<br />
          <span style={{ color: "#BFE344" }}>something great.</span>
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
