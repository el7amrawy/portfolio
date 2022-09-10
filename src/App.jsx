import { useState, useEffect } from "react";
import "./style.css";
import NavBar from "./components/Navbar";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const sections = Array.from(document.querySelectorAll("section"));
      sections.forEach((sec) => {
        const navItem = document.querySelector(`[href="#${sec.id}"]`);
        if (
          navItem.innerText == "Projects" &&
          sec.getBoundingClientRect().top < 0 &&
          sec.getBoundingClientRect().top > sec.clientHeight * -0.8
        ) {
          navItem.classList.add("active");
        } else if (
          sec.getBoundingClientRect().top < 450 &&
          sec.getBoundingClientRect().top > -290
        ) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      });
      // console.log(
      //   document.getElementById("contact").getBoundingClientRect().top
      // );
      if (document.documentElement.scrollTop >= 650) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Summary />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {scrollTop && <ScrollTop />}
    </>
  );
}
