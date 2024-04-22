import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./laporanKeuanganRT.css";
import { Link } from "react-router-dom";

export default function LaporanKeuanganRT() {
  return (
    <div id="laporan-keuangan-rt">
      <Header />
      <div className="laporan-keuangan-rt">
        <h1>Laporan Keuangan RT</h1>

        <div className="laporan-keuangan">
          <iframe
            width="1200"
            height="600"
            lazy="loading"
            src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211379&authkey=%21AJmejev2rui9S80&em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
