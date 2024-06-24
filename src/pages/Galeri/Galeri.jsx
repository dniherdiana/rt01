import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./galeri.css";
import rondaRamadhan from "../../db/img/ronda-ramadhan.json";
import kerjaBaktiRuko from "../../db/img/kerjaBakti-ruko.json";
import nobarTimnas from "../../db/img/nobar-timnas.json";
import touringVilla from "../../db/img/touring-villa.json";
import PeriksaMata from "../../db/img/periksa-mata.json";
import qurban1444H from "../../db/img/qurban1444H.json";
import makanMakan from "../../db/img/makan-makan.json";

export default function Galeri() {
  const sections = [
    {
      title: "Periksa mata gratis( Kurnia Optik)",
      images: PeriksaMata,
    },
    {
      title: "Kerja bakti area Ruko CCR",
      images: kerjaBaktiRuko,
    },
    {
      title: "Ronda Ramadhan",
      images: rondaRamadhan,
    },
    {
      title: "Nobar Timnas vs Uzbekistan",
      images: nobarTimnas,
    },
    {
      title: "Touring (Villa Diefa)",
      images: touringVilla,
    },
    {
      title: "Qurban 1444H",
      images: qurban1444H,
    },
    {
      title: "Makan-makan",
      images: makanMakan,
    },
  ];

  return (
    <div id="galeri">
      <Header />
      <div id="gallery-content">
        {sections.map((section, index) => (
          <GallerySection key={index} {...section} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

function GallerySection({ title, images }) {
  return (
    <details className={title.toLowerCase().replace(/ /g, "-")}>
      <summary className="title-section">{title}</summary>
      <figure className="img">
        {images.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} />
        ))}
      </figure>
    </details>
  );
}
