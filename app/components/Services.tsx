"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { services } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

function ServiceCard({
  title,
  text,
  Icon,
  bullets,
  index,
}: {
  title: string;
  text: string;
  Icon: (typeof services)[number][2];
  bullets: readonly string[];
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped((current) => !current);
  }

  return (
    <Reveal className="service-card" delay={index * 80}>
      <button
        type="button"
        className={`service-card-inner${isFlipped ? " is-flipped" : ""}`}
        aria-label={`${isFlipped ? "Hide" : "Explore"} ${title} service`}
        aria-pressed={isFlipped}
        onClick={handleFlip}
      >
        <span className="service-card-face service-card-front">
          <span className="service-card-top">
            <span className="service-icon">
              <Icon size={19} />
            </span>
            <span className="service-index">0{index + 1}</span>
          </span>
          <span className="service-card-content">
            <h3>{title}</h3>
            <p className="service-description">{text}</p>
            <span className="service-hint">Tap to flip</span>
          </span>
        </span>
        <span className="service-card-face service-card-back">
          <span className="service-back-icon">
            <Icon size={21} />
          </span>
          <span className="service-index">0{index + 1}</span>
          <strong>{title}</strong>
          <ul className="service-bullets">
            {bullets.map((bullet) => (
              <li key={bullet}>
                <Check size={12} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </span>
      </button>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="services">
      <div className="section-shell">
        <Reveal className="center-heading">
          <Eyebrow>Our Services</Eyebrow>
          <h2>We Prioritize Transaction Security</h2>
          <p>
            Thoughtful financial tools designed to help you move with
            confidence.
          </p>
        </Reveal>
        <div className="service-grid">
          {services.map(([title, text, Icon, bullets], index) => (
            <ServiceCard
              key={title}
              title={title}
              text={text}
              Icon={Icon}
              bullets={bullets}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
