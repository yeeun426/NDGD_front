import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { WritingPostStyled } from "../styles/WritingPostStyled";
import { useParams, useLocation } from "react-router-dom";

export default function ReviewDetail(props) {
    const {id} = useParams();

    const location = useLocation();
    const review = location.state.review;

    console.log(review);
    console.log(id);
    
    return(
        <WritingPostStyled>
            <Header />
            <PageTitle title="Writing Review (리뷰 작성하기)" txt = "내가 경험한 NDGD를 공유해요!"/>
            <div className = "post-wrapper">
                <div className = "post-contents">
                    <div className = "post-items">
                        <span>제목</span>
                        <div>
                            {review.title}
                        </div>
                    </div>
                    <div className = "post-items">
                        <span>정확도</span>
                        <span>{review.percentage}%</span>
                    </div>
                    <div className = "post-items">
                        <span>등록자</span>
                        <span>{review.user}</span>
                    </div>
                    <div className = "post-items">
                        <span>등록일</span>
                        <span>{review.created_at.slice(0,10)}</span>
                    </div>
                    <div className = "post-items">
                        <span>내용</span>
                        <div>{review.body}</div>
                    </div>
                </div>
            </div>
        </WritingPostStyled>
    )
}