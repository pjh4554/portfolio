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
        <h2>전화번호부</h2>
        <p className="project-date">2023.12</p>
        <p>자바와 SQL을 사용해 전화번호부 관리 기능을 구현한 프로젝트입니다.</p>
        <p>
          JDBC를 이용해 MySQL 데이터베이스에 연결, 기본 CRUD 작업을
          수행했습니다.
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
          </div>

          <h3>문제 해결 과정</h3>
          <div className="problem-solving">
            <ul>
              <li>
                JDBC에서 **<span style={{ color: "red" }}>보안성</span>** 문제를
                해결하기 위해 `stmt`에서 `pstmt`로 변경했습니다.
              </li>
              <li>
                전화번호 검색 기능 구현 시, **
                <span style={{ color: "red" }}>재귀함수</span>**와 임시 테이블을
                활용해 다중 검색 기능을 구현했습니다.
              </li>
              <li>
                알고리즘 개념을 적용하여 **
                <span style={{ color: "red" }}>이진 탐색</span>**을 사용해 대량
                데이터의 전화번호 검색 시간을 단축했습니다.
              </li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>
                Java와 SQL을 다루는 능력이 **
                <span style={{ color: "red" }}>부족</span>**하여, 추가적인 개념
                학습이 필요합니다.
              </li>
              <li>
                재귀함수 사용 시 **
                <span style={{ color: "red" }}>오버헤드</span>** 발생 가능성을
                깨닫고, 더 효율적인 검색 방법 탐색이 필요합니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>알고리즘</span>**을 공부하면서
                더 효율적인 문제 해결 방법에 대해 관심을 가지게 되었고, 다양한
                알고리즘을 프로젝트에 적용해보고 싶습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>SQL</span>**에서 JOIN과 같은
                복잡한 쿼리를 작성할 때 시간이 오래 걸렸습니다. SQL 성능
                최적화에 대해 추가적으로 학습할 계획입니다.
              </li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/pjh4554/phonebook3"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            https://github.com/pjh4554/phonebook3
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
