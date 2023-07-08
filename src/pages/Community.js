import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { CommunityStyled } from "../styles/CommunityStyled";

export default function Community() {
    return(
        <CommunityStyled>
            <Header />
            <PageTitle title="Community (커뮤니티)" txt = "다양한 정보를 공유해요!"/>
            <div className = "community-wrapper">
                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-title">
                            게시글 제목
                        </div>
                        <div className = "ci-contents">
                            게시글 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "community-img">

                    </div>
                </div>
                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-title">
                            게시글 제목
                        </div>
                        <div className = "ci-contents">
                            게시글 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "community-img">

                    </div>
                </div>
                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-title">
                            게시글 제목
                        </div>
                        <div className = "ci-contents">
                            게시글 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "community-img">

                    </div>
                </div>
                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-title">
                            게시글 제목
                        </div>
                        <div className = "ci-contents">
                            게시글 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "community-img">

                    </div>
                </div>

                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-title">
                            게시글 제목
                        </div>
                        <div className = "ci-contents">
                            게시글 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "community-img">

                    </div>
                </div>

                <div className = "community-items">
                    <div className = "ci-txt">
                        <div className = "ci-title">
                            게시글 제목
                        </div>
                        <div className = "ci-contents">
                            게시글 내용
                        </div>

                        <div className = "ci-comment">
                            <span>댓글</span>
                            <span>3</span>
                        </div>   
                    </div>
                    <div className = "community-img">

                    </div>
                </div>
            </div>
        </CommunityStyled>
    )
}