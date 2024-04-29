import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./beranda.css";

export default function Beranda() {
  return (
    <main className="container">
      <Header />
      <div className="beranda">
        <div className="content">
          <div className="card-beranda-outer">
            <div className="card-beranda">
              <div className="card-beranda-outer1">
                <p>
                  Selamat datang di website RT001! Kami dengan senang hati
                  membuka pintu bagi semua warga untuk memantau kinerja pengurus
                  dan transparansi keuangan dengan lebih baik. Di sini, kami
                  percaya bahwa kebersamaan dan saling percaya merupakan pondasi
                  utama komunitas. Mari kita bersama-sama membangun ikatan
                  persaudaraan yang kuat dan menjaga keberlangsungan harmoni di
                  lingkungan kita.
                  <span className="pengurus"> - Pengurus RT01 - </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
