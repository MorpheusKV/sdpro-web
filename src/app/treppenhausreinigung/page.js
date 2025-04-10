import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Treppenhausreinigung Münster | SDpro Gebäudereinigung",
  description: "Gründliche und zuverlässige Treppenhausreinigung für Wohn- und Geschäftsgebäude in Münster.",
  keywords: "Treppenhausreinigung Münster, Hausreinigung, Reinigungsdienst Treppen Münster, SDpro",
  robots: "index, follow"
};


export default function TreppenhausreinigungPage() {
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

      <h1 className="service-title">Treppenhausreinigung</h1>
      <h2 className="service-subtitle">Unsere Leistungen im Bereich Treppenhausreinigung</h2>

      <div className="service-lists">
        <ul>
          <li>Fegen der Treppe und aller öffentlichen Bereiche</li>
          <li>Aufzugsreinigung</li>
          <li>Reinigung der an die Eigentumswohnung angrenzenden Bereiche vor dem Eingang</li>
          <li>Spinnweben aufsammeln</li>
          <li>Reinigung der Haustür</li>
          <li>Reinigen der Postfächer</li>
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
