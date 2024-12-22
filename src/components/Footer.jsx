import "./Footer.css";
import logoInstagram from "../assets/imgs/logos/logo-instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logoInstagram} alt="" />
      </div>
    </div>
  );
}
