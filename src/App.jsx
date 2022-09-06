import { useState } from "react";
import "./style.css";
import NavBar from "./components/Navbar";
import Summary from "./components/Summary";

export default function App() {
  const [navShadow, setNavShadow] = useState(true);

  return (
    <>
      <NavBar shadow={navShadow} />
      <main>
        <Summary />
      </main>
    </>
  );
}
