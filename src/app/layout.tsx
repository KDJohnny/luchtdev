"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./styles/globals.css";
import "./styles/header.css";
import "./fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
