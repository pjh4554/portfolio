import React, { useState } from "react";
import "../Projects.css";

const images = [];
for (let i = 1; i <= 13; i++) {
  images.push(require(`./image/${i}.png`));
}

function Project1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project-container">
      <div className="project-header">
        <h2>ERP</h2>
        <p className="project-date">2024.02</p>
        <p>
          마지막 팀프로젝트로 ecount에서{" "}
          <span style={{ color: "red" }}>**ERP**</span>를 베이스로 다나와 같은
          컴퓨터 회사용 <span style={{ color: "red" }}>**ERP**</span> 시스템을
          만들었습니다.
        </p>
        <p>
          <span style={{ color: "red" }}>**인사**</span>와{" "}
          <span style={{ color: "red" }}>**로그인**</span> 부분을 담당했습니다.
        </p>
      </div>

      <div className="project-content">
        <div className="project-left">
          <div className="image-slider">
            <p className="image-counter">
              {currentIndex + 1} / {images.length}
            </p>
            <button className="prev-button" onClick={goToPrev}>
              &#10094;
            </button>
            <img
              src={images[currentIndex]}
              alt={`프로젝트 이미지 ${currentIndex + 1}`}
              className="project-image"
            />
            <button className="next-button" onClick={goToNext}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="project-right">
          <h3>사용 기술</h3>
          <div className="icon-container">
            <p>Eclipse</p>
            <p>Java</p>
            <p>MySQL</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Hibernate</p>
            <p>AWS</p>
            <p>Spring Boot</p>
            <p>Gradle</p>
            <p>GitHub</p>
            <p>TypeScript</p>
            <p>Python</p>
          </div>

          <h3>문제 해결 과정</h3>
          <div className="problem-solving">
            <ul>
              <li>
                로그인 기능에서{" "}
                <span style={{ color: "red" }}>**스프링시큐리티**</span>를
                사용하여 더 안전한 기능을 구현하였습니다. 기본 로그인 기능보다
                확장성과 보안이 뛰어났습니다.
              </li>
              <li>
                팀 프로젝트에서 처음으로{" "}
                <span style={{ color: "red" }}>**GitHub**</span>를 사용해{" "}
                <span style={{ color: "red" }}>**커밋**</span>,{" "}
                <span style={{ color: "red" }}>**푸쉬**</span>,{" "}
                <span style={{ color: "red" }}>**풀**</span> 과정을
                학습하였으며, 이를 통해{" "}
                <span style={{ color: "red" }}>**버전 관리**</span>의 중요성을
                깨달았습니다.
              </li>
              <li>
                팀원 간의 갈등은{" "}
                <span style={{ color: "red" }}>**의견을 정리**</span>하고 서로의
                입장을 명확하게 표현함으로써 해결되었습니다. 이 과정에서 잘못된{" "}
                <span style={{ color: "red" }}>**이해**</span>가 주요 원인임을
                알게 되었습니다.
              </li>
              <li>
                프로젝트를 진행하면서{" "}
                <span style={{ color: "red" }}>**구조 설계**</span>와{" "}
                <span style={{ color: "red" }}>**디자인**</span>을 사전에 잘
                설정하는 것이 얼마나 중요한지 깨달았습니다. 이는 실제{" "}
                <span style={{ color: "red" }}>
                  **코드를 짜는 것보다 더 어렵고 중요한**
                </span>{" "}
                과정이었습니다.
              </li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>
                <span style={{ color: "red" }}>**프론트엔드**</span> 작업이
                예상보다 오래 걸리며,{" "}
                <span style={{ color: "red" }}>**시간 부족**</span>으로 인해
                프로젝트 일정이 지연되었습니다.
              </li>
              <li>
                <span style={{ color: "red" }}>**React**</span>를 사용하지
                않았던 것이 아쉬웠습니다.{" "}
                <span style={{ color: "red" }}>**리액트**</span>를 도입했다면
                프론트엔드 작업이 더 빠르고 효율적이었을 것입니다.
              </li>
              <li>
                <span style={{ color: "red" }}>**Gradle**</span>로{" "}
                <span style={{ color: "red" }}>**jar 파일**</span>을 만들어
                배포할 때,{" "}
                <span style={{ color: "red" }}>
                  **파이썬 API와의 호환 문제**
                </span>
                로 어려움을 겪었으며, 이 문제를 해결하지 못한 것이 아쉬웠습니다.
              </li>
              <li>
                프로젝트를 통해{" "}
                <span style={{ color: "red" }}>**Spring Boot**</span>와{" "}
                <span style={{ color: "red" }}>**TypeScript**</span>를 더 깊이
                이해하게 되었으며, 각 기술의 특성과 사용법을 익혔습니다.
              </li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/LeeSang90/SixBeam_ERP"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            https://github.com/LeeSang90/SixBeam_ERP
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
