import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import UnderConstruction from "../../assets/images/under-construction.jpeg";
import "./galeri.css";

export default function Galeri() {
  // const imgUrl = "https://imgur.com/V607vyB";
  return (
    <div id="galeri">
      <Header />
      {/*  <div className="img">
        <img src={UnderConstruction} alt="" />
      </div> */}

      <div>
        <h2>Ronda Ramadhan</h2>
        <img src={"https://imgur.com/V607vyB"} alt="Ronda Ramadhan" />
      </div>

      <Footer />
    </div>
  );
}
