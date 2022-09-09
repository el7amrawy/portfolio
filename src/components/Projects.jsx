// import { useState, useEffect } from "react";
import Project from "./Project";
/* images */
import watchShop from "../assets/images/watch shop.png";
import landingPage from "../assets/images/landing-page.png";
import newsAPI from "../assets/images/news-api.png";
import weather from "../assets/images/weather.png";
import ts from "../assets/images/ts_logo.png";
//
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

  // useEffect(() => {
  //   const elems = Array.from(
  //     document.querySelectorAll(".front-projs ,.back-projs")
  //   );
  //   elems.map((elem) => {
  //     // console.log(elems, elem);
  //     if (elem.children.length < 3) {
  //       elem.style.justifyContent = "flex-start";
  //     } else {
  //       elem.style.justifyContent = "space-between";
  //     }
  //   });
  // }, [front]);

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
            name="Landing Page"
            img={landingPage}
            url="https://el7amrawy.github.io/Landing-Page/"
          />
          <Project
            name="News App"
            img={newsAPI}
            url="https://github.com/el7amrawy/news-api"
          />
          <Project
            name="Weather-Journal App"
            img={weather}
            url="https://github.com/el7amrawy/Weather-Journal-App"
          />
        </div>
      ) : (
        <div className="back-projs">
          <Project
            name="Storefront Backend"
            img={ts}
            url="https://github.com/el7amrawy/storefront-backend"
          />
          <Project
            name="Image Processing API"
            img={ts}
            url="https://github.com/el7amrawy/image-processing-api"
          />
        </div>
      )}
    </section>
  );
}
