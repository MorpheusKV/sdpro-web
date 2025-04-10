import Image from "next/image";
import Link from "next/link";
import "./Services.css";
import { services } from "@/data/servicesData";

export default function Services() {
  return (
    <>
    <section className="services" id="services">
      <h2 className="heading">Leistungen</h2>

      <div className="services-container">
      {services.map((services, index) => 
      <div className="services-box" key={index}>
        <i className="bx bxs-check-shield"></i>

        <Image 
  src={services.image}
  alt={services.alt}
  width={300}
  height={200}
  style={{
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px"
  }}
/>
        <h3>{services.title}</h3>
        <Link href={services.link} className="btn">Mehr Lesen</Link>
      </div>
      )}
        
</div>
    </section>
    </>
  );
}
