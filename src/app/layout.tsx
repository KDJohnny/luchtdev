"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./styles/globals.css";
import "./styles/header.css";
import "./fontawesome";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link href="/projects" className={pathname === "/projects" ? "active" : ""}>
              Projekte
            </Link>
            <Link href="/about" className={pathname === "/about" ? "active" : ""}>
              Über mich
            </Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
              Kontakt
            </Link>
          </nav>
        </header>
        {children}
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </body>
    </html>
  );
}
