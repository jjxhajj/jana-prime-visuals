"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="px-6 md:px-12 pt-16 pb-12" style={{ borderBottom: "1px solid #1e2a0a" }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-px" style={{ background: "#677D26" }} />
          <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color: "#677D26" }}>
            Start a project
          </span>
        </div>
        <h1
          className="font-display font-black uppercase leading-none tracking-[2px]"
          style={{ fontSize: "clamp(56px, 9vw, 96px)", color: "#e8ead8" }}
        >
          Contact
        </h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: "1px solid #1e2a0a" }}>
        {/* Left info */}
        <div className="p-6 md:p-12" style={{ borderRight: "1px solid #1e2a0a" }}>
          <h2
            className="font-display font-black uppercase leading-[0.9] tracking-[2px] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#e8ead8" }}
          >
            Let&apos;s make<br />something<br /><span style={{ color: "#BFE344" }}>great.</span>
          </h2>
          <p className="text-sm leading-loose mb-10" style={{ color: "#8a9a50", fontWeight: 300 }}>
            Got a project, a brief or just an idea? Tell me about it. I respond within
            24 hours and I&apos;m always open to interesting work.
          </p>

          <div style={{ borderTop: "1px solid #1e2a0a" }}>
            {[
              { label: "Email", value: "hello@janaprime.com", href: "mailto:hello@janaprime.com" },
              { label: "Instagram", value: "@janaprime.visuals", href: "#" },
              { label: "LinkedIn", value: "Jana Prime Visuals", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between py-4 group"
                style={{ borderBottom: "1px solid #1e2a0a" }}
              >
                <span className="text-[10px] font-bold tracking-[2.5px] uppercase transition-colors group-hover:text-[#BFE344]"
                  style={{ color: "#8a9a50" }}>
                  {item.label}
                </span>
                <span className="text-xs" style={{ color: "#5a6632" }}>{item.value}</span>
              </a>
            ))}
          </div>

          <div className="mt-10 p-6" style={{ background: "#141808", border: "1px solid #1e2a0a" }}>
            <p className="text-[9px] font-bold tracking-[2px] uppercase mb-2" style={{ color: "#677D26" }}>
              Response time
            </p>
            <p className="text-sm" style={{ color: "#8a9a50", fontWeight: 300 }}>
              I typically respond within <span style={{ color: "#BFE344" }}>24 hours</span> on weekdays.
              For urgent projects, mention it in your message.
            </p>
          </div>
        </div>

        {/* Right form */}
        <div className="p-6 md:p-12" style={{ background: "#141808" }}>
          {sent ? (
            <div className="flex flex-col items-start justify-center h-full gap-4">
              <span
                className="font-display font-black text-5xl uppercase tracking-[2px]"
                style={{ color: "#BFE344" }}
              >
                Sent.
              </span>
              <p className="text-sm leading-loose" style={{ color: "#8a9a50", fontWeight: 300 }}>
                Thanks for reaching out. I&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-0">
              {[
                { key: "name", label: "Your name", type: "text" },
                { key: "email", label: "Email address", type: "email" },
                { key: "subject", label: "Subject / project type", type: "text" },
              ].map((field) => (
                <div key={field.key} style={{ borderBottom: "1px solid #1e2a0a" }}>
                  <input
                    type={field.type}
                    placeholder={field.label}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-transparent text-sm py-4 outline-none placeholder:text-[#5a6632]"
                    style={{ color: "#e8ead8", fontFamily: "Manrope, sans-serif" }}
                  />
                </div>
              ))}
              <div style={{ borderBottom: "1px solid #1e2a0a" }}>
                <textarea
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent text-sm py-4 outline-none resize-none placeholder:text-[#5a6632]"
                  style={{ color: "#e8ead8", fontFamily: "Manrope, sans-serif" }}
                />
              </div>
              <button
                type="submit"
                className="mt-6 text-[12px] font-bold tracking-[2px] uppercase py-4 w-full transition-opacity hover:opacity-80"
                style={{ background: "#BFE344", color: "#101406" }}
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
