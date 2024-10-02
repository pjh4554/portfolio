import React from "react";
import "./Projects.css";
import Sbb from "./Sbb/Sbb";
import Erp from "./Erp/Erp";
import Mrs from "./Mrs/Mrs";
import Phone from "./Phone/Phone";
import Cinema from "./Cinema/Cinema";
import Auction from "./Auction/Auction";
import Conference from "./Conference/Conference";
import Crafty from "./Crafty/Crafty";
function Projects() {
  return (
    <div className="projects-section">
      <h2 className="title">프로젝트</h2>
      <div id="conference">
        <Conference />
      </div>
      <div id="phone">
        <Phone />
      </div>
      <div id="mrs">
        <Mrs />
      </div>
      <div id="sbb">
        <Sbb />
      </div>
      <div id="erp">
        <Erp />
      </div>
      <div id="cinema">
        <Cinema />
      </div>
      <div id="auction">
        <Auction />
      </div>
      <div id="crafty">
        <Crafty />
      </div>
    </div>
  );
}

export default Projects;
