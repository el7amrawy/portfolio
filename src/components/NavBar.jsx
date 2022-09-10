import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [bars, setBars] = useState(false);
  function toggleBars() {
    setBars((prev) => !prev);
  }

  useEffect(() => {
    const elems = Array.from(document.querySelectorAll("nav ul li a"));
    elems.map((elem) => {
      elem.addEventListener("click", (ev) => {
        ev.preventDefault();
        const target = elem.getAttribute("href").slice(1);
        target == "projects"
          ? document.getElementById(target).scrollIntoView({
              block: "start",
            })
          : document.getElementById(target).scrollIntoView({
              block: "center",
            });
      });
    });
  }, []);

  return (
    <header>
      <nav className="shadow" style={bars ? { boxShadow: "unset" } : {}}>
        <div className="logo-cont">
          <img src={logo} alt="logo" />
          <span>Aly Hamdy</span>
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
            <a href="#summary" className="active">
              Summary
            </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <a
          href="https://drive.google.com/file/d/1HGW217_9S90wU2qY392GWho7TnOLG8jd/view?usp=sharing"
          target="_blank"
        >
          <button className="btn">Download Resume</button>
        </a>
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
