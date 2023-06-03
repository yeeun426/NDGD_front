import React from "react";
import { PageTitleStyled } from "../styles/ComponentsStyled";

export default function Header() {
    return (
      <PageTitleStyled>
        <h2 className="pt-title">
            Calculator (계산기)
        </h2>
        <div className="pt-txt">
            4대 보험금 모의 계산기입니다.
        </div>
      </PageTitleStyled>
    );
}