"use client";

import { ArrowDown, ArrowRight, Check, Wallet } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import type { GoTo } from "./data";

export function Hero({ go }: { go: GoTo }) {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <Reveal mode="slide" direction="left">
          <Eyebrow>Feel The Convenience</Eyebrow>
        </Reveal>
        <Reveal mode="slide" direction="left" delay={100}>
          <h1>
            Send, Receive, Top-Up
            <br />
            <em>Your Money Easily</em>
          </h1>
        </Reveal>
        <Reveal mode="slide" direction="left" delay={180}>
          <p>
            Payze makes every payment feel simple, secure, and beautifully
            effortless. Your money, moving at your pace.
          </p>
        </Reveal>
        <Reveal mode="slide" direction="left" delay={260}>
          <div className="button-row">
            <button
              className="button button-primary"
              onClick={() => go("contact")}
            >
              Get Started <ArrowRight size={16} />
            </button>
            <button className="button button-ghost" onClick={() => go("about")}>
              Learn More <ArrowDown size={15} />
            </button>
          </div>
        </Reveal>
      </div>
      <div className="hero-art">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <Reveal className="hero-person" delay={260}>
          <img
            src="/payze-hero.png"
            alt="Payze customer holding payment cards"
          />
        </Reveal>
        <div className="balance-chip">
          <Wallet size={16} />
          <span>Available balance</span>
          <strong>$12,840.50</strong>
        </div>
      </div>
    </section>
  );
}

export function FloatingCards({ go }: { go: GoTo }) {
  return (
    <section className="floating-cards section-shell">
      <Reveal className="update-card">
        <div>
          <div className="card-kicker">Payze daily</div>
          <h3>Always Update Every Day</h3>
          <p>
            Stay close to every movement, with smart insights delivered to you.
          </p>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            aria-label="Your email"
            placeholder="Your Email"
            type="email"
          />
          <button>Request</button>
        </form>
      </Reveal>
      <Reveal className="help-card" delay={120}>
        <div className="check-list">
          {[
            "Online Payment",
            "Platform Support",
            "Secure Transaction",
            "Responsive Web App",
            "Diverse Group Payments",
            "Lock Protection",
          ].map((item, index) => (
            <span
              key={item}
              className="check-list-item"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <Check aria-hidden="true" size={14} strokeWidth={2.5} />
              {item}
            </span>
          ))}
        </div>
        <div>
          <div className="card-kicker">Need a hand?</div>
          <h3>How Can I Help You?</h3>
          <p>
            Everything you need to take control of your financial future, in one
            place.
          </p>
          <button className="text-link" onClick={() => go("contact")}>
            Read More <ArrowRight size={13} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
