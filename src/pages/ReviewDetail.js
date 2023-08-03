import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { WritingPostStyled } from "../styles/WritingPostStyled";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ReviewDetail(props) {
    const {id} = useParams();

    const navigate = useNavigate();
    const [detail, setDetail] = useState([]);

    const handleDelete = () => {
        window.Axios.delete(`review/review/${id}`)
        .then((res) => {
            alert("삭제 완료");
            navigate("/review", {replace: true})
        })
        .catch((error) => {
            debugger
        })
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/review/review/${id}`)
        .then((res) => {
            setDetail(res.data);
        })
        .catch((error) => {
            alert(error);
        })
    },[])    

    console.log(detail);
    
    return(
        <WritingPostStyled>
            <Header />
            <PageTitle title="Writing Review (리뷰 작성하기)" txt = "내가 경험한 NDGD를 공유해요!"/>
            <div className = "post-wrapper">
                <div className = "post-contents">
                    <div className = "post-items">
                        <span>제목</span>
                        <input
                        value = {detail.title}
                        disabled
                        />
                    </div>
                    <div className = "post-items">
                        <span>정확도</span>
                        <input
                            value = {detail.percentage + "%"}
                            disabled
                        />
                    </div>
                    <div className = "post-items">
                        <span>등록자</span>
                        <input
                            value = {detail.user}
                            disabled
                        />
                    </div>
                    <div className = "post-items">
                        <span>등록일</span>
                        <input
                            value = {detail.created_at && detail.created_at.slice(0,10)}
                            disabled
                        />
                    </div>
                    <div className = "post-items">
                        <span>내용</span>
                        <textarea
                            className="pi-contents"
                            value = {detail.body}
                            disabled
                        />                    
                    </div>
                </div>
                {localStorage.getItem("email") === detail.user
                &&
                <>
                <button>
                    수정하기
                </button>
                <button onClick = {handleDelete}>
                    삭제
                </button>
                </>
                }
            </div>
        </WritingPostStyled>
    )
}