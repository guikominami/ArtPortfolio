import logo from "../assets/imgs/logos/logo.jpg";
import "./Header.css";
import { Menu } from "../assets/data/ImagesData";

export default function Header({ onMenuClicked }) {
  return (
    <div className="header-wrap">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-bottom-bar">
        <div className="menu">
          <ul>
            {Menu.map((item, index) => (
              <li key={index}>
                <button onClick={() => onMenuClicked(item.content)}>
                  {item.text}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => onMenuClicked("contact")}>
                contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
