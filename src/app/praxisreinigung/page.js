import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Praxisreinigung Münster | SDpro Gebäudereinigung",
  description: "Hygienische Praxisreinigung für Arztpraxen und medizinische Einrichtungen in Münster.",
  keywords: "Praxisreinigung Münster, Arztpraxis Reinigung, medizinische Reinigung Münster, SDpro",
  robots: "index, follow"
};


export default function PraxisreinigungPage() {
  return (
    <>
    <main className="service-page">
      <header className="header">
        <Link href="/" className="logo">
          <Image
            src="/images/logo-sdpro-test.webp"
            alt="SDpro Logo"
            width={80}
            height={80}
            priority
          />
          SD<span>pro</span>
        </Link>
      </header>

      <h1 className="service-title">Praxisreinigung</h1>
      <h2 className="service-subtitle">Unsere Leistungen im Bereich Praxisreinigung</h2>

      <div className="service-lists">
        <ul>
          <li>Tägliche Reinigung des Bodenbelags mit geeigneten professionellen Reinigungsmitteln und Geräten</li>
          <li>Tägliche Entfernung von Staub und anderen kleinen Verunreinigungen von Oberflächen</li>
          <li>Tägliche Pflege für die Hygiene und das gute Aussehen Ihrer medizinischen Geräte und Möbel</li>
          <li>Tägliche Reinigung der Badezimmer</li>
          <li>Persönliche Praxisreinigung</li>
        </ul>
      </div>

      <div className="h-btn">
        <Link href="/" className="btn">Zurück zur Startseite</Link>
      </div>
 </main>
    <Footer />
    </>
  );
}
