import PropTypes from "prop-types";
import "./strukturOrganisasi.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import ProfilePic from "../../assets/images/profile-pic.webp";
import WaIcon from "../../assets/images/icons8-whatsapp.svg";

StrukturOrganisasi.propTypes = {
  pengurus: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      alt: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function StrukturOrganisasi(props) {
  const { pengurus } = props;
  if (!pengurus) {
    return null;
  }

  // Map over 'pengurus' array
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
