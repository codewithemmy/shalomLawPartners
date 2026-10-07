import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-brand" onClick={() => setMenuOpen(false)}>
          <img
            src="/assets/images/common/chris_okeke_logo.jpeg"
            alt="Chris Okeke, SAN & Co. Logo"
            className="site-brand-mark"
          />
          <span className="site-brand-name">
            Chris Okeke, SAN & Co.
            <span className="site-brand-caption">
              Counsel · Advocacy · Advisory
            </span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="desktop-nav-list">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className="nav-link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" strokeWidth="1.7" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.7" />
            </svg>
          )}
        </button>

        <Link to="/contact" className="header-cta">
          Book a consultation
        </Link>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <ul className="mobile-nav-list">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
