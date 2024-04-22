import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./laporanKeuanganRuko.css";

export default function LaporanKeuanganRuko() {
  return (
    <div id="laporan-keuangan-ruko">
      <Header />
      <div className="laporan-keuangan-ruko">
        <h1>Laporan Keuangan Ruko</h1>

        <div className="laporan-keuangan">
          <iframe
            src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211224&authkey=!ANn8O9VlUful5YE&em=2"
            lazy="loading"
            width="900"
            height="600"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
