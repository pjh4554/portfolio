import React, { useState } from "react";
import "../Projects.css";

const images = [];
for (let i = 1; i <= 11; i++) {
  images.push(require(`./image/${i}.jpg`));
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
        <h2>Crafty</h2> {/* 프로젝트 제목 */}
        <p className="project-date">2024-09</p> {/* 날짜 */}
        <p>
          **<span style={{ color: "red" }}>Flutter</span>**와 **
          <span style={{ color: "red" }}>Dart</span>** 를 사용하여 개발된 물건
          거래 앱입니다. **<span style={{ color: "red" }}>Firebase</span>** 를
          백엔드로 사용하였으며, 설계는 **
          <span style={{ color: "red" }}>Pixso</span>**로 진행되었습니다. 이
          프로젝트는 **<span style={{ color: "red" }}>Google Play Store</span>
          **에도 배포되었습니다.
        </p>
        <p>
          또한, 이 프로젝트에서는 **
          <span style={{ color: "red" }}>Google Ads</span>**를 통합하여 배너
          광고와 리워드 광고를 앱 내에 구현하였습니다. 사용자가 광고를 시청한 후
          리워드를 받을 수 있는 기능을 추가하였으며, 앱의 수익 모델을 구축하는데
          중요한 역할을 했습니다. 실제로 배너 광고는 각 화면 하단에, 리워드
          광고는 특정 이벤트(예: 포인트 얻기)에서 활용되었습니다.
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
            {/* 사용 기술 */}
            <p>Flutter</p>
            <p>Dart</p>
            <p>Firebase</p>
            <p>Pixso</p>
            <p>Google Play Store</p>
            <p>Google Ads</p> {/* Google Ads 통합 기술 */}
            <p>Android Studio</p>
            <p>Github</p>
          </div>

          <h3>문제 해결 과정</h3>
          <div className="problem-solving">
            <ul>
              <li>
                **<span style={{ color: "red" }}>Flutter</span>**와 **
                <span style={{ color: "red" }}>Dart</span>** 를 처음 배우는
                과정에서, 기존의 **<span style={{ color: "red" }}>Java</span>**
                지식을 바탕으로 빠르게 학습할 수 있었습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>Firebase</span>**의 인증과
                데이터베이스 기능을 처음 접하면서, 초반에는 **
                <span style={{ color: "red" }}>비동기 처리</span>**에서 어려움을
                겪었지만, 공식 문서를 통해 문제를 해결했습니다.
              </li>
              <li>
                설계 단계에서 **<span style={{ color: "red" }}>Pixso</span>**를
                사용하여 사용자 경험을 고려한 UI 디자인을 구현했습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>Google Ads</span>**를 통해 광고
                수익 모델을 구축하며, 광고 시청 후 리워드를 제공하는 기능을
                추가했습니다.
              </li>
            </ul>
          </div>

          <h3>아쉬운 점과 개선 방향</h3>
          <div className="improvement">
            <ul>
              <li>
                **<span style={{ color: "red" }}>UI 디자인</span>**에 시간을
                충분히 할애하지 못해 아쉬웠습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>Firebase</span>**의 데이터 구조
                최적화에 대한 고민이 부족해, 추후 개선할 계획입니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>Flutter 성능 최적화</span>**를
                위한 추가적인 학습과 리팩토링이 필요함을 느꼈습니다.
              </li>
              <li>
                **<span style={{ color: "red" }}>Google Ads</span>** 광고
                최적화를 통해 수익성을 더욱 높일 계획입니다.
              </li>
            </ul>
          </div>

          <h3>GitHub</h3>
          <a
            href="https://github.com/pjh4554/crafty"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            https://github.com/pjh4554/crafty
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
