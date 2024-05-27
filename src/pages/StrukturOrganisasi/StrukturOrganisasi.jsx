import "./strukturOrganisasi.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WaIcon from "../../assets/images/icons8-whatsapp.svg";
import pengurus from "../../db/pengurusRt";

export default function StrukturOrganisasi() {
  const listPos = pengurus.map((data, index) => (
    <div key={index} className={data.className}>
      <img src={data.picture} alt={data.alt} />
      <div className="pp-detail">
        <div id="role-name-bg">
          <h2 className="role-bg">{data.role}</h2>
          <p className="name-bg">{data.name}</p>
        </div>
        <div className="wa-detail">
          <a href={`https://wa.me/${data.phone}`}>
            <span className="cvw-bg">
              <img src={WaIcon} alt="WhatsApp" />
              Whatsapp
            </span>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Header />
      <div className="struktur-content">
        <div className="struktur-organisasi">
          <h1>Struktur Organisasi</h1>
        </div>
        <div className="struktur-container">{listPos}</div>
      </div>
      <Footer />
    </>
  );
}
