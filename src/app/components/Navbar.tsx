"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "about()", href: "#hero" },
  { label: "skills()", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 640) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 1.5rem",
          height: "64px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: scrolled ? "1px solid rgba(0,212,255,0.08)" : "1px solid transparent",
          background: scrolled || menuOpen ? "rgba(8,11,17,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(18px)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 32, height: 32, border: "1.5px solid #00d4ff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-syne), sans-serif", fontWeight: 800,
            fontSize: "13px", color: "#00d4ff", letterSpacing: "0.05em",
            flexShrink: 0,
          }}>
            {"</>"}
          </div>
          <span style={{
            fontFamily: "var(--font-syne), sans-serif", fontWeight: 700,
            fontSize: "15px", color: "#f1f5f9", letterSpacing: "0.04em",
          }}>
            luchtdev
          </span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-desktop">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "#94a3b8", textDecoration: "none",
                fontSize: "12px", letterSpacing: "0.05em",
                fontFamily: "var(--font-mono), monospace",
                transition: "color 0.2s",
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
              color: "#00d4ff", fontSize: "12px",
              fontFamily: "var(--font-mono), monospace",
              textDecoration: "none", letterSpacing: "0.06em",
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

        {/* Hamburger Button (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: "transparent", border: "none",
            cursor: "pointer", padding: "8px",
            flexDirection: "column",
            gap: "5px", alignItems: "flex-end",
          }}
        >
          <span style={{
            display: "block", height: "1.5px",
            width: menuOpen ? "22px" : "22px",
            background: "#00d4ff",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
          }} />
          <span style={{
            display: "block", height: "1.5px", width: "16px",
            background: "#00d4ff",
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1,
            transform: menuOpen ? "translateX(10px)" : "none",
          }} />
          <span style={{
            display: "block", height: "1.5px",
            width: menuOpen ? "22px" : "22px",
            background: "#00d4ff",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: "rgba(8,11,17,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,212,255,0.1)",
          padding: menuOpen ? "1.5rem" : "0 1.5rem",
          maxHeight: menuOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "all 0.35s ease",
          display: "flex", flexDirection: "column", gap: "1rem",
        }}
        className="nav-mobile-menu"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            style={{
              color: "#94a3b8", textDecoration: "none",
              fontSize: "14px", letterSpacing: "0.08em",
              fontFamily: "var(--font-mono), monospace",
              padding: "0.5rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.3s ease 0.1s",
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          style={{
            display: "inline-block",
            marginTop: "0.5rem",
            padding: "10px 20px",
            border: "1px solid #00d4ff",
            color: "#00d4ff", fontSize: "13px",
            fontFamily: "var(--font-mono), monospace",
            textDecoration: "none", letterSpacing: "0.06em",
            textAlign: "center",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.3s ease 0.15s",
          }}
        >
          contact_me()
        </a>
      </div>

      <style>{`
        .nav-hamburger { display: none; }
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}