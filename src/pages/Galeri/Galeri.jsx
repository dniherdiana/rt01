import Header from "../../components/Header/Header";
// import LoginForm from "../../components/LoginForm/LoginForm";
import UnderConstruction from "../../assets/images/under-construction.jpeg";
import "./galeri.css";

export default function Galeri() {
  return (
    <div id="galeri">
      <Header />
      <div className="img">
        <img src={UnderConstruction} alt="" />
      </div>
      {/* <LoginForm /> */}
    </div>
  );
}
