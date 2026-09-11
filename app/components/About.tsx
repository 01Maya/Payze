"use client";

import { useEffect, useState } from "react";
import { features, stats } from "./data";
import { Eyebrow, Reveal, useReveal } from "./Reveal";

function Counter({ target }: { target: number }) {
  const { ref, visible } = useReveal();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1100, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, target]);
  return (
    <div ref={ref} className="stat-number">
      {value.toLocaleString()}
      <sup>+</sup>
    </div>
  );
}

export function About() {
  return (
    <>
      <section id="about" className="about section-shell">
        <Reveal className="about-visual" direction="left">
          <div className="about-frame">
            <img
              src="/payze-about.png"
              alt="Payze financial consultant in a modern office"
            />
          </div>
          <div className="mini-photo">
            <img src="/payze-hero.png" alt="Payze customer using the app" />
          </div>
          <div className="trust-badge">
            <strong>
              1,485<sup>+</sup>
            </strong>
            <span>Trusted Clients</span>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={120} direction="right">
          <Eyebrow>About Company</Eyebrow>
          <h2>
            We Are The Best Online
            <br />
            Payment Gateway Agency
          </h2>
          <p>
            From your first transfer to your hundredth checkout, Payze is built
            around clarity, confidence, and a better way to move money.
          </p>
          <div className="feature-list">
            {features.map(([title, text, Icon], index) => (
              <Reveal
                className="feature-row"
                direction="right"
                mode="slide"
                delay={220 + index * 110}
                key={title}
              >
                <span className="icon-circle">
                  <Icon size={18} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="stats section-shell">
        {stats.map(([number, label]) => (
          <Reveal className="stat" key={label}>
            <Counter target={number} />
            <span>{label}</span>
          </Reveal>
        ))}
      </section>
    </>
  );
}
