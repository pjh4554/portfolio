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
        <h2>영화관</h2>
        <p className="project-date">2024.07</p>
        <p>
          **<span style={{ color: "red" }}>리액트</span>**를 연습하기 위해 만든
          개인 프로젝트입니다.
        </p>
        <p>
          **<span style={{ color: "red" }}>CGV</span>**와 **
          <span style={{ color: "red" }}>메가박스</span>**를 베이스로 영화관
          시스템을 구현했습니다.
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
                **<span style={{ color: "red" }}>리액트</span>**와 **
                <span style={{ color: "red" }}>자바스크립트</span>**를 동시에
                배우며 프로젝트를 진행하는 과정에서 어려움을 겪었으나, 검색을
                통해 해결했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>상대 경로</span>**로 이미지를
                불러오는 데 실패하여 **
                <span style={{ color: "red" }}>절대 경로</span>**로 변경. 이를
                통해 절대 경로가 더 나은 선택임을 배웠습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>MyBatis</span>**를 사용했는데,
                **<span style={{ color: "red" }}>철자</span>**에 민감하다는 점을
                깨달아 변수를 정확히 맞추는 것의 중요성을 알게 되었습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>cors 오류</span>**가 자주
                발생했지만, 철자 오류가 원인이었고 집중하여 이를 해결했습니다.
              </li>
              <li>
                대량 데이터를 처리할 때 성능 이슈를 겪었지만, **
                <span style={{ color: "red" }}>React.memo</span>**와 같은 최적화
                방법을 사용해 성능을 개선했습니다.
              </li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>
                혼자서 **<span style={{ color: "red" }}>디자인</span>**에 신경을
                쓰지 못해 아쉬웠으며, 협업 시 **
                <span style={{ color: "red" }}>디자인</span>**에 더 집중할
                필요가 있음을 느꼈습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>스프링 시큐리티</span>**를
                사용하려 했으나, **
                <span style={{ color: "red" }}>cors 오류</span>**로 인해
                해결하지 못해 아쉬웠습니다.
              </li>
              <li>
                다른 프로젝트와 병행하느라 일부 기능에 집중하지 못한 점이
                아쉬웠습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>데이터베이스 설계</span>**의
                중요성을 깨달았으며, **
                <span style={{ color: "red" }}>컬럼</span>** 추가 시마다 더미
                데이터를 다시 만드는 과정에서 어려움을 겪었습니다.
              </li>
              <li>
                프로젝트를 테스트하는 과정에서 **
                <span style={{ color: "red" }}>단위 테스트</span>**를 적극적으로
                활용하지 못한 점이 아쉬웠고, 향후 **
                <span style={{ color: "red" }}>테스트 자동화</span>**에 대한
                학습이 필요하다고 느꼈습니다.
              </li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/pjh4554/Cinema"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            https://github.com/pjh4554/Cinema
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
