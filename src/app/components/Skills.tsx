"use client";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    label: "Languages",
    icon: "{ }",
    color: "#00d4ff",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C/C++"],
  },
  {
    label: "Frontend",
    icon: "◈",
    color: "#7c3aed",
    skills: ["React / Next.js", "TailwindCSS", "HTML/CSS"],
  },
  {
    label: "Backend",
    icon: "⚙",
    color: "#10b981",
    skills: ["Node.js", "SQL"],
  },
  {
    label: "DevOps",
    icon: "☁",
    color: "#f59e0b",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
];

const tools = [
  "Git", "VS Code", "Linux", "Windows", "Vercel",
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cat = categories[active];

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{ padding: "8rem 0", position: "relative", overflow: "hidden" }}
    >

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Section header */}
        <div style={{
          marginBottom: "4rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", color: "#475569", letterSpacing: "0.15em" }}>02</span>
            <div style={{ height: 1, width: 40, background: "rgba(0,212,255,0.3)" }} />
            <span style={{ fontSize: "12px", color: "#00d4ff", letterSpacing: "0.15em" }}>SKILLS</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800, color: "#f1f5f9",
            letterSpacing: "-0.02em", lineHeight: 1.1,
          }}>
            Meine{" "}
            <span style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Technologien
            </span>
          </h2>
        </div>

        {/* Tab selector */}
        <div style={{
          display: "flex", gap: "4px", marginBottom: "3rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 0.2s",
        }}>
          {categories.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "12px 20px",
                background: "transparent", border: "none",
                borderBottom: active === i ? `2px solid ${c.color}` : "2px solid transparent",
                color: active === i ? c.color : "#475569",
                fontSize: "12px",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.06em", cursor: "pointer",
                transition: "all 0.2s", marginBottom: "-1px",
              }}
            >
              <span style={{ fontSize: "14px" }}>{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>

        {/* Skill tags */}
        <div style={{
          padding: "2rem",
          border: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(255,255,255,0.02)",
          position: "relative", overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s ease 0.3s",
        }}>
          {/* Corner accents */}
          <div style={{ position: "absolute", top: 0, left: 0, width: 20, height: 20, borderTop: `2px solid ${cat.color}`, borderLeft: `2px solid ${cat.color}` }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 20, height: 20, borderBottom: `2px solid ${cat.color}`, borderRight: `2px solid ${cat.color}` }} />

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.75rem" }}>
            <span style={{ fontSize: "22px", color: cat.color }}>{cat.icon}</span>
            <span style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "16px", color: "#f1f5f9" }}>
              {cat.label}
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {cat.skills.map((s) => (
              <span
                key={s}
                style={{
                  padding: "8px 18px",
                  border: `1px solid ${cat.color}33`,
                  fontSize: "13px", color: cat.color,
                  letterSpacing: "0.04em",
                  background: `${cat.color}0a`,
                  fontFamily: "var(--font-mono), monospace",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${cat.color}1a`;
                  e.currentTarget.style.boxShadow = `0 0 16px ${cat.color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${cat.color}0a`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Tools / Tags */}
        <div style={{
          marginTop: "3.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s ease 0.6s",
        }}>
          <div style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.15em", marginBottom: "1.2rem" }}>
            TOOLS & ENVIRONMENTS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tools.map((t) => (
              <span
                key={t}
                style={{
                  padding: "5px 14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "11px", color: "#64748b",
                  letterSpacing: "0.06em",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.2s", cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                  e.currentTarget.style.color = "#00d4ff";
                  e.currentTarget.style.background = "rgba(0,212,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#64748b";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}