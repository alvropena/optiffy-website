import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center m-5">
      <div>
        <Link href="/" className="text-lg cursor-pointer">
          Optiffy
        </Link>
      </div>
      <div className="hidden sm:flex flex-row w-1/3 justify-between gap-8">
        <Link href="/services" className="text-lg cursor-pointer">
          Services
        </Link>
        <Link href="/portfolio" className="text-lg cursor-pointer">
          Portfolio
        </Link>
        <Link href="/team" className="text-lg cursor-pointer">
          Team
        </Link>
        <Link href="/blog" className="text-lg cursor-pointer">
          Blog
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-3">
        <Button variant={"outline"} >
          Contact Us
        </Button>
        <ModeToggle />
        <Button variant={"outline"} className="sm:hidden">
          <Menu />
        </Button>
      </div>
    </nav>
  );
}
