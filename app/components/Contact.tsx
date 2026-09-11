import { MessageCircle, ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <Reveal className="contact-copy" direction="left">
        <Eyebrow>Contact Us</Eyebrow>
        <h2>Let&apos;s Build A Better Payment Experience</h2>
        <p>
          Have a question, an idea, or just want to say hello? Our team is here
          to help.
        </p>
        <div className="contact-detail">
          <MessageCircle size={18} />
          <span>hello@payze.com</span>
        </div>
      </Reveal>
      <Reveal className="contact-form" delay={120} direction="right">
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            Name
            <input required placeholder="Your name" />
          </label>
          <label>
            Email
            <input required type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea required placeholder="Tell us how we can help" rows={4} />
          </label>
          <button className="button button-primary" type="submit">
            Send Message <ArrowRight size={16} />
          </button>
        </form>
      </Reveal>
    </section>
  );
}
