"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ borderBottom: "1px solid #1e2a0a", background: "#101406" }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
    >
      <Link href="/" className="font-display text-sm font-black tracking-widest uppercase text-[#e8ead8]">
        Jana <span style={{ color: "#BFE344" }}>Prime</span> Visuals
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-[10px] font-semibold tracking-[3px] uppercase transition-colors"
            style={{ color: pathname === l.href ? "#BFE344" : "#8a9a50" }}
          >
            {l.label}
          </Link>
        ))}
        <span
          className="w-[5px] h-[5px] rounded-full animate-blink"
          style={{ background: "#BFE344" }}
        />
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span
          className="block w-5 h-px transition-all"
          style={{
            background: "#BFE344",
            transform: open ? "rotate(45deg) translateY(6px)" : "none",
          }}
        />
        <span
          className="block w-5 h-px transition-all"
          style={{ background: "#BFE344", opacity: open ? 0 : 1 }}
        />
        <span
          className="block w-5 h-px transition-all"
          style={{
            background: "#BFE344",
            transform: open ? "rotate(-45deg) translateY(-6px)" : "none",
          }}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 w-full flex flex-col py-6 px-6 gap-5 md:hidden"
          style={{ background: "#101406", borderBottom: "1px solid #1e2a0a" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] font-semibold tracking-[3px] uppercase"
              style={{ color: pathname === l.href ? "#BFE344" : "#8a9a50" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
