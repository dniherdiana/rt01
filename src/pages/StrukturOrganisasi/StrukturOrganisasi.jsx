import PropTypes from "prop-types";
import "./strukturOrganisasi.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfilePic from "../../assets/images/profile-pic.webp";
import WaIcon from "../../assets/images/icons8-whatsapp.svg";

StrukturOrganisasi.propTypes = {
  pengurus: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default function StrukturOrganisasi(props) {
  const { pengurus } = props;
  if (!pengurus) {
    return null;
  }

  // Map over 'pengurus' array
  const listPos = pengurus.map((item, index) => (
    <div key={index} className={item.className}>
      <img src={ProfilePic} alt="Ketua RT" />
      <div className="pp-detail">
        <div id="role-name-bg">
          <h2 className="role-bg">{item.role}</h2>
          <p className="name-bg">{item.name}</p>
        </div>
        <div className="wa-detail">
          <a href={`https://wa.me/${item.phone}`}>
            <span className="cvw-bg">
              <img src={WaIcon} alt="WhatsApp" />
              Whatsapp
            </span>
          </a>
        </div>
      </div>
    </div>
  ));

  console.log(listPos);

  return (
    <>
      <Header />
      <div className="struktur-organisasi">
        <h1>Struktur Organisasi</h1>
      </div>
      <div className="struktur-container">{listPos}</div>
      <Footer />
    </>
  );
}
