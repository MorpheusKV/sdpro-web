import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Kindergartenreinigung Münster | SDpro Gebäudereinigung",
  description: "Saubere und sichere Umgebung für Kinder – Kindergartenreinigung in Münster mit SDpro.",
  keywords: "Kindergartenreinigung Münster, Kita Reinigung, Reinigung für Kindergärten, SDpro",
  robots: "index, follow"
};


export default function KindergartenreinigungPage() {
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

      <h1 className="service-title">Kindergartenreinigung</h1>
      <h2 className="service-subtitle">Unsere Leistungen im Bereich Kindergartenreinigung</h2>

      <div className="service-lists">
        <ul>
          <li>Stühlen</li>
          <li>Tischen und Spielzeug</li>
          <li>Toilette Reinigung</li>
          <li>Türen abwischen</li>
          <li>Staubsaugen</li>
          <li>Abwischen von Staub</li>
          <li>Reinigung von Heizkörpern und Beleuchtungskörpern</li>
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
