import { steps } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="process section-shell">
      <Reveal className="center-heading">
        <Eyebrow>How It Works</Eyebrow>
        <h2>Simple by design. Powerful by nature.</h2>
        <p>
          Four clear steps between you and a more effortless financial life.
        </p>
      </Reveal>
      <div className="steps">
        {steps.map(([number, title, text], index) => (
          <Reveal className="step" delay={index * 120} key={number}>
            <span className="step-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
