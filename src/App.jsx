import { useState } from "react";
import "./style.css";
import NavBar from "./components/Navbar";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  const [navShadow, setNavShadow] = useState(true);

  return (
    <>
      <NavBar shadow={navShadow} />
      <main>
        <Summary />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
