import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./laporanKeuanganRT.css";
import React, { useState } from "react";

export default function LaporanKeuanganRT() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div id="laporan-keuangan-rt">
      <Header />
      <div className="laporan-keuangan-content">
        <div className="laporan-keuangan-rt">
          <h1>Laporan Keuangan RT</h1>

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

            <div className="laporan-card">
              <iframe
                width="1530"
                height="700"
                frameborder="0"
                src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211483&authkey=%21AMgmAZdUg7vtSP8&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True"
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
              <div className="laporan-card">
                <iframe
                  width="740"
                  height="600"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211469&authkey=%21AIJwlthTQDe1qgk&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True"
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
              <div className="laporan-card">
                <iframe
                  width="740"
                  height="600"
                  src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211486&authkey=%21AJ15A7mpzaQ32sM&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
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
      </div>
      <Footer />
    </div>
  );
}
