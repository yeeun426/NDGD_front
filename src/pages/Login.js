import React,{useEffect, useState} from 'react'

import { useNavigate } from 'react-router-dom';
import { ModalOverlayStyle, LoginStyle, SnsLoginStyle } from "../styles/LoginStyled";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [signup, setSignup] = useState(false);
  
  const [emailValid, setEmailValid] = useState(false);

  const [name, setName] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  // 동의 checkbox
  const [allCheck, setAllCheck] = useState(false);
  const [infoCheck, setInfoCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if(allCheck === false) {
      setAllCheck(true);
      setInfoCheck(true);
      setMarketingCheck(true);
    }else {
      setAllCheck(false);
      setInfoCheck(false);
      setMarketingCheck(false);
    }
  };

  const infoBtnEvent = () => {
    if(infoCheck === false) {
      setInfoCheck(true)
    } else {
      setInfoCheck(false)
    }
  };

  const marketingBtnEvent = () => {
    if(marketingCheck === false) {
      setMarketingCheck(true)
    } else{
      setMarketingCheck(false)
    }
  }

  useEffect(() => {
    if(infoCheck === true && marketingCheck === true) {
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  },[infoCheck, marketingCheck])

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  //회원가입
  const ClickSingup = () => {
    alert("성공")
  }

  // email 확인
  const onClickEmail = () => {
    alert("이메일 확인")
  };

  //카카오 로그인

  // let sessionStorage = window.sessionStorage;
  // login
  
  //이메일 형식
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(regex.test(email)) {
      setEmailValid(true);
    } else{
      setEmailValid(false);
    }
  }

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <LoginStyle>
    {!signup ?
    <ModalOverlayStyle>
      <div className="modal-wrapper">
        <div className="modal-icon">
          <img src = "images/logo.png" alt="NDGD"/>
        </div>

        <div className="modal-container">
          <div className="modal-title">
            <div>피고용인을 위한 <br/> 산재관리 플랫폼 "NDGD"</div>
            <div id="subTxt">산업재해의 모든 것<br/>지금 NDGD에서 시작하세요.</div>
          </div>
          
          <div className="modal-items">
            <label>이메일</label>
            <input 
              type="text" 
              placeholder="이메일을 입력해 주세요." 
              value={email} 
              onChange={handleEmail}
              />
            <div className="error-message">
              { !emailValid && email.length > 0 && (
              <div>올바른 이메일 형식을 입력해주세요.</div>
              )}
            </div>
          </div>  

          <div className="modal-items">
            <label>비밀번호 입력</label>
            <input 
              type="password" 
              placeholder="비밀번호" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
            
          <button id="emailBtn" onClick={onClickEmail}>로그인</button>
          <button id="SignupBtn" onClick={() => setSignup(true)}>회원가입</button>

          <div id="modalOr">or</div>
          <div id="modalNext">다음 계정으로 계속하기</div>

          <SnsLoginStyle>
            <div className="sns-items">
            {/* <a href={KAKAO_AUTH_URL}> */}
              <button id="login-kakao">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21"><path fill="#000" fillRule="nonzero" d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"></path></svg>
                <div className="sns-name">Kakao</div>
              </button>
            {/* </a> */}
            </div>

            <div className="sns-items">
              <button id="login-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="23" viewBox="0 0 12 23"><path fill="#fff" fillRule="nonzero" d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"></path></svg>
                <div className="sns-name">Facebook</div>
              </button>
            </div>

            <div className="sns-items">
              <button id="login-google">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><g fill="none" fillRule="nonzero"><path fill="#EA4335" d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"></path><path fill="#4285F4" d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"></path><path fill="#FBBC05" d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"></path><path fill="#34A853" d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"></path><path d="M0 0L23 0 23 23 0 23z"></path></g></svg>
                <div className="sns-name">Google</div>
              </button>
            </div>

            <div className="sns-items">
              <button id="login-apple">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24"><path fill="#fff" fillRule="nonzero" d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"></path></svg>
                <div className="sns-name">Apple</div>
              </button>
            </div>
          </SnsLoginStyle>

          <div className="agree-text">
            걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다. <br/>
            회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다.
          </div>
        </div>
      </div>
    </ModalOverlayStyle>
    :
    <ModalOverlayStyle paddingBottom={22}>
      <div className="modal-wrapper">
        <div className="signup-title">
          <div>회원가입</div>
        </div>
        
        <div className="modal-container">
          <div className="modal-items">
            <label>이름</label>
            <input 
              type="text" 
              placeholder="이름을 입력해 주세요." 
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>

          <div className="modal-items">
            <label>휴대폰 번호</label>
            <select defaultValue='한국'>
              <option value='한국'>대한민국 +82</option>
              <option value='일본'>Japan +81</option>
              <option value='태국'>Taiwan +886</option>
              <option value='일본'>United States +1</option>
            </select>
            <div className="number-certif">
              <input 
                type="text" 
                placeholder="(예시)010-3456-7890" 
                value={phoneNumber}
                onChange={(e) => {
                  setphoneNumber(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="modal-items">
            <label>비밀번호</label>
            <input 
              type="password" 
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }} 
            />
            <div id="pwTxt">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.</div>
          </div>  

          <div className="modal-items">
            <label>비밀번호 확인</label>
            <input 
              type="password" 
              placeholder="비밀번호를 다시 한번 입력해 주세요." 
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value)
              }} 
            />  
          </div>
          
          <div className="agree-items">
            <input type="checkbox" checked={allCheck} onChange={allBtnEvent} />
            <span>전체 동의</span>
          </div>

          <div className="agree-subitems">
            <input type="checkbox"  checked={infoCheck} onChange={infoBtnEvent} />
            <span>개인정보 수집 빛 이용 동의(필수)</span>
          </div>

          <div className="agree-subitems">
            <input type="checkbox"  checked={marketingCheck} onChange={marketingBtnEvent} />
            <span>이벤트 소식 등 알림 정보 받기</span>
          </div>

          <button id="signupBtn" onClick={()=>{ClickSingup()}}>회원가입하기</button>
        </div>
      </div>
    </ModalOverlayStyle>
    }
    </LoginStyle>
  );
};