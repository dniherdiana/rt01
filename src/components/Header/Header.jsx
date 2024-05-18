// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [triggerMenu, isSetTriggerMenu] = useState(false);
  const handleClickChange = () => {
    isSetTriggerMenu((open) => !open);
  };

  return (
    <header id="header" className="header-sticky">
      <div className="logo-hideMenu">
        <div id="header-logo">
          <h1 className="header-logo">
            <span className="bg-logo-rt">RT01</span>
            <span className="bg-logo-ccr">Cikeas Country Residence</span>
          </h1>
        </div>
        <span className="hide-menu" onClick={handleClickChange}>
          &#9776;
        </span>
      </div>

      <nav className="navbar burger-menu">
        <div className={`nav-wrapper ${triggerMenu ? "is-open" : ""}`}>
          <ul>
            <li>
              <Link to={"/"}>Beranda</Link>
            </li>
            <li>
              <div className="dropdown">
                <Link to="#" className="disable-link">
                  Laporan Keuangan
                </Link>
                <div className="dropdown-content">
                  <div className="dropdown-position">
                    <Link to={"/LaporanKeuanganRT"}>Keuangan RT</Link>
                  </div>
                  <div className="dropdown-position">
                    <Link to={"/LaporanKeuanganRuko"}>Keuangan Ruko</Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <Link to="#" className="disable-link">
                  Informasi
                </Link>
                <div className="dropdown-content">
                  <Link to={"/StrukturOrganisasi"}>Struktur Organisasi</Link>
                  <Link to="/Galeri">Galeri</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
