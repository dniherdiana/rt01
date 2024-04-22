import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Beranda from "./pages/Beranda/Beranda";
import StrukturOrganisasi from "./pages/StrukturOrganisasi/StrukturOrganisasi";
import LaporanKeuanganRT from "./pages/KeuanganRT/LaporanKeuanganRT/LaporanKeuanganRT";
import LaporanKeuanganRuko from "./pages/KeuanganRT/LaporanKeuanganRuko/LaporanKeuanganRuko";
import Galeri from "./pages/Galeri/Galeri";
import DataWarga from "./pages/DataWarga/DataWarga";

export default function App() {
  const rt = [
    {
      className: "struktur-pp-rt",
      role: "Ketua RT",
      name: "Aries Sulistiyo",
      phone: 6285887082588,
    },
    {
      className: "struktur-pp-wakil",
      role: "Bendahara",
      name: "Deni Herdiana",
      phone: 6282124387146,
    },
    {
      className: "struktur-pp-wakil",
      role: "Sekretaris",
      name: "Koesmayadi",
      phone: 6281389346460,
    },
    {
      className: "struktur-pp-wakil",
      role: "Koordinator Ruko",
      name: "Sumargono",
      phone: 6281314051844,
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route
          path="/StrukturOrganisasi"
          element={<StrukturOrganisasi pengurus={rt} />}
        />
        <Route path="/LaporanKeuanganRT" element={<LaporanKeuanganRT />} />
        <Route path="/LaporanKeuanganRuko" element={<LaporanKeuanganRuko />} />
        <Route path="/Galeri" element={<Galeri />} />
        <Route path="/DataWarga" element={<DataWarga />}></Route>
      </Routes>
    </Router>
  );
}
