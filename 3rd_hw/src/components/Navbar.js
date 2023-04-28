import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { IoLogoGameControllerA } from "react-icons/io";
import { Link } from 'react-router-dom';


const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  //첫번째 padding - 위아래 , 두번째 padding - 왼쪽
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 50px;
  padding-right: 30px;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  .navbar__icon {
    font-size: 24px;
    color: #1877f2;
    margin-right: 10px;
    height: 32px;
    width: 32px;
  }

  form {        
    //.이 붙지 않는 경우는 html 태그 안에 존재하는 경우 ex) <div> 안에 있는 경우
    display: flex;
    align-items: center;
    input {
      height: 30px;
      padding: 0 10px;
      border: none;
      border-radius: 20px;
      background-color: #f0f2f5;
      margin-right: 10px;
      &:focus {
        outline: none;
      }
    }
    button {
      height: 30px;
      padding: 0 10px;
      border: none;
      border-radius: 20px;
      background-color: #1877f2;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: #3b5998;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
  .navbar_center_icon {
    color: #ccc;
    margin-right: 30px;
    margin-left: 30px;
    height: 32px;
    width: 32px;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  .navbar__user {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .navbar__user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .navbar__user-name {
      font-weight: bold;
    }
  }
  .navbar__menu {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    span:last-child {
      margin-right: 0;
    }
  }
`;



function Navbar() {

  return (
    <NavbarWrapper>
      <NavbarLeft>
        <FaFacebook className="navbar__icon" />
        <form>
          <input type="text" placeholder="Facebook 검색" />
          <button type="submit">검색</button>
        </form>
      </NavbarLeft>
      <NavbarCenter>
         <Link to="/Home">
          <AiFillHome className="navbar_center_icon" />
        </Link>
        <Link to="/Game">
          <IoLogoGameControllerA className="navbar_center_icon" />
        </Link>
        <Link to="/People">
          <IoMdPeople className="navbar_center_icon" />
        </Link>
      </NavbarCenter>
      <NavbarRight>
        <div className="navbar__user">
      
          <span className="navbar__user-name">박정규</span>
        </div>
        <div className="navbar__menu">
          <span>메세지</span>
          <span>로그아웃</span>
        </div>
      </NavbarRight>
    </NavbarWrapper>
  );
}

export default Navbar;