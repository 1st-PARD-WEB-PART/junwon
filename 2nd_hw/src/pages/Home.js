import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/about">소개</Link>   
      {/* //about 페이지로 가는 link router */}
      <ul>
        <li>
          <Link to="/profiles/Kyj">김유진의 프로필</Link>
          {/* profile의 Kyj의 링크로 가는 link router */}
        </li>
        <li>
          <Link to="/profiles/Kjw">강준원의 프로필</Link>
          {/* profile의 Kjw 링크로 가는 link router */}
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
          {/* profile의 void 링크로 가는 link router */}
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
          {/* articles 링크로 가는 link router */}
        </li>
      </ul>
    </div>
  );
};

export default Home;