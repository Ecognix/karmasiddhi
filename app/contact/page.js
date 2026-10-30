import ContactForm from "../../components/ContactForm";

export const metadata = { title: "Contact", description: "Book a site visit or speak to the Karmasiddhi Nirmaan team in Guwahati." };

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="h1">Book a site visit</h1>
          <p className="lead">Tell us what you are looking for. We will call within one working day and arrange a visit at a time that suits you.</p>
        </div>
      </section>

      <section className="wrap map-wrap">
        <iframe
          className="map"
          title="Karmasiddhi Nirmaan office at KRB Rd, Bharalumukh, Guwahati"
          src="https://www.google.com/maps?q=KRB+Rd,+Bharalumukh,+Guwahati,+Assam+781009&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <p className="muted map-note">KRB Rd, Bharalumukh, Guwahati, Assam 781009. <a className="link" href="https://www.google.com/maps/search/?api=1&query=KRB+Rd+Bharalumukh+Guwahati+Assam+781009" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
      </section>

      <section className="section-tight">
        <div className="wrap split contact">
          <ContactForm />
          <aside className="prose">
            <h3>Head office</h3>
            <p>Karmasiddhi Nirmaan<br />KRB Rd, Bharalumukh<br />Guwahati, Assam 781009</p>
            <h3>Call or write</h3>
            <p><a href="tel:+919365910512">+91 93659 10512</a><br /><a href="mailto:hello@karmasiddhinirmaan.in">hello@karmasiddhinirmaan.in</a></p>
            <h3>Office hours</h3>
            <p>Open from 10 am to 7 pm.</p>
            <h3>What happens next</h3>
            <p>An advisor calls you within one working day, confirms your preferred project and time, and sends the price sheet and plans before you arrive. There is no obligation to book.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
