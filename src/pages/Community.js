import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { CommunityStyled } from "../styles/CommunityStyled";

export default function Community() {
    const onPost = () => {  //현재 버튼누르면 바로 data가 포스트 되도록 되어있는데 user한테 내용 입력받아서 이 버튼 누르면 포스트 되도록 수정 해야할 듯
        alert("포스팅 하기")
        const userData = {
          title: "testpost2",
          body: "testpost2"
      };
      window.Axios.post("board/blog/", userData)
        .then(function(response){
          alert("포스트완료");
        });
      };
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
                <button id="postBtn" onClick={onPost}>포스팅하기(test)</button>     //임시 포스팅 버튼
            </div>

        </CommunityStyled>
    )
}