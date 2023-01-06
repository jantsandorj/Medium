import Logo from "../image/svg.png";
import Button from "./button";

function Navmenu({ nav }) {
  return (
    <ul className="d-flex gap-4 align-items-center m-0">
      {nav.map((a) => (
        <li className="list-unstyled text-dark navList">{a}</li>
      ))}
    </ul>
  );
}

function Header({ logo, nav }) {
  return (
    <header className="container-fluid bg-warning header m-0">
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
