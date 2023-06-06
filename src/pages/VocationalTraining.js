import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { TrainingStyled } from "../styles/AgencyStyled";

export default function Percentage() {
    return(
        <TrainingStyled>
            <Header />
            <PageTitle title="Institution (기관)" txt = "직업훈련 우수 기관입니다."/>
            <div className="training-wrapper">

            </div>
        </TrainingStyled>
    )
}