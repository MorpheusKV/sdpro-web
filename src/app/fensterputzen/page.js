import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Fensterputzen Münster | SDpro Gebäudereinigung",
  description: "Glasklare Fensterreinigung in Münster für Privat- und Geschäftskunden. Jetzt bei SDpro buchen!",
  keywords: "Fensterputzen Münster, Fensterreinigung, Glasreinigung Münster, SDpro",
  robots: "index, follow"
};


export default function FensterputzenPage() {
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

      <h1 className="service-title">Fensterputzen</h1>
      <h2 className="service-subtitle">Unsere Leistungen im Bereich Fensterputzen</h2>

      <div className="service-lists">
        <ul>
          <li>Reinigung von Glasflächen innen und außen</li>
          <li>Entfernung von Schmutz, Staub und Wasserflecken</li>
          <li>Streifenfreie Fensterreinigung</li>
          <li>Reinigung der Fensterrahmen</li>
          <li>Reinigung der Fensterbänke</li>
        </ul>
        <ul>
          <li>Entfernung von Insektenresten und Spinnweben</li>
          <li>Reinigung von Dachfenstern und Glasdächern</li>
          <li>Schonende Reinigung bei empfindlichen Glasarten</li>
          <li>Reinigung von Glastüren und Glastrennwänden</li>
          <li>Umweltfreundliche Reinigungsmittel auf Wunsch</li>
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
