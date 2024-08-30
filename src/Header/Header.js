import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#home">처음으로</a>
          </li>
          <li>
            <a href="#introduction">자기소개</a>
          </li>
          <li>
            <a href="#skills">사용기술</a>
          </li>
          <li>
            <a href="#projects">프로젝트</a>
          </li>
          <li>
            <a href="#site">사이트</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
