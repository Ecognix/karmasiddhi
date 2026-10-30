// A faint, detailed tower block behind the hero text. Floors rise one by one, each outlined in a green-to-gold border with a grid of windows;
// then rooftop gardens and a spire appear and a few windows glint. Opaque backings in the page colour let the hero's curvy lines pass behind it.
// Floors per tower keep the same overall heights as before (27px per floor).
const FH = 27;
const GROUND = 560;
const TOWERS = [
  { x: 40, w: 70, floors: 9, crown: 0 },
  { x: 125, w: 82, floors: 15, crown: 1 },
  { x: 222, w: 96, floors: 20, crown: 2, spire: true },
  { x: 333, w: 70, floors: 11, crown: 0 },
];
const INSET = 16;
const hit = (n) => { const v = Math.sin(n * 91.7) * 10000; return v - Math.floor(v); };

function build(t, i) {
  const bodyFloors = t.floors - t.crown;
  const floors = Array.from({ length: t.floors }, (_, k) => {
    const crown = k >= bodyFloors;
    const x = crown ? t.x + INSET : t.x, w = crown ? t.w - 2 * INSET : t.w, y = GROUND - (k + 1) * FH;
    const n = Math.max(1, Math.floor((w - 10) / 19)), gap = (w - n * 9) / (n + 1);
    const wins = Array.from({ length: n }, (_, j) => ({ x: x + gap + j * (9 + gap), y: y + 7, lit: hit(i * 53 + k * 7 + j) > 0.7, r: hit(k + j + i) }));
    return { k, x, w, y, wins };
  });
  const backs = [{ x: t.x, y: GROUND - bodyFloors * FH, w: t.w, h: bodyFloors * FH }];
  if (t.crown) backs.push({ x: t.x + INSET, y: GROUND - t.floors * FH, w: t.w - 2 * INSET, h: t.crown * FH });
  return { floors, backs, start: i * 0.45, top: GROUND - t.floors * FH };
}

export default function HeroBuilding() {
  const towers = TOWERS.map((t, i) => ({ t, ...build(t, i) }));
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 440 580">
        <defs>
          <linearGradient id="ha-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="580">
            <stop offset="0" stopColor="#CFA02A" stopOpacity=".45" />
            <stop offset="1" stopColor="#15858A" stopOpacity=".2" />
          </linearGradient>
          <linearGradient id="ha-stroke" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="580">
            <stop offset="0" stopColor="#1A9468" stopOpacity=".3" />
            <stop offset=".5" stopColor="#7FA23F" stopOpacity=".55" />
            <stop offset="1" stopColor="#CFA02A" stopOpacity=".9" />
          </linearGradient>
          <linearGradient id="ha-base" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="440" y2="0">
            <stop offset="0" stopColor="#CFA02A" stopOpacity="0" />
            <stop offset=".5" stopColor="#CFA02A" />
            <stop offset="1" stopColor="#CFA02A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ha-mfade" gradientUnits="userSpaceOnUse" x1="0" y1={GROUND - 110} x2="0" y2={GROUND + 2}>
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
          <mask id="ha-mask" maskUnits="userSpaceOnUse" x="-40" y="-80" width="520" height="700">
            <rect x="-40" y="-80" width="520" height="700" fill="url(#ha-mfade)" />
          </mask>
        </defs>
        <g>
          {towers.flatMap(({ backs, start }, i) => backs.map((b, j) => (
            <rect key={`${i}-${j}`} className="ha-back" x={b.x} y={b.y} width={b.w} height={b.h} style={{ animationDelay: `${start + 0.2}s` }} />
          )))}
        </g>
        <line className="ha-base" x1="0" y1={GROUND} x2="440" y2={GROUND} stroke="url(#ha-base)" />
        <g className="ha-art" mask="url(#ha-mask)">
          {towers.map(({ t, floors, start, top }, i) => {
            const done = start + t.floors * 0.12;
            return (
              <g key={i}>
                {floors.map((f) => (
                  <g key={f.k} className="ha-floor" style={{ animationDelay: `${start + f.k * 0.12}s` }}>
                    <rect className="ha-slab" pathLength="1" x={f.x} y={f.y} width={f.w} height={FH} fill="url(#ha-grad)" stroke="url(#ha-stroke)" style={{ animationDelay: `${start + f.k * 0.12}s` }} />
                    {f.wins.map((w, j) => (
                      <rect key={j} className={w.lit ? "ha-win ha-lit" : "ha-win"} x={w.x} y={w.y} width="9" height="13" rx="1.5"
                        style={w.lit ? { animationDelay: `${done + 1 + w.r * 3}s` } : undefined} />
                    ))}
                  </g>
                ))}
                {t.spire && <line className="ha-spire" pathLength="1" x1={t.x + t.w / 2} x2={t.x + t.w / 2} y1={top} y2={top - 30} stroke="url(#ha-stroke)" style={{ animationDelay: `${done}s` }} />}
                {t.spire && (
                  <circle className="ha-tree" cx={t.x + t.w / 2} cy={top - 36} r="6" style={{ animationDelay: `${done + 0.4}s` }} />
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
