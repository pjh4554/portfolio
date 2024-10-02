import React, { useState } from "react";
import "../Projects.css";

const images = [];
for (let i = 1; i <= 12; i++) {
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
        <h2>질문게시판</h2>
        <p className="project-date">2024.02</p>
        <p>
          **<span style={{ color: "red" }}>HTML</span>**, **
          <span style={{ color: "red" }}>CSS</span>**, **
          <span style={{ color: "red" }}>JavaScript</span>**, **
          <span style={{ color: "red" }}>Spring Boot</span>**를 배우고 만든 개인
          프로젝트입니다.
        </p>
        <p>
          기본적인 **<span style={{ color: "red" }}>CRUD</span>** 기능을
          구현했습니다.
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
            <p>
              **<span style={{ color: "red" }}>Java</span>**
            </p>
            <p>
              **<span style={{ color: "red" }}>MySQL</span>**
            </p>
            <p>
              **<span style={{ color: "red" }}>HTML</span>**
            </p>
            <p>
              **<span style={{ color: "red" }}>CSS</span>**
            </p>
            <p>
              **<span style={{ color: "red" }}>JavaScript</span>**
            </p>
            <p>
              **<span style={{ color: "red" }}>Hibernate</span>**
            </p>
            <p>
              **<span style={{ color: "red" }}>AWS</span>**
            </p>
            <p>
              **<span style={{ color: "red" }}>Spring Boot</span>**
            </p>
            <p>Gradle</p>
            <p>GitHub</p>
            <p>TypeScript</p>
          </div>

          <h3>문제 해결 과정</h3>
          <div className="problem-solving">
            <ul>
              <li>
                **<span style={{ color: "red" }}>JDBC</span>**를 사용했을 때
                복잡해서 효율적인 방법을 고민했고, 검색 끝에 **
                <span style={{ color: "red" }}>Spring</span>**을 알게
                되었습니다. 하지만 **
                <span style={{ color: "red" }}>Spring</span>**도 어려워, **
                <span style={{ color: "red" }}>Spring Boot</span>**를 찾았고
                이를 활용하여 프로젝트를 진행했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>Spring Boot</span>**의 **
                <span style={{ color: "red" }}>MVC 패턴</span>**, **
                <span style={{ color: "red" }}>Controller</span>**, **
                <span style={{ color: "red" }}>Entity</span>** 등 주요 개념을
                이해하게 되었으며, 프로젝트를 통해 실무에 가까운 경험을
                쌓았습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>SQL</span>**을 어느 정도 사용할
                줄 알았으나, 복잡한 쿼리를 작성하는 데 시간을 소모했고, 이를
                최적화하는 방법을 배웠습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>리눅스</span>**와 **
                <span style={{ color: "red" }}>AWS</span>** 서버 배포를
                시도하면서, 환경 설정과 서버 관리에 대한 기초 지식을 쌓았습니다.
              </li>
              <li>
                알고리즘과 **<span style={{ color: "red" }}>자료구조</span>**
                학습을 병행하면서, 검색 기능에서 **
                <span style={{ color: "red" }}>이진 탐색</span>**을 적용해 검색
                성능을 최적화했습니다.
              </li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>
                **<span style={{ color: "red" }}>Java</span>**와 **
                <span style={{ color: "red" }}>Spring Boot</span>**는 문법이
                같지만, **<span style={{ color: "red" }}>Spring Boot</span>**의
                고유한 문법을 따로 배워야 했다는 점을 깨달았습니다. 따라서 더
                많은 **<span style={{ color: "red" }}>Spring Boot</span>**
                학습이 필요하다고 느꼈습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>SQL</span>**을 자유자재로
                사용하지 못했고, 복잡한 쿼리 작성에 한계를 느껴 추가적인 학습과
                최적화가 필요했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>AWS</span>** 배포는 성공했지만,
                **<span style={{ color: "red" }}>도메인 구매</span>**를 하지
                못한 점이 아쉬웠습니다.
              </li>
              <li>
                알고리즘과 **<span style={{ color: "red" }}>코딩 테스트</span>
                **를 준비 중이었으며, 프로젝트 내에서 알고리즘을 적용할 수 있는
                방법을 지속적으로 고민했습니다.
              </li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/pjh4554/sbb"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            https://github.com/pjh4554/sbb
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
