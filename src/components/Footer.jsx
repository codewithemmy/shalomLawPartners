import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-column">
          <Link to="/" className="footer-brand">
            <img src="/assets/images/common/chris_okeke_logo.jpeg" alt="" />
            Chris Okeke, SAN &amp; Co.
          </Link>
          <p className="footer-tagline">
            Thoughtful counsel and resolute advocacy, grounded in decades of
            practice.
          </p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <ul>
            <li>
              <Link to="/about">About the firm</Link>
            </li>
            <li>
              <Link to="/services">Practice areas</Link>
            </li>
            <li>
              <Link to="/team">Our team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Visit or call</h2>
          <address>
            27/29 King George V Rd, Marina, Lagos.
            <p>
              <a href="tel:+2348032012944">0803 201 2944</a>
            </p>
            <a href="mailto:chris@chrisokekesanandco.org">
              chris@chrisokekesanandco.org
            </a>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Chris Okeke, SAN &amp; Co. All rights
        reserved.
      </div>
    </footer>
  );
}
