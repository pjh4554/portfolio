import React, { useState } from "react";
import "../Projects.css";

const images = [];
for (let i = 1; i <= 7; i++) {
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
        <h2>회의실 예약 프로그램</h2>
        <p className="project-date">2023.11</p>
        <p>
          Python과 라이브러리(pandas, pytimekr)를 사용해 회의실 예약, 수정, 확인
          기능을 구현한 개인 프로젝트입니다.
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
            <p>Python</p>
            <p>VSCode</p>
          </div>

          <h3>문제 해결 과정</h3>
          <div className="problem-solving">
            <ul>
              <li>
                달력 구현에서 어려움을 겪었지만 **
                <span style={{ color: "red" }}>외부 도움</span>**을 받아
                해결했습니다.
              </li>
              <li>
                Python 기본 기능의 한계를 라이브러리(DataFrame)로 극복했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>에러 처리</span>**에서 문제를
                자주 만났지만, 디버깅 도구를 사용해 문제를 해결했습니다.
              </li>
              <li>
                프로젝트 초기에는 변수와 함수 이름을 직관적으로 짓지 않아,
                코드를 이해하는데 시간이 걸렸습니다. 이후 **
                <span style={{ color: "red" }}>명확한 네이밍</span>** 규칙을
                정립했습니다.
              </li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>
                코드가 복잡하고 정리가 미흡해, **
                <span style={{ color: "red" }}>클린 코드 필요성</span>**을
                깨달았습니다.
              </li>
              <li>
                로컬에서 절대 경로 미사용으로 경로 문제 발생, **
                <span style={{ color: "red" }}>절대 경로 사용 필요성</span>** 을
                인지했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>문서화</span>**를 소홀히 했던
                것이 아쉬웠습니다. 코드와 기능을 쉽게 설명할 수 있도록 문서화의
                필요성을 깨달았습니다.
              </li>
              <li>
                코드 리뷰를 받는 기회가 적었고, **
                <span style={{ color: "red" }}>리팩토링</span>** 기회가
                적었습니다. 다음 프로젝트에서는 코드 리뷰와 리팩토링을
                적극적으로 할 계획입니다.
              </li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/pjh4554/conference-python-"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            https://github.com/pjh4554/conference-python-
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
