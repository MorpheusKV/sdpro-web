
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contakt";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Gebäudereinigung Münster – SDpro für Büro, Praxis & Fensterputzen",
  description: "SDpro bietet zuverlässige Gebäudereinigung in Münster – Büroreinigung, Praxisreinigung, Fensterputzen, Unterhaltsreinigung und mehr...",
  keywords: "Gebäudereinigung Münster, Reinigungsfirma Münster, Büroreinigung, Praxisreinigung, Fensterputzen, Unterhaltsreinigung, SDpro",
  robots: "index, follow"
};


export default function Page() {
  return (
    <main>
     <Header />
      <Home />
      <AboutUs />
    <Services />
    <Contact />
    <Footer />
    </main>
  );
}
