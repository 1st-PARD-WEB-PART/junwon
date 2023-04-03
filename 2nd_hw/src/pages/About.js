import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <Link to="/">홈</Link>
      {/* 홈으로 가는 link router ( home의 경우 주소값이 /) */}
    </div>
  );
};

export default About;