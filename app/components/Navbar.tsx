"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { navItems, type GoTo } from "./data";

export function PayzeLogo() {
  return (
    <span className="brand">
      <span className="brand-mark">
        <span />
      </span>
      <span>Payze</span>
    </span>
  );
}

export function Navbar({
  active,
  menuOpen,
  scrolled,
  onNavigate,
  onToggleMenu,
}: {
  active: string;
  menuOpen: boolean;
  scrolled: boolean;
  onNavigate: GoTo;
  onToggleMenu: () => void;
}) {
  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <button
        className="brand-button"
        onClick={() => onNavigate("home")}
        aria-label="Payze home"
      >
        <PayzeLogo />
      </button>
      <nav className={menuOpen ? "mobile-open" : ""}>
        {navItems.map(([label, id]) => (
          <button
            key={id}
            className={active === id ? "active" : ""}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>
      <button className="nav-cta" onClick={() => onNavigate("contact")}>
        Download App <ArrowRight size={14} />
      </button>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={onToggleMenu}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export type { GoTo } from "./data";
