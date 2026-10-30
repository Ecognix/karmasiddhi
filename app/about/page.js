import Link from "next/link";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import Carousel from "../../components/Carousel";
import Stagger from "../../components/Stagger";
import { stats, values, teams } from "../../lib/data";

export const metadata = { title: "About", description: "The story, principles and people behind Karmasiddhi Nirmaan, Guwahati." };

const timeline = [
  ["2008", "Karmasiddhi Nirmaan is founded in Guwahati and delivers its first 24-home apartment block."],
  ["2012", "We move into commercial development with our first office building on GS Road."],
  ["2017", "Our first gated community opens, with a clubhouse, rainwater harvesting and solar-powered common areas."],
  ["2021", "We pass 3,000 families housed and open a dedicated customer care office."],
  ["2025", "Hill villas and a business park enter development, our largest pipeline to date."],
];

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="h1">We build where Guwahati is going.</h1>
          <p className="lead">Karmasiddhi Nirmaan began with a simple rule: build every home as if our own family will live in it. Eighteen years and more than three thousand families later, the rule has not changed.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal as="h2" className="h2">Our approach</Reveal>
          <Reveal className="prose" delay={100}>
            <p>We are a design-led developer with our own architects, engineers and site teams. Decisions are made close to the work, and quality is checked by the people who answer for it.</p>
            <p>We buy land only where we can verify the title and secure approvals. We build in phases we can finish. We sell at prices we can explain. It is a slower way to grow, and a safer way to buy.</p>
          </Reveal>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          <Carousel className="dark" perView={2} mobileView={2} label="Karmasiddhi Nirmaan in numbers">
            {stats.map((s) => (<div key={s.l} className="stat"><strong>{s.n}</strong><span>{s.l}</span></div>))}
          </Carousel>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Principles we build by</Reveal>
          <div className="grid2 values">
            {values.map((v) => (<div key={v.t}><h3>{v.t}</h3><p className="muted">{v.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Our journey</Reveal>
          <ol className="timeline">
            {timeline.map(([y, t]) => (<li key={y}><strong>{y}</strong><p>{t}</p></li>))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">The teams behind your home</Reveal>
          <Stagger className="grid4 gap-top">
            {teams.map((t) => (
              <article key={t.t} className="icard">
                <span className="ibox"><Icon name={t.i} /></span>
                <h3>{t.t}</h3>
                <p className="muted">{t.d}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2 className="h2">Talk to the people who build your home.</h2>
          <Link href="/contact" className="btn btn-light">Contact us</Link>
        </div>
      </section>
    </>
  );
}
