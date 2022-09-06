import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavBar(props) {
  const [bars, setBars] = useState(0);
  function toggleBars() {
    setBars((prev) => !prev);
  }
  return (
    <header>
      <nav
        className={props.shadow && "shadow"}
        style={bars ? { boxShadow: "unset" } : {}}
      >
        <div className="logo-cont">
          <img src={logo} alt="logo" />
          <section>Aly Hamdy</section>
        </div>
        <ul
          style={
            bars
              ? {
                  visibility: "visible",
                  opacity: "1",
                  top: "100px",
                }
              : {}
          }
        >
          <li>
            <a href="">Summary</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
        </ul>
        <button className="btn">Download Resume</button>
        <FontAwesomeIcon
          icon={bars ? faBarsStaggered : faBars}
          className="bars"
          onClick={toggleBars}
          style={bars && { color: "#ec5b53" }}
        />
      </nav>
    </header>
  );
}
