"use client";
import { useEffect, useRef, useState } from "react";

const roles = ["Software Engineer", "Full-Stack Developer", "Problem Solver"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  // Typewriter effect
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

  // Cursor blink
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
        paddingTop: "68px",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,212,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.028) 1px, transparent 1px)",
        backgroundSize: "55px 55px",
      }} />

      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem",
        width: "100%", display: "flex", alignItems: "center",
        gap: "4rem", position: "relative", zIndex: 2,
      }}>
        {/* Left content */}
        <div style={{ flex: 1, maxWidth: "680px" }}>

          {/* Status badge */}
          <div className="animate-fadeup" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 14px",
            border: "1px solid rgba(16,185,129,0.3)",
            marginBottom: "2.5rem",
            background: "rgba(16,185,129,0.06)",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: "11px", color: "#10b981", letterSpacing: "0.1em" }}>
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fadeup d2" style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
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
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#94a3b8",
            marginBottom: "1.75rem",
            height: "2rem",
            opacity: 0,
          }}>
            <span style={{ color: "#00d4ff" }}>$ </span>
            <span>{displayed}</span>
            <span style={{ opacity: cursorOn ? 1 : 0, color: "#00d4ff", fontWeight: 300 }}>|</span>
          </div>

          {/* Bio */}
          <p className="animate-fadeup d4" style={{
            fontSize: "15px",
            color: "#64748b",
            lineHeight: 1.8,
            maxWidth: "540px",
            marginBottom: "2.5rem",
            opacity: 0,
          }}>
            Ich entwickle skalierbare Webanwendungen und custom Software mit sauberem Code und modernen Technologien und habe eine Leidenschaft für neue Herausforderungen.
          </p>

          {/* Buttons */}
          <div className="animate-fadeup d5" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", opacity: 0 }}>
            <a
              href="#skills"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 28px",
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
                padding: "14px 28px",
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

          {/* Stats - more to come */}
          <div className="animate-fadeup d6" style={{
            display: "flex", gap: "2.5rem", marginTop: "3.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            opacity: 0,
          }}>
            {[
              { val: "Aspiring Bachelor", label: "in Software Engineering" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "2rem", fontWeight: 800,
                  color: "#00d4ff",
                  lineHeight: 1,
                }}>{s.val}</div>
                <div style={{ fontSize: "15px", color: "#475569", marginTop: "4px", letterSpacing: "0.06em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Abstract visual */}
        <div style={{
          flex: "0 0 auto",
          width: "clamp(220px, 28vw, 380px)",
          height: "clamp(220px, 28vw, 380px)",
          position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Outer ring */}
          <div className="animate-spin-slow" style={{
            position: "absolute", inset: 0,
            border: "1px dashed rgba(0,212,255,0.2)",
            borderRadius: "50%",
          }} />
          {/* Inner ring */}
          <div style={{
            position: "absolute",
            inset: "20%",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "50%",
          }} />
          {/* Center hex card */}
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
        @keyframes pulse { 0%,100%{box-shadow:0 0 8px #10b981} 50%{box-shadow:0 0 16px #10b981, 0 0 24px #10b981} }
        @keyframes orbDrift { 0%,100%{transform:translate(0,0)} 33%{transform:translate(25px,-15px)} 66%{transform:translate(-15px,20px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}
