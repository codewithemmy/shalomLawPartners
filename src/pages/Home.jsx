import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Corporate & Commercial",
    description:
      "Practical legal guidance for businesses, transactions, governance and regulatory matters.",
  },
  {
    number: "02",
    title: "Dispute Resolution",
    description:
      "Strategic representation in litigation, arbitration and complex commercial disputes.",
  },
  {
    number: "03",
    title: "Property & Real Estate",
    description:
      "Clear counsel through property transactions, title matters and real estate disputes.",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div
          className="home-hero-media"
          role="img"
          aria-label="The courthouse, representing the firm's commitment to justice"
          style={{ backgroundImage: "url('/assets/images/common/1.jpg')" }}
        />
        <div className="home-hero-inner">
          <span className="eyebrow">Chris Okeke, SAN &amp; Co.</span>
          <h1>
            Clear counsel.
            <br />
            <span>Steadfast advocacy.</span>
          </h1>
          <p className="home-hero-copy">
            We bring experience, sound judgment and personal attention to the
            legal matters that shape your future.
          </p>
          <div className="home-hero-actions">
            <Link to="/contact" className="button-primary">
              Book a consultation <span aria-hidden="true">&#8594;</span>
            </Link>
            <Link to="/services" className="button-outline">
              Explore our practice
            </Link>
          </div>
        </div>
        <div className="hero-note">Lagos · Abuja · Port Harcourt</div>
      </section>

      <section className="home-intro" aria-labelledby="intro-title">
        <div className="intro-stat">
          <strong>
            Since
            <br />
            1996
          </strong>
          <span>Decades of continuous legal practice</span>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">A trusted legal partner</span>
          <h2 className="section-heading" id="intro-title">
            Experience that puts your interests first.
          </h2>
          <p>
            Chris Okeke, SAN &amp; Co. is a Nigerian law firm built on
            diligence, integrity and a deep understanding of the law. We combine
            the reach of an experienced team with direct, considered client
            care.
          </p>
          <Link to="/about" className="text-link">
            Meet the firm <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </section>

      <section className="practice-section" aria-labelledby="practice-title">
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <span className="eyebrow">How we can help</span>
              <h2 className="section-heading" id="practice-title">
                Our practice areas
              </h2>
            </div>
            <Link to="/services" className="text-link">
              View all services <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
          <div className="practice-grid">
            {services.map((service) => (
              <article className="practice-item" key={service.number}>
                <span className="practice-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  to="/services"
                  className="text-link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more <span aria-hidden="true">&#8594;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview" aria-labelledby="about-title">
        <div className="about-image-wrap">
          <img
            className="about-image"
            src="/assets/images/common/4.jpg"
            alt="Interior of the firm's legal practice"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">Our approach</span>
          <h2 className="section-heading" id="about-title">
            Personal attention. Principled advice.
          </h2>
          <p>
            Every matter deserves careful listening and a strategy shaped around
            the people and priorities involved. Our team works with clients to
            make complex legal questions clearer and more manageable.
          </p>
          <Link to="/team" className="text-link">
            Get to know our team <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
