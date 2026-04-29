"use client";
import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Full-Stack Developer", "Problem Solver"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const full = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  useEffect(() => {
    const iv = setInterval(() => setCursorOn(c => !c), 530);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,212,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.028) 1px, transparent 1px)",
        backgroundSize: "55px 55px",
      }} />

      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "2rem 1.5rem",
        width: "100%",
        display: "flex", alignItems: "center",
        gap: "4rem", position: "relative", zIndex: 2,
      }} className="hero-inner">

        {/* Left content */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Status badge */}
          <div className="animate-fadeup" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 14px",
            border: "1px solid rgba(16,185,129,0.3)",
            marginBottom: "2rem",
            background: "rgba(16,185,129,0.06)",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#10b981", boxShadow: "0 0 8px #10b981",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
              flexShrink: 0,
            }} />
            <span style={{ fontSize: "11px", color: "#10b981", letterSpacing: "0.1em" }}>
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fadeup d2" style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            opacity: 0,
          }}>
            <span style={{ display: "block", color: "#f1f5f9" }}>Jonathan</span>
            <span style={{
              display: "block",
              background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Lucht
            </span>
          </h1>

          {/* Typewriter */}
          <div className="animate-fadeup d3" style={{
            fontSize: "clamp(0.9rem, 3vw, 1.25rem)",
            color: "#94a3b8",
            marginBottom: "1.5rem",
            minHeight: "2rem",
            opacity: 0,
          }}>
            <span style={{ color: "#00d4ff" }}>$ </span>
            <span>{displayed}</span>
            <span style={{ opacity: cursorOn ? 1 : 0, color: "#00d4ff", fontWeight: 300 }}>|</span>
          </div>

          {/* Bio */}
          <p className="animate-fadeup d4" style={{
            fontSize: "14px",
            color: "#64748b",
            lineHeight: 1.8,
            maxWidth: "540px",
            marginBottom: "2rem",
            opacity: 0,
          }}>
            Ich entwickle skalierbare Webanwendungen und custom Software mit sauberem Code und modernen Technologien und habe eine Leidenschaft für neue Herausforderungen.
          </p>

          {/* Buttons */}
          <div className="animate-fadeup d5 hero-buttons" style={{ opacity: 0 }}>
            <a
              href="#skills"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 24px",
                background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                color: "#080b11",
                fontWeight: 700, fontSize: "13px",
                letterSpacing: "0.06em",
                textDecoration: "none",
                fontFamily: "var(--font-mono), monospace",
                transition: "all 0.25s",
                boxShadow: "0 0 30px rgba(0,212,255,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 50px rgba(0,212,255,0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              view_skills()
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 24px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                fontWeight: 500, fontSize: "13px",
                letterSpacing: "0.06em",
                textDecoration: "none",
                fontFamily: "var(--font-mono), monospace",
                background: "rgba(255,255,255,0.03)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                e.currentTarget.style.color = "#00d4ff";
                e.currentTarget.style.background = "rgba(0,212,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              contact_me()
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fadeup d6" style={{
            display: "flex", gap: "2.5rem", marginTop: "3rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            opacity: 0,
          }}>
            {[
              { val: "Aspiring Bachelor", label: "in Software Engineering" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "clamp(1.2rem, 4vw, 2rem)", fontWeight: 800,
                  color: "#00d4ff", lineHeight: 1,
                }}>{s.val}</div>
                <div style={{ fontSize: "13px", color: "#475569", marginTop: "4px", letterSpacing: "0.06em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Abstract visual — hidden on mobile */}
        <div className="hero-visual" style={{
          flex: "0 0 auto",
          width: "clamp(220px, 28vw, 380px)",
          height: "clamp(220px, 28vw, 380px)",
          position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div className="animate-spin-slow" style={{
            position: "absolute", inset: 0,
            border: "1px dashed rgba(0,212,255,0.2)",
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute", inset: "20%",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "50%",
          }} />
          <div style={{
            position: "relative",
            width: "55%", height: "55%",
            background: "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08))",
            border: "1px solid rgba(0,212,255,0.2)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "6px",
            boxShadow: "0 0 60px rgba(0,212,255,0.1), inset 0 0 30px rgba(0,212,255,0.04)",
          }}>
            <span style={{ fontSize: "14px", color: "#00d4ff", letterSpacing: "0.15em" }}>CODING</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        opacity: 0.4,
      }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#475569" }}>SCROLL</span>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, rgba(0,212,255,0.6), transparent)",
        }} />
      </div>

      <style>{`
        .hero-inner { flex-direction: row; }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
        .hero-visual { display: flex; }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; padding: 2rem 1.5rem 4rem !important; gap: 2.5rem !important; }
          .hero-visual { display: none !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { text-align: center; justify-content: center; }
        }
        @keyframes pulse { 0%,100%{box-shadow:0 0 8px #10b981} 50%{box-shadow:0 0 16px #10b981, 0 0 24px #10b981} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}