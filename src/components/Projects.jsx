import { useState, useEffect } from "react";
import Project from "./Project";
/* images */
import watchShop from "../assets/images/watch shop.png";
import landingPage from "../assets/images/landing-page.png";
import newsAPI from "../assets/images/news-api.png";
import weather from "../assets/images/weather.png";
import ts from "../assets/images/ts_logo.png";
import notes from "../assets/images/notes.png";
import quizzical from "../assets/images/quizzical.jpg";
import tenzies from "../assets/images/tenzies.png";
//

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

  return (
    <section className="projects" id="projects">
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
            name="Notes App"
            img={notes}
            url="https://github.com/el7amrawy/notes-app"
          />
          <Project
            name="Quizzical"
            img={quizzical}
            url="https://el7amrawy.github.io/quizzical"
          />
          <Project
            name="Tenzies"
            img={tenzies}
            url="https://el7amrawy.github.io/tenzies"
          />
          <Project
            name="Weather-Journal App"
            img={weather}
            url="https://github.com/el7amrawy/Weather-Journal-App"
          />
          <Project
            name="News App"
            img={newsAPI}
            url="https://github.com/el7amrawy/news-api"
          />
          <Project
            name="Landing Page"
            img={landingPage}
            url="https://el7amrawy.github.io/Landing-Page/"
          />
        </div>
      ) : (
        <div className="back-projs">
          <Project
            name="Storefront Backend"
            des="Shopping Application"
            img={ts}
            url="https://github.com/el7amrawy/storefront-backend"
          />
          <Project
            name="Image Processing API"
            des="Image processing API that resizes images"
            img={ts}
            url="https://github.com/el7amrawy/image-processing-api"
          />
        </div>
      )}
    </section>
  );
}
