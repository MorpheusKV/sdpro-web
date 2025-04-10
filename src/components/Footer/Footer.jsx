import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-telefon">
        <Link href="tel:+4917620803030">
          <i className="bx bxs-phone-call"></i> +49 176 20803030
        </Link>
      </div>

      <div className="footer-email">
        <Link href="mailto:info@sd-pro-gebäudereinigung.de">
          <i className="bx bx-envelope"></i> info@sd-pro-gebäudereinigung.de
        </Link>
      </div>

      <div className="footer-daten">
        <Link href="/datenschutz">Datenschutz</Link>
      </div>

      <div className="footer-daten">
        <Link href="/impresum">Impressum</Link>
      </div>

      <div className="footer-iconTop">
        <Link href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </Link>
      </div>
    </footer>
  );
}
