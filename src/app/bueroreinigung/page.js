import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Büroreinigung Münster | SDpro Gebäudereinigung",
  description: "Professionelle Büroreinigung in Münster von SDpro – zuverlässig, gründlich und flexibel. Jetzt Termin sichern!",
  keywords: "Büroreinigung Münster, Reinigungsfirma Münster, Büro putzen, SDpro, gewerbliche Reinigung",
  robots: "index, follow"
};

export default function BueroreinigungPage() {
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
          />
          SD<span>pro</span>
        </Link>
      </header>
      <h1 className="service-title">Büroreinigung</h1>
      <h2 className="service-subtitle">
        Unsere Leistungen im Bereich Büroreinigung
      </h2>
      <div className="service-lists">
        <ul>
          <li>Abwischen von Staub</li>
          <li>Außenabwischen von Schreibtischen</li>
          <li>Schränke</li>
          <li>Schalter</li>
          <li>Türe und Elektrogeräte</li>
        </ul>
        <ul>
          <li>Küche von außen reinigen</li>
          <li>Staubsaugen</li>
          <li>Bodenwaschen</li>
          <li>Türen abwischen</li>
          <li>Elektrogeräte äußerlich abwischen</li>
          <li>Reinigung von Bad und Toilette</li>
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
