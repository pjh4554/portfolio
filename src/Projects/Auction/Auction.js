import React, { useState } from "react";
import "../Projects.css";

const images = [];
for (let i = 1; i <= 10; i++) {
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
        <h2>경매장</h2>
        <p className="project-date">2024.09</p>
        <p>
          **<span style={{ color: "red" }}>소켓통신</span>**을 적용하고 싶어서
          만든 개인 프로젝트입니다.
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
            <p>IntelliJ</p>
            <p>GitHub</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>
              **<span style={{ color: "red" }}>React</span>**
            </p>
            <p>TypeScript</p>
            <p>NodeJS</p>
            <p>
              **<span style={{ color: "red" }}>SpringBoot</span>**
            </p>
            <p>Hibernate</p>
            <p>
              **<span style={{ color: "red" }}>MySQL</span>**
            </p>
            <p>Gradle</p>
            <p>AWS</p>
            <p>VSCode</p>
          </div>

          <h3>문제 해결 과정</h3>
          <div className="problem-solving">
            <ul>
              <li>
                **<span style={{ color: "red" }}>소켓통신</span>**을 처음
                적용해보며, **
                <span style={{ color: "red" }}>클라이언트와 서버 간 통신</span>
                **의 복잡성을 이해했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>소켓통신 오류</span>** 해결을
                위해 많은 **<span style={{ color: "red" }}>검색</span>**과 **
                <span style={{ color: "red" }}>디버깅</span>**을 반복했고,
                성공적으로 **<span style={{ color: "red" }}>통신</span>**을
                구현했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>데이터베이스</span>**와의 통신
                중 발생한 문제를 **
                <span style={{ color: "red" }}>로그 분석</span>**과 **
                <span style={{ color: "red" }}>디버깅</span>**을 통해
                해결했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>API 호출</span>** 시 **
                <span style={{ color: "red" }}>CORS 오류</span>**가 발생했으나,
                서버 설정을 조정하여 문제를 해결했습니다.
              </li>
              <li>
                **실시간 경매 시스템**을 구현하기 위해 **
                <span style={{ color: "red" }}>WebSocket</span>**을 활용하여
                여러 사용자가 동시에 입찰할 수 있는 기능을 개발했습니다.
              </li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>
                **<span style={{ color: "red" }}>디자인</span>**에 충분한 시간을
                투자하지 못한 점이 아쉬웠습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>소켓통신</span>**의 **
                <span style={{ color: "red" }}>최적화</span>**에 대해 더 많은
                학습이 필요함을 느꼈습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>배포 과정</span>**에서 발생한
                문제들을 신속히 해결하지 못한 점이 아쉬웠습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>리팩토링</span>**을 통해 코드를
                더 효율적으로 만들 필요성을 깨달았습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>소켓 통신 성능 최적화</span>
                **와 서버 부하를 줄이기 위한 **
                <span style={{ color: "red" }}>로드 밸런싱</span>**을 적용해볼
                계획입니다.
              </li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/pjh4554/Auction"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            https://github.com/pjh4554/Auction
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
