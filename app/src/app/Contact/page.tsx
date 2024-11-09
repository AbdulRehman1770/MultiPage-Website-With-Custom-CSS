import React from 'react';
import Link from 'next/link';

const Contact: React.FC = () => (
  <div className="contact-container">
    <header className="contact-header">
      <h1 className="contact-title">Get In Touch</h1>
    </header>

    <nav className="contact-nav">
      <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
    </nav>

    <section className="contact-section">
      <form className="contact-form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-input" id="name" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-input" id="email" type="email" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea className="form-input" id="message"></textarea>
        </div>
        <button className="form-button">
          Send Message
        </button>
      </form>
      
    </section>
  </div>
);

export default Contact;
