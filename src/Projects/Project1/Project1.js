import React, { useState } from "react";
import "../Projects.css";
import Image11 from "./11.png";
import Image12 from "./12.png";
import Image13 from "./13.png";
import Image14 from "./14.png";

function Project1() {
  const images = [Image11, Image12, Image13, Image14];
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
      <div className="project-content">
        <div className="project-left">
          <div className="image-slider">
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
          <h2>타임박스 플래너</h2>
          <p>2024.02 (1인 개인 프로젝트)</p>
          <p>
            타임박스 플래너를 앱으로 활용하기 위한 PWA 기반의 웹사이트입니다.
            사용성을 높이고 직접 개발하였습니다.
          </p>
          <p>
            인증을 위해 Supabase를 사용하고, Firebase와 비교하여 교체할 수
            있었고, Vercel의 무료 PostgreSQL을 사용하여 Raw SQL에 대해 익숙해질
            수 있었습니다.
          </p>
          <button className="detail-button">자세히 보기 - README</button>
          <ul className="project-details">
            <li>✔ 주요 기능: 날짜별 루틴의 달성 여부, 할 일 목록 관리</li>
            <li>
              ✔ GitHub:{" "}
              <a
                href="https://github.com/hcjcq1/timebox"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/hcjcq1/timebox
              </a>
            </li>
            <li>
              ✔ URL:{" "}
              <a
                href="https://timebox-planner.co.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                timebox-planner.co.kr
              </a>
            </li>
            <li>✔ Frontend: Next.js, Zustand, Sass</li>
            <li>✔ Backend: Next.js, Supabase Authentication, Vercel</li>
            <li>✔ Database: PostgreSQL</li>
            <li>✔ Deployment: Vercel, Supabase (Authentication)</li>
          </ul>
          <div className="project-buttons">
            <button className="site-button">사이트</button>
            <button className="github-button">깃허브</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
