import "@/components/Footer/Footer.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Unterhaltsreinigung Münster | SDpro Gebäudereinigung",
  description: "Regelmäßige Unterhaltsreinigung für Büro, Praxis, Wohnung oder Haus in Münster.",
  keywords: "Unterhaltsreinigung Münster, regelmäßige Reinigung, SDpro Reinigungsfirma",
  robots: "index, follow"
};


export default function UnterhaltsreinigungPage() {
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

      <h1 className="service-title">Unterhaltsreinigung</h1>
      <h2 className="service-subtitle">Unsere Leistungen im Bereich Unterhaltsreinigung</h2>

      <div className="service-lists">
        <ul>
          <li>Staub wischen von außen</li>
          <li>Küche von außen reinigen</li>
          <li>Reinigung des Badezimmers</li>
          <li>Dusche</li>
          <li>Toilettenreinigung</li>
        </ul>
        <ul>
          <li>Die ganze Wohnung staubsaugen</li>
          <li>Den Boden der gesamten Wohnung waschen</li>
          <li>Abwischen der Tasten</li>
          <li>Türen abwischen</li>
          <li>Elektrogeräte äußerlich abwischen</li>
          <li>Kochfelder reinigen</li>
          <li>Geschirr spülen</li>
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
