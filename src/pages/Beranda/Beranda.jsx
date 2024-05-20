import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./beranda.css";
import BerandaImage from "../../assets/images/BERANDA-IMG.png";

export default function Beranda() {
  return (
    <main className="container">
      <Header />
      <div className="image-container">
        <img
          src={BerandaImage}
          alt="Image"
          className="center-image"
          loading="lazy"
        />
        <p className="welcome-text">
          Selamat datang di website RT001! Kami dengan senang hati membuka pintu
          bagi semua warga untuk memantau kinerja pengurus dan transparansi
          keuangan dengan lebih baik. Di sini, kami percaya bahwa kebersamaan
          dan saling percaya merupakan pondasi utama komunitas. Mari kita
          bersama-sama membangun ikatan persaudaraan yang kuat dan menjaga
          keberlangsungan harmoni di lingkungan kita.
        </p>

        <span className="pengurus-text">
          <h2> - Pengurus RT001 - </h2>
        </span>
      </div>
      <Footer />
    </main>
  );
}
