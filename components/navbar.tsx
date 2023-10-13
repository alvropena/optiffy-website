import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between m-5">
      <div>
        <Link href="/">Optiffy</Link>
      </div>
      <div className="flex flex-row w-1/3 justify-between">
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/testimonials">Testimonials</Link>
      </div>
      <div className="flex flex-row justify-between">
        <Link href="/">Contact Us</Link>
      </div>
    </nav>
  );
}
