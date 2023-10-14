"use client";
import ContactForm from "@/components/contact-form";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col m-5">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center gap-5 min-h-screen">
        <h1 className="text-6xl font-semibold justify-center">Waste no more time with operational tasks.</h1>
        <p className="text-gray-500 text-xl">
          Let us help you automate your work. The future has arrived, let&apos;s
          see how you can incorporate it to your work.
        </p>
        <Button size={'lg'}>Start now</Button>
      </section>

      {/* Services Section */}
      <section id="services" className="flex flex-col min-h-screen">
        <h2 className="text-3xl">Our Services</h2>
        <p>Our mission is to make companies stop spending time with operational tasks.</p>
        {/* Add details about your services here */}
      </section>

      {/* Clients Section */}
      <section id="portfolio" className="flex flex-col min-h-screen">
        <h2 className="text-3xl">What our Clients Say</h2>
        <p>Lorem Ipsum</p>
        {/* Add your portfolio items here */}
      </section>

      {/* Team Section */}
      <section id="portfolio" className="flex flex-col min-h-screen">
        <h2 className="text-3xl">Our Team</h2>
        <p>Lorem Ipsum</p>
        {/* Add your portfolio items here */}
      </section>

      {/* Contact Form Section */}
      <section id="contact">
        <h2 className="text-3xl">Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
}
