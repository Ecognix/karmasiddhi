"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`header ${solid || open ? "solid" : ""}`}>
      <div className="wrap header-row">
        <Link href="/" className="brand" aria-label="Karmasiddhi Nirmaan home">
          <img className="logo-mark" src="/logo-mark.png" alt="" width="52" height="58" />
          <span className="logo-text"><span>Karmasiddhi</span> <span>Nirmaan</span></span>
        </Link>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined}>{l.label}</Link>
          ))}
          <Link href="/contact" className="btn btn-sm nav-cta">Book a site visit</Link>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu"><span /><span /></button>
      </div>
    </header>
  );
}
