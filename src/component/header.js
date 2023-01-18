import React from "react";
import Logo from "../image/svg.png";
import Button from "./button";
import Modal from "./modal";
import { useState } from "react";
function Navmenu({ nav }) {
  return (
    <ul className="d-flex gap-4 align-items-center m-0">
      {nav.map((a) => (
        <li className="list-unstyled text-dark navList">
          <span>{a}</span>
        </li>
      ))}
    </ul>
  );
}
function Header({ nav, style, color1 }) {
  const [showmodal, setShowmodal] = useState(false);

  return (
    <header className="container-fluid header m-0" style={style}>
      <div className="container-xxl d-flex justify-content-between align-items-center h-100">
        <div className="mx-3">
          <img src={Logo} alt="" />
        </div>
        <div className="d-flex gap-4 align-items-center">
          <Navmenu nav={nav} />
          <Button
            className="navList"
            text="Get Started"
            size={"small"}
            color1={color1}
            onclck={() => {
              setShowmodal(!showmodal);
              console.log("lol");
            }}
          />
          {showmodal && <Modal ds={showmodal} setShowmodal={setShowmodal}/>}
        </div>
      </div>
    </header>
  );
}
export default Header;
