// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda/Beranda";
import StrukturOrganisasi from "./pages/StrukturOrganisasi/StrukturOrganisasi";
import LaporanKeuanganRT from "./pages/KeuanganRT/LaporanKeuanganRT/LaporanKeuanganRT";
import LaporanKeuanganRuko from "./pages/KeuanganRT/LaporanKeuanganRuko/LaporanKeuanganRuko";
import Galeri from "./pages/Galeri/Galeri";

export default function App() {
  const PengurusRt = [
    {
      className: "struktur-pp-rt",
      role: "Ketua RT",
      name: "Aries Sulistiyo",
      phone: 6285887082588,
      alt: "Ketua RT",
    },
    {
      className: "struktur-pp-wakil",
      role: "Bendahara",
      name: "Deni Herdiana",
      phone: +6282124387146,
      alt: "Bendahara",
    },
    {
      className: "struktur-pp-wakil",
      role: "Sekretaris",
      name: "Koesmayadi",
      phone: 6281389346460,
      alt: "Sekretaris",
    },
    {
      className: "struktur-pp-wakil",
      role: "Koordinator Ruko",
      name: "Sumargono",
      phone: 6281314051844,
      alt: "Koordinator Ruko",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route
          path="/StrukturOrganisasi"
          element={<StrukturOrganisasi pengurus={PengurusRt} />}
        />
        <Route path="/LaporanKeuanganRT" element={<LaporanKeuanganRT />} />
        <Route path="/LaporanKeuanganRuko" element={<LaporanKeuanganRuko />} />
        <Route path="/Galeri" element={<Galeri />} />
        {/* <Route path="/DataWarga" element={<DataWarga />}></Route> */}
      </Routes>
    </Router>
  );
}
