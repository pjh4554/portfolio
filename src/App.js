import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Site from "./Site/Site";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <div id="home" className="section home">
        <Home />
      </div>
      <Header />
      <div id="introduction" className="section introduction">
        <Introduction />
      </div>
      <div id="skills" className="section skills">
        <Skills />
      </div>
      <div id="projects" className="section projects">
        <Projects />
      </div>
      <div id="site" className="section sites">
        <Site />
      </div>
    </div>
  );
}

export default App;
