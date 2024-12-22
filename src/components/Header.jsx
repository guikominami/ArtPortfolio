import logo from "../assets/imgs/logos/logo.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrap">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-bottom-bar">
        <div className="menu">
          <ul>
            <li>trains</li>
            <li>books</li>
            <li>drawings</li>
            <li>clients</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
