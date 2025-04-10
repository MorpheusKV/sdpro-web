"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
    <header className="header">
      <Link href="/" className="logo">
          <Image
            src="/images/logo-sdpro-test.webp"
            alt="SDpro Logo"
            width={80}
            height={80}
            priority
            className="logo-img"
          />
          SD<span>pro</span>
      </Link>

      <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`} id="menu-icon"
       onClick={toggleMenu}
       style={{cursor: "pointer"}}
       ></i>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
  <Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link>
  <Link href="#about-us" onClick={() => setMenuOpen(false)}>Über Uns</Link>
  <Link href="#services" onClick={() => setMenuOpen(false)}>Leistungen</Link>
  <Link href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
</nav>

    </header>
    </>
  );
}
