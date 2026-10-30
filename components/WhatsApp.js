import Icon from "./Icon";
import { WHATSAPP } from "../lib/data";

export default function WhatsApp() {
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Karmasiddhi Nirmaan, I would like to know more about your projects.")}`;
  return (
    <a className="wa" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with Karmasiddhi Nirmaan on WhatsApp">
      <span className="wa-label">Chat with us</span>
      <span className="wa-btn"><Icon name="whatsapp" size={28} /></span>
    </a>
  );
}
