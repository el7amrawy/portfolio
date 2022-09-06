import { useState } from "react";
import "./style.css";
import NavBar from "./components/Navbar";
import Summary from "./components/Summary";
import Skills from "./components/Skills";

export default function App() {
  const [navShadow, setNavShadow] = useState(true);

  return (
    <>
      <NavBar shadow={navShadow} />
      <main>
        <Summary />
        <Skills />
      </main>
    </>
  );
}
