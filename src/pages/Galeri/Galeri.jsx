import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./galeri.css";
import rondaRamadhan from "../../db/img/ronda-ramadhan.json";
import kerjaBaktiRuko from "../../db/img/kerjaBakti-ruko.json";
import nobarTimnas from "../../db/img/nobar-timnas.json";
import touringVilla from "../../db/img/touring-villa.json";
import PeriksaMata from "../../db/img/periksa-mata.json";

export default function Galeri() {
  return (
    <div id="galeri">
      <Header />
      <div id="gallery-content">
        <GallerySection
          title="Kerja bakti area Ruko CCR"
          images={kerjaBaktiRuko}
        />
        <GallerySection title="Ronda Ramadhan" images={rondaRamadhan} />
        <GallerySection
          title="Nobar Timnas vs Uzbekistan"
          images={nobarTimnas}
        />
        <GallerySection title="Touring (Villa Diefa)" images={touringVilla} />
        <GallerySection
          title="Periksa mata gratis( Kurnia Optik)"
          images={PeriksaMata}
        />
      </div>
      <Footer />
    </div>
  );
}

function GallerySection({ title, images }) {
  return (
    <div className={title.toLowerCase().replace(/ /g, "-")}>
      <h1 className="title-section">{title}</h1>
      <figure className="img">
        {images.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} />
        ))}
      </figure>
    </div>
  );
}
