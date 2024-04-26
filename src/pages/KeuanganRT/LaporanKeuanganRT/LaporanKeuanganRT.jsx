import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./laporanKeuanganRT.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import Spinner from 'react-spinkit';

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
            {/* {!iframeLoaded && <Spinner name="three-bounce" color="blue" />} */}
            {!iframeLoaded && (
              <p
                style={{
                  fontSize: "2.5rem",
                  color: "whitesmoke",
                  padding: "250px 0",
                }}
              >
                Loading data...
              </p>
            )}
            <iframe
              width="800"
              height="600"
              src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211379&authkey=%21AJmejev2rui9S80&em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
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
      <Footer />
    </div>
  );
}

// const  LaporanKeuanganRT = () => {
//   return (
//     <div id="laporan-keuangan-rt">
//       <Header />
//        <div className="laporan-keuangan-rt">
//         <h1>Laporan Keuangan RT</h1>

//         <div className="laporan-keuangan">
//           <iframe
//             width="1200"
//             height="600"
//             src="https://onedrive.live.com/embed?resid=D746CF77716A5C9E%211379&authkey=%21AJmejev2rui9S80&em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
//           ></iframe>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default LaporanKeuanganRT
