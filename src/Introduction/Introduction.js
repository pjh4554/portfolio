import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="introduction-section">
      <h2 className="title">자기 소개</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2012 - 2014</div> {/* 고등학교 졸업 */}
          <div className="timeline-content">
            <h3>수원고등학교 졸업</h3>
            <p>2014년에 졸업했습니다.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2015 - 2021</div> {/* 대학교 졸업 */}
          <div className="timeline-content">
            <h3>단국 대학교 전자 전기 공학과 중퇴</h3>
            <p>2015년에 입학 후, 2021년에 중퇴했습니다.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2022 - 2023</div> {/* 이마트 근무 */}
          <div className="timeline-content">
            <h3>이마트 근무</h3>
            <p>
              이마트에서 판매 및 고객 서비스 업무를 수행하며 팀워크와
              커뮤니케이션 능력을 길렀습니다.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2023 - 2024</div> {/* 부트캠프 */}
          <div className="timeline-content">
            <h3>mbc 아카데미 컴퓨터 교육센터 수료</h3>
            <p>내일배움캠프 mbc 아카데미 풀스택 과정을 6개월 수료했습니다.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2024</div> {/* SQLD 자격증 */}
          <div className="timeline-content">
            <h3>SQLD 자격증 취득</h3>
            <p>
              SQLD 자격증을 취득하여 데이터베이스의 구조와 SQL 쿼리 작성에 대한
              심화 지식을 얻었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
