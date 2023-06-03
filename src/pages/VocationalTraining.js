import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { AgencyStyled } from "../styles/AgencyStyled";

export default function Percentage() {
    return(
        <AgencyStyled>
            <Header />
            <PageTitle title="Institution (기관)" txt = "직업훈련 우수 기관입니다."/>
            <div className="agency-wrapper">
                <div className = "agency-search">
                    <div>검색</div>
                    <input type="text" />
                </div>
                <div className = "agency-list">

                </div>
            </div>
        </AgencyStyled>
    )
}