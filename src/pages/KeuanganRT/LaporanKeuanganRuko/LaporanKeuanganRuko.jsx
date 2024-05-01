import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./laporanKeuanganRuko.css";
import React, { useState } from "react";

export default function LaporanKeuanganRuko() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div id="laporan-keuangan-ruko">
      <Header />
      <div className="laporan-keuangan-ruko">
        <h1>Laporan Keuangan Ruko</h1>
        <div className="laporan-keuangan">
          {!iframeLoaded && (
            <p
              style={{
                fontSize: "1.5rem",
                padding: "250px 0",
                color: "black",
              }}
            >
              Loading data...
            </p>
          )}
          <div className="laporan-kas-ruko">
            <div className="laporan-ipl">
              <iframe
                width="1100"
                height="600"
                referrerPolicy="Access-Control-Allow-Origin"
                src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211494&authkey=%21ABk-aNADuCKAXdw&em=2&wdAllowInteractivity=False&ActiveCell='IPL%20'!C1&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True"
                onLoad={handleIframeLoad}
                style={{
                  ...{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  },
                  display: iframeLoaded ? "flex" : "none",
                }}
              ></iframe>
            </div>

            <div className="laporan-kas">
              <iframe
                width="740"
                height="600"
                referrerPolicy="Access-Control-Allow-Origin"
                // src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211382&authkey=%21AIQP8N4agURVPmQ&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True"
                src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211382&authkey=%21AIQP8N4agURVPmQ&em=2&wdAllowInteractivity=False&wdInConfigurator=True&wdInConfigurator=True"
                onLoad={handleIframeLoad}
                style={{
                  ...{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  },
                  display: iframeLoaded ? "flex" : "none",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
