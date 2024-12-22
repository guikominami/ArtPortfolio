import logo from "../assets/imgs/logos/logo.jpg";
import "./Header.css";
import { Menu } from "../assets/data/ImagesData";
import Button from "./Button";
import { useState } from "react";

export default function Header({ onMenuClicked }) {
  const [buttonActiveClass, setButtonActiveClass] = useState(false);

  return (
    <div className="header-wrap">
      <div className="logo">
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="header-bottom-bar">
        <div className="menu">
          <ul>
            {Menu.map((item, index) => (
              <li key={index}>
                <Button onClick={() => onMenuClicked(item.content)}>
                  {item.text}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
