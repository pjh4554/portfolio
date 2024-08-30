import React from "react";
import "./Site.css";
import BlogImage from "./blog.png";
import GitHubImage from "./github.png";
import MailImage from "./mail.png";
import PhoneImage from "./phone.png";
import PhoneModal from "./PhoneModal";

function Site() {
  return (
    <div className="site-container">
      <div className="site-item">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dnflgkrry28@gmail.com&su=Hello&body=Write%20your%20message%20here"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MailImage} alt="메일" className="site-icon" />
        </a>
      </div>
      <div className="site-item">
        <PhoneModal
          trigger={
            <img
              src={PhoneImage}
              alt="전화번호"
              className="site-icon"
              style={{ cursor: "pointer" }}
            />
          }
          phoneNumber="010-3799-8147"
        />
      </div>
      <div className="site-item">
        <a
          href="https://pjh4554.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={BlogImage} alt="블로그" className="site-icon" />
        </a>
      </div>
      <div className="site-item">
        <a
          href="https://github.com/pjh4554"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubImage} alt="깃허브" className="site-icon" />
        </a>
      </div>
    </div>
  );
}

export default Site;
