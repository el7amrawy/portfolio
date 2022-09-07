import { useState, useEffect } from "react";

export default function Projects() {
  function activeEle(event) {
    const elems = Array.from(document.querySelectorAll(".projects .nav a"));
    elems.map((elem) => {
      elem.classList.remove("active");
    });
    event.target.classList.add("active");
  }
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="nav">
        <a className="active" onClick={activeEle}>
          Front-End
        </a>
        <a onClick={activeEle}>Back-End</a>
      </div>
    </section>
  );
}
