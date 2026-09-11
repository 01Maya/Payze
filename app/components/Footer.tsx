import { PayzeLogo } from "./Navbar";
import type { GoTo } from "./data";

export function Footer({ go }: { go: GoTo }) {
  return (
    <footer>
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <PayzeLogo />
          <p>
            Payments made beautifully simple for people and businesses
            everywhere.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("services")}>Services</button>
          <button onClick={() => go("how-it-works")}>How It Works</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>
        <div>
          <h3>Support</h3>
          <button>Help Center</button>
          <button>FAQ</button>
          <button>Privacy</button>
          <button>Terms</button>
        </div>
        <div>
          <h3>Contact</h3>
          <span>hello@payze.com</span>
          <span>+1 800 555 0148</span>
          <span>New York · London · Singapore</span>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <span>© 2026 Payze. All rights reserved.</span>
        <div>
          <button aria-label="LinkedIn">in</button>
          <button aria-label="Twitter">t</button>
          <button aria-label="Instagram">ig</button>
        </div>
      </div>
    </footer>
  );
}
