"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/config";
import { NAV } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <header className={`nav ${scrolled ? "on" : ""}`}>
      <div className="nav-in">
        <div className="brand">
          Vishnu Vamsi<b>.</b>
        </div>
        <nav className="nav-links" aria-label="Sections">
          {NAV.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>
        <a className="nav-cta" href={CONFIG.resume} download>
          Resume ↓
        </a>
      </div>
    </header>
  );
}
