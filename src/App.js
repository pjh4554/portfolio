import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects"; // Projects 컴포넌트를 통해 개별 프로젝트를 모두 렌더링합니다.
import Site from "./Site/Site";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home" className="section home">
        <Home />
      </div>
      <div id="introduction" className="section introduction">
        <Introduction />
      </div>
      <div id="skills" className="section skills">
        <Skills />
      </div>
      <div id="projects" className="section projects">
        <Projects />
      </div>
      <div id="site" className="section site">
        <Site />
      </div>
    </div>
  );
}

export default App;
