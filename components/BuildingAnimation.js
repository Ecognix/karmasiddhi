"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const FLOORS = 10;
const LAST = FLOORS + 3; // 0 empty site, 1 foundation, 2-11 floors, 12 finishing, 13 handover
const FH = 36;
const STAGES = [
  { icon: "pin", t: "Site and foundation", d: "Soil testing, excavation and an engineered raft foundation.", at: 1 },
  { icon: "building", t: "Structure", d: "An earthquake-resistant frame rises, floor by floor.", at: 2 },
  { icon: "bolt", t: "Facade and services", d: "Glazing, plumbing, wiring and lifts are fitted.", at: 11 },
  { icon: "leaf", t: "Finishing and landscaping", d: "Interiors, roof garden and final inspections.", at: 12 },
  { icon: "key", t: "Handover", d: "Keys in your hand, with a full walkthrough.", at: 13 },
];

export default function BuildingAnimation() {
  const [s, setS] = useState(0);
  const [run, setRun] = useState(0);
  const [seen, setSeen] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(box.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setS(LAST); return; }
    setS(1);
    const id = setInterval(() => setS((p) => { if (p >= LAST) { clearInterval(id); return p; } return p + 1; }), 650);
    return () => clearInterval(id);
  }, [seen, run]);

  const built = Math.max(0, Math.min(FLOORS, s - 1));
  const active = STAGES.reduce((a, st, i) => (s >= st.at ? i : a), -1);
  const pct = Math.round((s / LAST) * 100);

  return (
    <div className="build-grid" ref={box}>
      <div className="build-art">
        {s === LAST && <span className="done-chip">Completed and handed over</span>}
        <svg viewBox="0 0 400 470" role="img" aria-label="A tower rising from foundation to completion">
          <path className="bg-hill" d="M0 440V385C50 345 90 355 140 385S230 335 290 365 360 345 400 355V440z" />
          <line className="ground" x1="0" y1="440" x2="400" y2="440" />
          <rect className={`found ${s >= 1 ? "on" : ""}`} x="105" y="432" width="190" height="8" />
          {Array.from({ length: FLOORS }, (_, i) => {
            const y = 432 - (i + 1) * FH;
            return (
              <g key={i} className={`floor ${s >= i + 2 ? "on" : ""}`}>
                <rect className="slab" x="115" y={y} width="170" height={FH} />
                {[0, 1, 2, 3].map((j) => (
                  <rect key={j} className={`win ${s >= 12 ? "lit" : ""}`} style={{ transitionDelay: `${(FLOORS - i) * 70}ms` }} x={129 + j * 36} y={y + 11} width="20" height="14" />
                ))}
              </g>
            );
          })}
          <g className={`roof ${s >= 12 ? "on" : ""}`}>
            <rect x="115" y="62" width="170" height="10" />
            <circle cx="140" cy="54" r="9" /><circle cx="200" cy="52" r="11" /><circle cx="260" cy="54" r="9" />
          </g>
          <g className="crane" style={{ opacity: s >= 12 ? 0 : s === 0 ? 0.5 : 1 }}>
            <line x1="330" y1="440" x2="330" y2="20" />
            <g className="jib" style={{ transform: `translateY(${-built * FH}px)` }}>
              <line x1="170" y1="410" x2="360" y2="410" />
              <line x1="330" y1="410" x2="330" y2="395" />
              <line x1="200" y1="410" x2="200" y2="428" /><rect x="194" y="428" width="12" height="7" fill="var(--gold)" />
            </g>
          </g>
        </svg>
        <div className="progress">
          <div className="meter" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>
          <p className="pct">{pct}%<span> built</span></p>
        </div>
      </div>

      <div>
        <h2 className="h2">Watch a home go up, from soil to keys.</h2>
        <p className="lead light">Every Karmasiddhi tower follows the same five stages, and you can follow each one through site updates and visits.</p>
        <ul className="stage-list">
          {STAGES.map((st, i) => (
            <li key={st.t} className={i === active ? "on" : i < active ? "done" : ""}>
              <Icon name={st.icon} size={22} />
              <div><h3>{st.t}</h3><p>{st.d}</p></div>
            </li>
          ))}
        </ul>
        {s === LAST && <button className="btn btn-light" onClick={() => setRun((r) => r + 1)}>Replay construction</button>}
      </div>
    </div>
  );
}
