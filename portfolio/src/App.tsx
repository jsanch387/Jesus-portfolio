import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
