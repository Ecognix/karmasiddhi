// Three contour lines that draw themselves across the hero background (animation lives in globals.css).
const WAVES = [
  "M0 380 C 160 340, 260 300, 380 330 S 560 250, 700 280 S 900 180, 1010 210 S 1130 160, 1200 120",
  "M0 420 C 200 390, 300 360, 430 380 S 620 320, 760 340 S 960 270, 1070 290 S 1150 250, 1200 220",
  "M0 460 C 180 440, 330 420, 480 435 S 700 390, 840 405 S 1040 360, 1200 340",
];

export default function HeroLines() {
  return (
    <svg className="contours" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
      {WAVES.map((d) => (<path key={d} pathLength="1" d={d} />))}
    </svg>
  );
}
