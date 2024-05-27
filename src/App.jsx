import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda/Beranda";
import StrukturOrganisasi from "./pages/StrukturOrganisasi/StrukturOrganisasi";
import LaporanKeuanganRT from "./pages/KeuanganRT/LaporanKeuanganRT/LaporanKeuanganRT";
import LaporanKeuanganRuko from "./pages/KeuanganRT/LaporanKeuanganRuko/LaporanKeuanganRuko";
import Galeri from "./pages/Galeri/Galeri";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/StrukturOrganisasi" element={<StrukturOrganisasi />} />
        <Route path="/LaporanKeuanganRT" element={<LaporanKeuanganRT />} />
        <Route path="/LaporanKeuanganRuko" element={<LaporanKeuanganRuko />} />
        <Route path="/Galeri" element={<Galeri />} />
      </Routes>
    </HashRouter>
  );
}
