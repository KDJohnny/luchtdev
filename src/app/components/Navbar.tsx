"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "about()", href: "#hero" },
  { label: "skills()", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2.5rem",
        height: "68px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.08)" : "1px solid transparent",
        background: scrolled ? "rgba(8,11,17,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: 32, height: 32, border: "1.5px solid #00d4ff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-syne), sans-serif", fontWeight: 800,
          fontSize: "13px", color: "#00d4ff",
          letterSpacing: "0.05em",
        }}>
          {"</>"}
        </div>
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "15px", color: "#f1f5f9", letterSpacing: "0.04em" }}>
          luchtdev
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: active === l.href ? "#00d4ff" : "#94a3b8",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-mono), monospace",
              transition: "color 0.2s",
              position: "relative",
              paddingBottom: "2px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            padding: "7px 18px",
            border: "1px solid #00d4ff",
            color: "#00d4ff",
            fontSize: "12px",
            fontFamily: "var(--font-mono), monospace",
            textDecoration: "none",
            letterSpacing: "0.06em",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,212,255,0.1)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          contact_me()
        </a>
      </div>
    </nav>
  );
}
