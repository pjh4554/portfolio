import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#home">처음으로</a>
          </li>
          <li>
            <a href="#introduction">자기소개</a>
          </li>
          <li>
            <a href="#skills">사용기술</a>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`dropdown ${isDropdownOpen ? "hover" : ""}`}
          >
            <a href="#projects">프로젝트</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#conference">회의실</a>
                </li>
                <li>
                  <a href="#phone">전화번호부</a>
                </li>
                <li>
                  <a href="#mrs">영화관 예매</a>
                </li>
                <li>
                  <a href="#sbb">커뮤니티 사이트</a>
                </li>
                <li>
                  <a href="#erp">ERP</a>
                </li>
                <li>
                  <a href="#cinema">시네마</a>
                </li>
                <li>
                  <a href="#auction">경매</a>
                </li>
                <li>
                  <a href="#crafty">판매앱</a>
                </li>
              </ul>
            )}
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
