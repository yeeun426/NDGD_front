import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { WritingPostStyled } from "../styles/WritingPostStyled";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function CommunityDetail() {
    const {id} = useParams();

    const navigate = useNavigate();
    const [detail, setDetail] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleDelete = () => {
        window.Axios.delete(`board/blog/${id}`)
        .then((res) => {
            alert("삭제 완료");
            navigate("/community", {replace: true})
        })
        .catch((error) => {
            alert(error);
        })
    }

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleEdit = () => {
        window.Axios.put(`board/blog/${id}/`, {
            title: title,
            body : body,
        })
        .then((res) => {
            alert("게시글이 수정되었습니다.");
            setEdit(false);
            navigate(`/community/${id}/`, {replace:true})
        })
        .catch((err) => {
            alert(err);
        })
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/board/blog/${id}`)
        .then((res) => {
            setDetail(res.data);
            
            setTitle(res.data.title);
            setBody(res.data.body);
        })
        .catch((error) => {
            alert(error);
        })
    },[])    

    console.log(detail);
    
    return(
        <WritingPostStyled>
            <Header />
            <PageTitle title="Community (커뮤니티)" txt = "다양한 정보를 공유해요!"/>
            <div className = "post-wrapper">
                <div className = "post-contents">
                    <div className = "post-items">
                        <span>제목</span>
                        { !edit ?
                        <input
                            value = {title}
                            disabled
                        />
                        :
                        <input
                            value = {title}
                            type = "text"
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                        }
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
                        { !edit ?
                        <textarea
                            className="pi-contents"
                            value = {body}
                            disabled
                        />
                        :
                        <textarea 
                            className = "pi-contents"
                            placeholder="내용을 입력하세요."
                            type = "text"
                            value = {body}
                            onChange={(e) => {
                                setBody(e.target.value)
                            }}
                        />
                        }                    
                    </div>
                </div>
                {localStorage.getItem("email") === detail.user &&
                    <div className = "post-admin">
                        {!edit 
                        ?
                        <>
                            <button onClick = {() => setEdit(true)}>
                                수정하기
                            </button>
                            <button onClick = {handleDelete}>
                                삭제
                            </button>
                        </>
                        :
                        <button className = "post-admin-complete" onClick = {handleEdit}>
                            게시하기
                        </button>
                        }
                    </div>
                }
                <Link to = "/community" className = "post-list-btn">다른 글 확인하기</Link>
            </div>
        </WritingPostStyled>
    )
}