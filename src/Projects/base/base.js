import React, { useState } from "react";
import "../Projects.css";

const images = [];
{
  /*이미지 폴더에 사진을 넣을때 숫자로 넣고, 사진의 개수를 10자리에 넣으면됨 */
}
for (let i = 1; i <= 10; i++) {
  images.push(require(`./image/${i}.png`));
}

function ProjectTemplate() {
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
        <h2>프로젝트 제목</h2> {/* 제목을 입력하세요 */}
        <p className="project-date">프로젝트 날짜</p> {/* 날짜를 입력하세요 */}
        <p>프로젝트 설명을 입력하세요.</p> {/* 프로젝트 설명을 입력하세요 */}
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
            {/* 사용 기술을 입력하세요 */}
            <p>사용 기술 1</p>
            <p>사용 기술 2</p>
            <p>사용 기술 3</p>
          </div>

          <h3>문제 해결 과정</h3>
          <div className="problem-solving">
            <ul>
              <li>문제 해결 과정 1을 입력하세요.</li>
              <li>문제 해결 과정 2을 입력하세요.</li>
              <li>문제 해결 과정 3을 입력하세요.</li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>아쉬운 점 1을 입력하세요.</li>
              <li>아쉬운 점 2을 입력하세요.</li>
              <li>개선 방향 1을 입력하세요.</li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/your-repository-link"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub 링크를 입력하세요
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
