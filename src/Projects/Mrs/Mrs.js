import React, { useState } from "react";
import "../Projects.css";

const images = [];
for (let i = 1; i <= 8; i++) {
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
        <h2>영화관 예매 시스템</h2>
        <p className="project-date">2024.01</p>
        <p>자바와 SQL의 기본 문법을 사용한 프로젝트입니다.</p>
        <p>처음으로 팀을 짜서 만든 팀프로젝트입니다.</p>
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
          </div>

          <h3>문제 해결 과정</h3>
          <div className="problem-solving">
            <ul>
              <li>
                팀원 간 <span style={{ color: "red" }}>**의견 충돌**</span>이
                발생했을 때, 서로 같은 문제를 다르게 표현하고 있다는 것을
                깨달았습니다. 논쟁이 심화되지 않도록 의견을{" "}
                <span style={{ color: "red" }}>**정리**</span>하고,{" "}
                <span style={{ color: "red" }}>**요약**</span>을 통해 서로의
                입장을 명확하게 확인하여 문제를 해결했습니다.
              </li>
              <li>
                변수와 메서드 명에서 충돌이 발생해, 팀 전체에서{" "}
                <span style={{ color: "red" }}>**명명 규칙**</span>을 정립하고
                이를 따르도록 했습니다.
              </li>
              <li>
                코드가 길어져 중복되는 부분을 함수로 분리하고, 중복된 기능을
                최대한 제거하여 코드 가독성을 향상시켰습니다.
              </li>
              <li>
                <span style={{ color: "red" }}>**JDBC**</span> 사용 시 연결
                문제를 해결하기 위해 Connection Pool을 도입하여 성능을
                개선했습니다.
              </li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>
                함수 사용으로 중복은 줄였지만,{" "}
                <span style={{ color: "red" }}>**함수가 길어져**</span> 가독성이
                떨어졌고, 기능별로 더 세분화할 필요성을 느꼈습니다.
              </li>
              <li>
                <span style={{ color: "red" }}>**JDBC 함수**</span>가 복잡하여,
                이를 더 효율적으로 다루기 위한 학습이 필요함을 인지했습니다.
              </li>
              <li>
                깃허브를 사용하지 못하고 카카오톡으로 버전 관리를 진행하여, 충돌
                및 코드 누락 문제가 발생했습니다. 다음 프로젝트에서는 반드시{" "}
                <span style={{ color: "red" }}>**GitHub**</span>를 사용해{" "}
                <span style={{ color: "red" }}>**버전 관리**</span>를 할
                계획입니다.
              </li>
              <li>
                팀원 간 <span style={{ color: "red" }}>**의사소통**</span>{" "}
                과정에서 발생한 혼선을 줄이기 위해 정기적으로{" "}
                <span style={{ color: "red" }}>**코드 리뷰**</span>와{" "}
                <span style={{ color: "red" }}>**데일리 미팅**</span>을 진행할
                필요성을 깨달았습니다.
              </li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/pjh4554/MRS"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            https://github.com/pjh4554/MRS
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
