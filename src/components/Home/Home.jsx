"use client";

import { useEffect } from "react";
import Image from "next/image";
import Typed from "typed.js";
import "./Home.css";


export default function Home() {
  useEffect(() => {
    
    import("scrollreveal").then(({ default: ScrollReveal }) => {
      ScrollReveal().reveal(".home-content, .heading", {
        origin: "top",
        distance: "80px",
        duration: 2000,
        delay: 200,
      });

      ScrollReveal().reveal(".home-img, .services-container, .kontakt form", {
        origin: "bottom",
      });

      ScrollReveal().reveal(".home-content h1, .home-img", {
        origin: "left",
      });

      ScrollReveal().reveal(".home-content p, .about-content", {
        origin: "right",
      });
    });

    
    const typed = new Typed(".multiple-text", {
      strings: ["Professionelle", "Reinigung"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy(); 
  }, []);

  return (
    <>
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          SD<span>pro</span>
        </h1>
        <h3>Gebäudereinigung</h3>
        <h3>
          <span className="multiple-text"></span>
        </h3>
        <p>
  SDpro ist Ihre zuverlässige Reinigungsfirma in Münster. Wir bieten <strong>professionelle Büroreinigung</strong>, 
  <strong> Praxisreinigung</strong>, <strong>Fensterputzen</strong> und mehr...
</p>

      </div>

      <div className="home-img">
       
      </div>
    </section>
    </>
  );
}
