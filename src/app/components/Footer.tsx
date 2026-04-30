"use client";

import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { name: "GitHub", url: "https://github.com/KDJohnny", icon: <FaGithub /> },
    { name: "Instagram", url: "https://www.instagram.com/johnny.l.lu/", icon: <FaInstagram /> },
  ];

  return (
    <footer
      id="contact"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 1.5rem 3rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 300, height: 200,
        background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
        <div style={{
          fontSize: "11px", color: "#475569",
          letterSpacing: "0.15em", marginBottom: "1rem",
        }}>
          GET_IN_TOUCH
        </div>

        <h3 style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "clamp(1.8rem, 6vw, 2.5rem)",
          fontWeight: 800, color: "#f1f5f9",
          marginBottom: "1rem", lineHeight: 1.15,
        }}>
          Lass uns zusammen{" "}
          <span style={{
            background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            etwas bauen
          </span>
        </h3>

        <p style={{
          fontSize: "13px", color: "#64748b",
          marginBottom: "2rem", lineHeight: 1.7,
        }}>
          Aufgrund eines fehlenden Impressums und Datenschutzes auf dieser Seite wird zurzeit keine Kontaktaufnahme angeboten.
        </p>

        <a
          href="mailto:"
          style={{
            display: "inline-block",
            padding: "13px 28px",
            background: "linear-gradient(135deg, #00d4ff, #0099cc)",
            color: "#080b11",
            fontWeight: 700, fontSize: "13px",
            letterSpacing: "0.08em",
            textDecoration: "none",
            fontFamily: "var(--font-mono), monospace",
            boxShadow: "0 0 40px rgba(0,212,255,0.25)",
            transition: "all 0.25s",
            wordBreak: "break-all",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 60px rgba(0,212,255,0.5)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.25)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Keine Kontaktaufnahme möglich
        </a>

        {/* Social Links */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "0.4rem",
                fontSize: "12px", color: "#475569",
                textDecoration: "none", letterSpacing: "0.08em",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00d4ff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#475569";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {s.icon}
              {s.name}
            </a>
          ))}
        </div>

        <div style={{
          marginTop: "2.5rem", fontSize: "11px",
          color: "#334155", letterSpacing: "0.06em",
        }}>
          © 2026 Jonathan Lucht — built with Next.js & TypeScript
        </div>
      </div>
    </footer>
  );
}