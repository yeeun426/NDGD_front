import React from "react";
import { HeaderStyled } from "../styles/ComponentsStyled";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <HeaderStyled>
        <Link to ="/">
          <div className = "header-left">
            <img src = "images/logo.png" alt="NDGD"/>
          </div>
        </Link>
        
        <div className = "header-right">
          <div className = "header-right-items">
            <div>공지사항</div>
            <div>커뮤니티</div>
            <div>사용 후기</div>
            <div>로그인/회원가입</div>
          </div>
        </div>
      </HeaderStyled>
    );
}