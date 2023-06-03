import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import { ProcedureStyled } from "../styles/ProcedureStyled";

export default function Procedure() {
    return(
        <ProcedureStyled>
            <Header />
            <PageTitle title="Procedure (절차)" txt = "산재 보상 절차/신청 방법입니다."/>
        </ProcedureStyled>
    )
}