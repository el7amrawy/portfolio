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
  const [tab, setTab] = useState("full");

  function activeEle(event) {
    const elems = Array.from(document.querySelectorAll(".projects .nav a"));
    elems.map((elem) => {
      elem.classList.remove("active");
    });
    event.target.classList.add("active");
    event.target.innerText == "Front-End"
      ? setTab("front")
      : event.target.innerText == "Back-End"
      ? setTab("back")
      : setTab("full");
  }

  return (
    <section className="projects" id="projects">
      <div className="header">
        <h2>Projects</h2>
        <div className="nav">
          <a className="active" onClick={activeEle}>
            Full-Stack
          </a>
          <a onClick={activeEle}>Front-End</a>
          <a onClick={activeEle}>Back-End</a>
        </div>
      </div>
      {tab === "front" && (
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
      )}
      {tab === "back" && (
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
      {tab === "full" && (
        <div className="full-projs">
          <Project
            name="CatWiki"
            img="https://i.postimg.cc/X7j8k6BR/screencapture-127-0-0-1-5173-2022-10-06-17-28-54.jpg"
            url="https://github.com/el7amrawy/catwiki"
          />
          <Project
            name="Image Uploader"
            des="Web app that uploads and serves images"
            img="https://i.ibb.co/zbpThGc/uploadimages-1.png"
            url="https://github.com/el7amrawy/image-uploader"
          />
        </div>
      )}
    </section>
  );
}
