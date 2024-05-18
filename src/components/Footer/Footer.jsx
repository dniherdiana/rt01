import "./footer.css";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "30px 0",
        alignItems: "flex-end",
      }}
    >
      <div id="footer">
        <p id="footer-style">
          <span className="footer-text">RT01 Website</span>
          <span className="design-text">
            Design & Developed by
            <span className="footer-name"> Deni &copy;</span> 2024
          </span>
        </p>
      </div>
    </footer>
  );
}
