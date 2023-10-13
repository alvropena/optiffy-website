import React from 'react';

export default function Page() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <h1>Welcome to [Your Agency Name]</h1>
        <p>Your tagline or a short description goes here.</p>
        {/* Add a CTA button if needed */}
        {/* <a href="#contact">Get in Touch</a> */}
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>Our Services</h2>
        {/* Add details about your services here */}
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <h2>Portfolio</h2>
        {/* Add your portfolio items here */}
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h2>What Our Clients Say</h2>
        {/* Add client testimonials here */}
      </section>

      {/* Contact Form Section */}
      <section id="contact">
        <h2>Contact Us</h2>
        <form action="your_server_endpoint" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea><br />

          <input type="submit" value="Send Message" />
        </form>
      </section>
    </div>
  );
}
