import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="fade-in-text-title">
        안녕하십니까! 값싼 개발자 박종현입니다!
      </h1>
      <p className="fade-in-text">
        사람들과 프로젝트를 하면서 느낀 것은 새로운 것을 알게 되고, 그 과정이
        너무나 재밌습니다.
      </p>
      <p className="fade-in-text">회사를 다니면서 많은 것을 배우고 싶습니다!</p>
    </div>
  );
}

export default Home;
