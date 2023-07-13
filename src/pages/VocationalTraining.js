import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import MapContainer from "../components/MapContainer";
import jobData from "../data/JobInstitutionData.json"

import { TrainingStyled } from "../styles/AgencyStyled";

export default function Percentage() {
    return(
        <TrainingStyled>
            <Header />
            <PageTitle title="Institution (기관)" txt = "직업훈련 우수 기관입니다."/>
            <div className="training-wrapper">
                <MapContainer/>
                <div className = "training-list">
                    {jobData.job.map((job) => (
                        <div className = "training-list-items" key = {job.id}>
                            <div className = "job-best">
                                {job.best === "최우수"
                                ?
                                <img src = "images/goldmedal.png" alt="최우수"/> 
                                :
                                <img src = "images/silvermedal.png" alt="우수"/> 
                                }
                            </div>
                            <div className = "job-txt">
                                <div className = "job-name">{job.name}</div>
                                <div className = "job-address">{job.address}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </TrainingStyled>
    )
}