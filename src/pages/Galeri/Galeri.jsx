import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import UnderConstruction from "../../assets/images/under-construction.jpeg";
import "./galeri.css";

export default function Galeri() {
  return (
    <div id="galeri">
      <Header />
      <figure className="img">
        <img src={UnderConstruction} alt="unavailable" />
      </figure>
      {/* <Footer /> */}
    </div>
  );
}
