import Link from "next/link";

export default function ImpresumPage() {
    return (
        <>
        <main className="daten-html">
        <h1>Impressum</h1>

<h1>Angaben gem&auml;&szlig; &sect; 5 TMG</h1>
<p>Sandra Dordevic<br />
Geb&auml;udereinigung<br />
Biederlackweg 63<br />
48167 M&uuml;nster</p>

<h2>Kontakt</h2>
<Link href="tel:+4917620803030">Telefon: +4917620803030</Link>
<Link href="mailto:info@sd-pro-gebäudereinigung.de">info@sd-pro-gebäudereinigung.de</Link>

<h2>Umsatzsteuer-ID</h2>
   <p> Umsatzsteuerbefreit gemäß § 19 UStG.</p>
   
   <h2>EU-Streitschlichtung</h2>
    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.
    Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
Link
    <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    
<p>Quelle: <Link href="https://www.e-recht24.de">e-recht24.de</Link></p>
        </main>

        </>
    )
}