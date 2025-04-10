import Link from "next/link";
import "./Contact.css";


export default function Contact() {
  return (
    <section className="kontakt" id="kontakt">
      <h2 className="heading">Kontakt</h2>

      <div className="standort">
        <h3>Standort Münster:</h3>
        <p>Biederlackweg. 63 | 48167 Münster</p>
        <br />
        <h3>Öffnungszeiten:</h3>
        <p>Mo - Fr: 8:00 bis 17:00 Uhr</p>

        <div className="tel-mail">
          <Link href="tel:+4917620803030">
            <i className="bx bxs-phone-call"></i> +49 176 20803030
          </Link>
          <Link href="mailto:info@sd-pro-gebäudereinigung.de">
            <i className="bx bx-envelope"></i> info@sd-pro-gebäudereinigung.de
          </Link>
        </div>
      </div>
    </section>
  );
}
