import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { CommunityStyled } from "../styles/CommunityStyled";

export default function Review() {
    return(
        <CommunityStyled>
            <Header />
            <PageTitle title="Review(사용 후기)" txt = "다양한 후기를 통해 NDGD의 정확도를 확인해보세요!"/>
            <div className = "community-wrapper">
                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-contents">
                            리뷰 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "review-percent">
                        80%
                    </div>
                </div>
                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-contents">
                            리뷰 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "review-percent">
                        78%
                    </div>
                </div>
                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-contents">
                            리뷰 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "review-percent">
                        60%
                    </div>
                </div>
                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-contents">
                            리뷰 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "review-percent">
                        70%
                    </div>
                </div>

                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-contents">
                            리뷰 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "review-percent">
                        90%
                    </div>
                </div>

                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-contents">
                            리뷰 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "review-percent">
                        80%
                    </div>
                </div>
            </div>
        </CommunityStyled>
    )
}