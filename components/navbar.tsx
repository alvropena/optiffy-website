import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between m-5">
      <div>
        <Link href="/" className="text-lg">
          Optiffy
        </Link>
      </div>
      <div className="flex flex-row w-1/3 justify-between gap-8">
        <Link href="/services" className="text-lg">
          Services
        </Link>
        <Link href="/portfolio" className="text-lg">
          Portfolio
        </Link>
        <Link href="/testimonials" className="text-lg">
          Team
        </Link>
        <Link href="/testimonials" className="text-lg">
          Blog
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-3">        
        <Button variant={"outline"}>Contact Us</Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
