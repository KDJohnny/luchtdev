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
              Projects
            </Link>
            <Link href="/about" className={pathname === "/about" ? "active" : ""}>
              About Me
            </Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
              Contact
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
