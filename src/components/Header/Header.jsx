// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header id="header" className="header-sticky">
      <div id="header-logo">
        <h1 className="header-logo">
          <span className="bg-logo-rt">RT001</span>{" "}
          <span className="bg-logo-ccr">Cikeas Country Residence</span>
        </h1>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Beranda</Link>
          </li>
          <li>
            <div className="dropdown">
              <Link to="#">Laporan Keuangan</Link>
              <div className="dropdown-content">
                <div className="dropdown-position-rt">
                  <Link to={"/LaporanKeuanganRT"}>Keuangan RT</Link>
                </div>
                <div className="dropdown-position-ruko">
                  <Link to={"/LaporanKeuanganRuko"}>Keuangan Ruko</Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <Link to="#">Informasi</Link>
              <div className="dropdown-content">
                <Link to={"/StrukturOrganisasi"}>Struktur Organisasi</Link>
                {/* <Link to="/DataWarga">Data Warga RT01</Link> */}
                <Link to="/Galeri">Galeri</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
