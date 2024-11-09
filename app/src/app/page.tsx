import React from 'react';
import Link from 'next/link'; // Import the CSS file

const Home: React.FC = () => (
  <div className="container">
    <header className="header">
      <h1>Welcome to Our Digital Marketing Agency</h1>
      <p>Empowering businesses with creative and data-driven marketing strategies.</p>
    </header>

    <nav className="nav">
      <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
    </nav>

    <section className="expertise-section">
      <h2>Our Expertise</h2>
      <div className="services-grid">
        {["SEO", "Social Media Marketing", "Content Creation"].map((service) => (
          <div key={service} className="service-card">
            <h3>{service}</h3>
            <p>Professional {service.toLowerCase()} to boost your business.</p>
          </div>
        ))}
      </div>
    </section>

    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p>
        Our team combines innovation and expertise to deliver solutions that help your business reach new heights.
        Whether it’s brand growth, lead generation, or creative strategies, we’re here to make it happen.
      </p>
    </section>
  </div>
);

export default Home;
