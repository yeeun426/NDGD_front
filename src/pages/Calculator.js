import React from "react";
import Header from "../components/Header";
import { CalculatorStyled } from "../styles/CalculatorStyled";

export default function Procedure() {
    return(
        <CalculatorStyled>
            <Header />
            {/* <div>
                4대 보험금 모의 계산
            </div> */}
            <div className="calc-wrapper">
                <div>재해 발생 당시 정보와 현재 본인의 상황을 입력해주세요.</div>
                <div className="calc-contents">
                    <div className = "calc-items">
                        <div className="calc-items-name">발생 년도</div>
                        <select>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <div className = "calc-items">
                        <div className="calc-items-name">직종</div>
                        <select>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <div className = "calc-items">
                        <div className="calc-items-name">병명</div>
                        <select>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <div className = "calc-items">
                        <div className="calc-items-name">근무지역</div>
                        <select>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>수령 가능 보험료</div>
                </div>
            </div>
        </CalculatorStyled>
    )
}