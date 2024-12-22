import "./Footer.css";
import logoInstagram from "../assets/imgs/logos/logo-instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <a href="https://instagram.com/labmudalab" target="_blank">
          <img src={logoInstagram} alt="" />
        </a>
      </div>
    </div>
  );
}
