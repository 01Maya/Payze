"use client";

import { ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import type { GoTo } from "./data";

export function CTA({ go }: { go: GoTo }) {
  return (
    <section className="cta section-shell">
      <Reveal className="cta-inner">
        <Eyebrow light>Payze for everyone</Eyebrow>
        <h2>
          Ready To Make Your
          <br />
          Payments Easier?
        </h2>
        <p>Join a growing community making money move better every day.</p>
        <div className="button-row">
          <button className="button button-white" onClick={() => go("contact")}>
            Get Started <ArrowRight size={16} />
          </button>
          <button
            className="button button-outline"
            onClick={() => go("contact")}
          >
            Contact Us
          </button>
        </div>
      </Reveal>
    </section>
  );
}
