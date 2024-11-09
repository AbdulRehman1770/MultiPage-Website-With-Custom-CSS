import React from 'react';
import Link from 'next/link';

const Services: React.FC = () => (
  <div className="services-container">
    <header className="services-header">
      <h1 className="services-title">Our Services</h1>
    </header>

    <nav className="services-nav">
      <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
    </nav>

    <section className="services-section">
      <div className="services-grid">
        {["SEO", "Social Media Marketing", "Content Creation", "Email Marketing", "PPC Advertising", "Brand Strategy"].map((service, idx) => (
          <div key={idx} className="service-card">
            <h2 className="service-title">{service}</h2>
            <p className="service-description">High-quality {service.toLowerCase()} to drive your business forward.</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
