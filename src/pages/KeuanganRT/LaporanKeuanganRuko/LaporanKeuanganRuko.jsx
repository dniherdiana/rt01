import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./laporanKeuanganRuko.css";
import React, { useState } from "react";

export default function LaporanKeuanganRuko() {
  const [iframeloaded, setIframeLoaded] = useState(false);
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div id="laporan-keuangan-ruko">
      <Header />
      <div className="laporan-keuangan-content">
        <div className="laporan-keuangan-ruko">
          <h1>Laporan Keuangan Ruko</h1>

          <div className="laporan-keuangan">
            {!iframeloaded && (
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "whitesmoke",
                  padding: "250px 0",
                  color: "black",
                }}
              >
                Loading data...
              </p>
            )}
            <iframe
              width="800"
              height="600"
              src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211224&authkey=!ANn8O9VlUful5YE&em=2"
              lazy="loading"
              onLoad={handleIframeLoad}
              style={{
                ...{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                },
                display: iframeloaded ? "flex" : "none",
              }}
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
