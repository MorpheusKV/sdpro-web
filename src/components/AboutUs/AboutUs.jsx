
import "./AboutUs.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
    <section className="about-us" id="about-us">
    
      <div className="about-content">
        <h2 className="heading">
          Über <span>Uns</span>
        </h2>

        <p>
          Herzlich willkommen bei <span>SDpro</span> Gebäudereinigung! Wir sind
          darauf spezialisiert, erstklassige Reinigungsdienstleistungen für Ihr
          Zuhause und Ihre Geschäftsräume anzubieten. Unser Team von
          erfahrenen Profis ist darauf bedacht, makellose Sauberkeit und
          Hygiene zu gewährleisten und dabei stets auf Ihre Bedürfnisse und
          Wünsche einzugehen. Egal, ob Sie regelmäßige Reinigung, eine gründliche
          Tiefenreinigung oder spezialisierte Dienstleistungen benötigen – wir
          sind hier, um Ihnen zu helfen. Ihr Komfort und Ihre Zufriedenheit stehen
          für uns an erster Stelle, und wir bemühen uns, jeden Raum strahlend
          sauber zu hinterlassen. Kontaktieren Sie uns noch heute, um für eine
          saubere und frische Umgebung zu sorgen, die Sie verdienen!
        </p>
      </div>
      <div className="home-img">
        <Image
          src="/images/about-us.webp"
          alt="Reinigungsteam"
          width={500}
          height={350}
        />
      </div>

    </section>
    </>
  );

}