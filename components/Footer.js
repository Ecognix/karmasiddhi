import Link from "next/link";
import { TAGLINE } from "../lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand footer-logo">
            <img className="logo-mark" src="/logo-mark.png" alt="" width="52" height="58" />
            <span className="logo-text"><span>Karmasiddhi</span> <span>Nirmaan</span></span>
          </div>
          <p className="footer-tag">{TAGLINE}</p>
          <p className="muted">Karmasiddhi Nirmaan builds residential, villa and commercial projects across Guwahati.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Visit our office</h4>
          <p>Karmasiddhi Nirmaan<br />KRB Rd, Bharalumukh<br />Guwahati, Assam 781009</p>
          <p><a href="tel:+919365910512">+91 93659 10512</a><br /><a href="mailto:hello@karmasiddhinirmaan.in">hello@karmasiddhinirmaan.in</a></p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Karmasiddhi Nirmaan. All rights reserved.</span>
        <span>Assam RERA registration details available on request.</span>
      </div>
    </footer>
  );
}
