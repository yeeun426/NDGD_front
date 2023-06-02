import React from "react";
import Header from "../components/Header";
import { ProcedureStyled } from "../styles/ProcedureStyled";

export default function Procedure() {
    return(
        <ProcedureStyled>
            <Header />
            <div>
                산재 보상 절차 / 신청 방법
            </div>
            <div>
                <div>업무상 재해 발생</div>
                <div>진단서 발급(병원)</div>
                <div>사업자 확인(회사)</div>
            </div>
        </ProcedureStyled>
    )
}