import Logo from "../image/svg.png";
import Button from "./button";
import React, {useState} from "react"

function Navmenu({ nav }) {
  return (
    <ul className="d-flex gap-4 align-items-center m-0">
      {nav.map((a) => (
        <li className="list-unstyled text-dark navList">{a}</li>
      ))}
    </ul>
  );
}
function Header({ nav, style }) {
  return (
    <header className="container-fluid header m-0" style={style}>
      <div className="container-xxl d-flex justify-content-between align-items-center h-100">
        <div className="mx-3">
          <img src={Logo} alt="" />
        </div>
        <div className="d-flex gap-4 align-items-center">
          <Navmenu nav={nav} />
          <Button className="navList"  text="Get Started" size={"small"}/>
        </div>
      </div>
    </header>
  );
}
export default Header;
