import React from 'react';
import Link from 'next/link';

const About: React.FC = () => (
    <div className="about-container">
        <header className="about-header">
            <h1 className="about-title">About Us</h1>
        </header>

        <nav className="about-nav">
            <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
        </nav>

        <section className="about-section">
            <p className="about-description">
                Our agency is dedicated to providing impactful digital marketing solutions. With a team of creative strategists and a focus on results, we help businesses connect with their audience and grow online.
            </p>
        </section>
    </div>
);

export default About;
