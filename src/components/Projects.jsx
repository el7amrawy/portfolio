// import { useState, useEffect } from "react";
import Project from "./Project";
/* images */
import watchShop from "../assets/images/watch shop.png";
import { useEffect, useState } from "react";

export default function Projects() {
  const [front, setFront] = useState(true);

  function activeEle(event) {
    const elems = Array.from(document.querySelectorAll(".projects .nav a"));
    elems.map((elem) => {
      elem.classList.remove("active");
    });
    event.target.classList.add("active");
    event.target.innerText == "Front-End" ? setFront(true) : setFront(false);
  }

  useEffect(() => {
    const elems = Array.from(
      document.querySelectorAll(".front-projs ,.back-projs")
    );
    elems.map((elem) => {
      // console.log(elems, elem);
      if (elem.children.length < 3) {
        console.log(0);
        elem.style.justifyContent = "flex-start";
      }
    });
  }, [front]);

  return (
    <section className="projects">
      <div className="header">
        <h2>Projects</h2>
        <div className="nav">
          <a className="active" onClick={activeEle}>
            Front-End
          </a>
          <a onClick={activeEle}>Back-End</a>
        </div>
      </div>
      {front ? (
        <div className="front-projs">
          <Project
            name="Watch Shop Template"
            img={watchShop}
            url="https://el7amrawy.github.io/timezone-temp/"
          />
          <Project
            name="Watch Shop Template"
            img={watchShop}
            url="https://el7amrawy.github.io/timezone-temp/"
          />
          <Project
            name="Watch Shop Template"
            img={watchShop}
            url="https://el7amrawy.github.io/timezone-temp/"
          />
          <Project
            name="Watch Shop Template"
            img={watchShop}
            url="https://el7amrawy.github.io/timezone-temp/"
          />
          <Project
            name="Watch Shop Template"
            img={watchShop}
            url="https://el7amrawy.github.io/timezone-temp/"
          />
        </div>
      ) : (
        <div className="back-projs">
          <Project
            name="Watch Shop Template"
            img={watchShop}
            url="https://el7amrawy.github.io/timezone-temp/"
          />
          <Project
            name="Watch Shop Template"
            img={watchShop}
            url="https://el7amrawy.github.io/timezone-temp/"
          />
        </div>
      )}
    </section>
  );
}
