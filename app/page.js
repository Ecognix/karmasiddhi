import Link from "next/link";
import Reveal from "../components/Reveal";
import Plate from "../components/Plate";
import Icon from "../components/Icon";
import Carousel from "../components/Carousel";
import Stagger from "../components/Stagger";
import HeroLines from "../components/HeroLines";
import HeroBuilding from "../components/HeroBuilding";
import BuildingAnimation from "../components/BuildingAnimation";
import { projects, specs, stats, why, amenities, process, testimonials, faqs } from "../lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroLines />
        <HeroBuilding />
        <div className="wrap hero-inner">
          <h1 className="hero-title">
            <span className="line"><span>Destined to build</span></span>
            <span className="line"><span><b className="lux">success</b></span></span>
          </h1>
          <p className="hero-sub">For eighteen years Karmasiddhi Nirmaan has built luxury apartments, villas and workplaces in Guwahati, finished on time, made to last and honest about what they cost.</p>
          <div className="hero-actions">
            <Link href="/projects" className="btn">View our projects</Link>
            <Link href="/contact" className="btn btn-ghost">Book a site visit</Link>
          </div>
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
        <div className="wrap split">
          <Reveal as="h2" className="h2">A city of hills and a river deserves careful building.</Reveal>
          <Reveal className="prose" delay={120}>
            <p>Guwahati sits between the Brahmaputra and the Shillong plateau. It floods, it shakes and it rains harder than most cities. We design every project around those facts: engineered foundations, proper drainage, earthquake-resistant structures and materials chosen for this climate.</p>
            <p>The result is homes that stay dry, stay cool and stay in good condition long after the brochure is forgotten.</p>
            <Link href="/about" className="link">Read our story</Link>
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Why families and companies choose Karmasiddhi Nirmaan</Reveal>
          <Stagger className="grid3 gap-top">
            {why.map((w) => (
              <article key={w.t} className="icard">
                <span className="ibox"><Icon name={w.i} /></span>
                <h3>{w.t}</h3>
                <p className="muted">{w.d}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="build">
        <div className="wrap"><BuildingAnimation /></div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Reveal as="h2" className="h2">Current and recent projects</Reveal>
            <Link href="/projects" className="link">All projects</Link>
          </div>
          <Stagger className="grid3">
            {projects.slice(0, 3).map((p) => (
              <Link key={p.slug} href="/projects" className="card">
                <div className="card-art"><Plate seed={p.seed} /></div>
                <div className="card-body">
                  <span className="tag">{p.status}</span>
                  <h3>{p.name}</h3>
                  <ul className="chips">
                    <li><Icon name="pin" size={16} />{p.area}</li>
                    <li><Icon name="ruler" size={16} />{specs[p.slug].size}</li>
                    <li><Icon name="calendar" size={16} />{specs[p.slug].possession}</li>
                  </ul>
                </div>
              </Link>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Everyday comforts, built in</Reveal>
          <p className="lead">Our residential projects include these as standard, not as paid extras.</p>
          <Carousel className="gap-top" perView={2} label="Amenities">
            {amenities.map((a) => (
              <article key={a.t} className="icard">
                <span className="ibox"><Icon name={a.i} /></span>
                <h3>{a.t}</h3>
                <p className="muted">{a.d}</p>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Buying a home, in four steps</Reveal>
          <Stagger as="ol" className="steps">
            {process.map((s, i) => (
              <li key={s.t}><span className="step-n">{i + 1}</span><h3>{s.t}</h3><p className="muted">{s.d}</p></li>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">What our customers say</Reveal>
          <Carousel className="gap-top" perView={1} one label="Customer testimonials">
            {testimonials.map((t) => (
              <figure key={t.n} className="icard quote">
                <div className="stars" aria-label="5 out of 5">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={16} />)}</div>
                <blockquote>{t.q}</blockquote>
                <figcaption className="muted">{t.n}</figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal as="h2" className="h2">Questions buyers ask us</Reveal>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<Icon name="plus" size={20} /></summary>
                <p className="muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2 className="h2">See it standing before you decide.</h2>
          <p>Book a site visit and walk through a finished home with one of our advisors.</p>
          <Link href="/contact" className="btn btn-light">Book a site visit</Link>
        </div>
      </section>
    </>
  );
}
