import React from "react";
import "./Skills.css";

// Frontend Icons
import HTML from "./Icon/HTML.svg";
import CSS from "./Icon/CSS.svg";
import JavaScript from "./Icon/JavaScript.svg";
import ReactIcon from "./Icon/React-Light.svg";
import TypeScript from "./Icon/TypeScript.svg";
// import TailwindCSS from "./Icon/TailwindCSS-Light.svg";
import JQuery from "./Icon/JQuery.svg";
// import ReactNative from "./Icon/react-native-1.svg";

// Backend Icons
import NodeJS from "./Icon/NodeJS-Light.svg";
import Spring from "./Icon/Spring-Light.svg";
import Java from "./Icon/Java-Light.svg";
import SpringBoot from "./Icon/icons8-봄-로고.svg";
import FastAPI from "./Icon/FastAPI.svg";
// import Django from "./Icon/Django.svg";
import Python from "./Icon/Python-Light.svg";
import Hibernate from "./Icon/Hibernate-Light.svg";

// Database & Data Management Icons
import MySQL from "./Icon/MySQL-Light.svg";
import MongoDB from "./Icon/MongoDB.svg";
import PostgreSQL from "./Icon/PostgreSQL-Light.svg";

// DevOps & Cloud Icons
import AWS from "./Icon/AWS-Light.svg";
import Docker from "./Icon/Docker.svg";
import Gradle from "./Icon/Gradle-Light.svg";

// Tools & IDE Icons
import VSCode from "./Icon/VSCode-Light.svg";
import IntelliJ from "./Icon/intellij-idea-svgrepo-com.svg";
import Eclipse from "./Icon/Eclipse-Light.svg";
// import Figma from "./Icon/Figma.svg";

// Version Control Icons
import GitHub from "./Icon/Github-Light.svg";
import Discord from "./Icon/Discord.svg";

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="title">사용 기술</h2>
      <div className="skills-content">
        {/* Frontend */}
        <div className="skills-category">
          <h3 className="category-title">Frontend</h3>
          <div className="skills-images">
            <img src={HTML} alt="HTML" />
            <img src={CSS} alt="CSS" />
            <img src={JavaScript} alt="JavaScript" />
            <img src={ReactIcon} alt="React" />
            <img src={TypeScript} alt="TypeScript" />
            {/* <img src={TailwindCSS} alt="TailwindCSS" /> */}
            <img src={JQuery} alt="JQuery" />
            {/* <img src={ReactNative} alt="React Native" /> */}
          </div>
        </div>

        {/* Backend */}
        <div className="skills-category">
          <h3 className="category-title">Backend</h3>
          <div className="skills-images">
            <img src={NodeJS} alt="NodeJS" />
            <img src={Spring} alt="Spring" />
            <img src={SpringBoot} alt="SpringBoot" />
            <img src={Java} alt="Java" />
            <img src={FastAPI} alt="FastAPI" />
            {/* <img src={Django} alt="Django" /> */}
            <img src={Python} alt="Python" />
            <img src={Hibernate} alt="Hibernate" />
          </div>
        </div>

        {/* Database & Data Management */}
        <div className="skills-category">
          <h3 className="category-title">Database & Data Management</h3>
          <div className="skills-images">
            <img src={MySQL} alt="MySQL" />
            <img src={MongoDB} alt="MongoDB" />
            <img src={PostgreSQL} alt="PostgreSQL" />
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="skills-category">
          <h3 className="category-title">DevOps & Cloud</h3>
          <div className="skills-images">
            <img src={AWS} alt="AWS" />
            <img src={Docker} alt="Docker" />
            <img src={Gradle} alt="Gradle" />
          </div>
        </div>

        {/* Tools & IDE */}
        <div className="skills-category">
          <h3 className="category-title">Tools & IDE</h3>
          <div className="skills-images">
            <img src={VSCode} alt="VSCode" />
            <img src={IntelliJ} alt="IntelliJ" />
            <img src={Eclipse} alt="Eclipse" />
            {/* <img src={Figma} alt="Figma" /> */}
          </div>
        </div>

        {/* Version Control */}
        <div className="skills-category">
          <h3 className="category-title">Version Control</h3>
          <div className="skills-images">
            <img src={GitHub} alt="GitHub" />
            <img src={Discord} alt="Discord" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
