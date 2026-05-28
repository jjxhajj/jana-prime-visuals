import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid #1e2a0a" }}
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 gap-4"
    >
      <Link href="/" className="font-display text-sm font-black tracking-widest uppercase text-[#e8ead8]">
        Jana <span style={{ color: "#BFE344" }}>Prime</span> Visuals
      </Link>
      <p className="text-[10px] tracking-[2px] uppercase" style={{ color: "#5a6632" }}>
        © {new Date().getFullYear()} Jana Prime Visuals — Vienna, Austria
      </p>
      <div className="flex gap-6">
        {["Instagram", "LinkedIn", "YouTube"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-[10px] font-semibold tracking-[2px] uppercase transition-colors hover:text-[#BFE344]"
            style={{ color: "#5a6632" }}
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
}
