# NDGD
--------------
## Project Purpose
> 본 프로젝트는 개인 맞춤형 산재 보상 정보(보험금 액수, 승인 확률) 를 제공할 뿐민 아니라 노동자에게 필요한 정보를 직접 제공, 또는 해당 정보가 있는 곳으로 연결해주는 노동자를 위한 산재 보상 정보의 메카
> <br/>제작기간은 2023년 4월 30일 → 2023년 7월 24일로 3달이다.
--------------
## Project Idea
> 1. 노무사나 변호사가 필요한 경우 노동자가 본인의 상황에 따른 가능한 보상 정도에 대해 어느 정도 파악하고 있어야 좋은 노무사또는 변호사를 선택할 수 있다. 하지만 이는 노동자가 개인적으로 수행하기엔 어려운 단계이다. 이를 위해 개인 맞춤형 산재 보상 정보를 제공하는 서비스가 필요하다고 생각했다.<br/>
> 2. 산재 승인 및 보험금 수령의 절차가 복잡하며, 관련 정보가 분산되어 있기 때문에 산재가 발생했을 때 노동자 스스로 수많은 검색의 단계를 거쳐야 한다. 이 때문에 기존의 웹사이트들 보다 좀 더 직관적이고 실질적인 도움이 되는 정보를 제공하는 웹 플랫폼이 필요하다는 생각이 들었다.
--------------
## Learn
> [사용자 중심 UI/UX]
> - 산재 보상 정보를 찾는 주요 사용자층이 나이대가 높은 경우가 많을 것이라고 판단하여, 가독성을 높이기 위해 기존 웹사이트들에 비해 글씨 크기를 크게 설정했습니다. 또한 버튼 크기와 간격을 적절히 조정해 시인성을 높이고, 마우스 또는 터치로 쉽게 조작할 수 있도록 UX를 개선했습니다.
> - 모든 기능에 한눈에 접근할 수 있도록 메인 페이지를 설계해 사용자들이 원하는 페이지로 쉽게 이동할 수 있게 했습니다. 이를 위해 주요 메뉴와 버튼을 한눈에 보이도록 배치하고, 헷갈리지 않도록 명확한 볼드 텍스트와 색상 대비를 활용했습니다.
> - 산재 보상 절차 방법 페이지에서는 사용자들이 필요한 자료를 빠르게 찾고 사용할 수 있도록, 최소 클릭만으로 필요한 정보를 다운로드하거나 외부 사이트로 바로 연결될 수 있는 단계를 설계했습니다.
>
> [Scroll Restoration]
> - Scroll Restoration은 웹 페이지에서 사용자가 뒤로가기, 앞으로가기를 실행했을 때 이전 페이지의 스크롤 위치를 유지하거나 초기화하는 기능입니다. 이를 구현하기 위해 React Router의 useLocation 훅을 사용하여 사용자가 페이지를 탐색할 때 항상 최상단으로 스크롤되도록 했습니다.
> - 구현 방법:이 코드를 통해 사용자가 새 페이지로 이동할 때 이전 페이지의 스크롤 위치를 초기화하고, 새 페이지가 항상 처음부터 로드되도록 설정했습니다.
> ```javascript
>import { useEffect } from 'react';
>import { useLocation } from 'react-router-dom';
>
>const ScrollToTop = () => {
>  const { pathname } = useLocation();
>
>  useEffect(() => {
>    window.scrollTo(0, 0);
>  }, [pathname]);
>
>  return null;
>};
>
>export default ScrollToTop;
>```
>   
> [Kakaomap api]
> - 마커를 클릭했을 때 해당 장소의 세부 정보를 보여주는 InfoWindow를 구현했습니다. 이를 통해 사용자는 지도의 마커를 직관적으로 이해할 수 있습니다. InfoWindow에 장소 이름과 설명, 링크를 추가해 사용자 경험을 향상시켰습니다.
> - 마커를 클릭하거나 특정 장소를 검색했을 때, 해당 위치를 중심으로 지도의 화면이 이동하도록 설정했습니다.
>
> [useParams]
> - 커뮤니티 게시글에서 특정 글을 클릭하면 id 값을 기반으로 동적 라우팅을 사용해 상세 페이지로 이동하도록 구현했습니다. React Router의 useParams 훅을 사용해 URL의 파라미터를 읽어 해당 데이터를 화면에 렌더링했습니다.
> ```javascript
>import { useParams } from 'react-router-dom';
>
>const PostDetail = () => {
>  const { id } = useParams();
>  const post = postData.find((item) => item.id === Number(id));
>
>  return (
>    <div>
>      <h1>{post.title}</h1>
>      <p>{post.content}</p>
>    </div>
>  );
>};
>
>export default PostDetail;
>```
> - /post/:id 형태의 URL을 통해 사용자와 검색 엔진이 게시글의 내용을 쉽게 이해하고 접근할 수 있도록 했습니다.
--------------
## Pages
> [메인페이지]
<img src="https://github.com/user-attachments/assets/703a9d34-2a68-4e9f-bfe3-62841c12bb17">

> [로그인]
<img src="https://github.com/user-attachments/assets/e24470e8-0519-4656-87d0-3b567e953885">
<img src="https://github.com/user-attachments/assets/fdedeab4-cf7d-4fbd-9e1a-17e84d6fad7a">

> [산재보상 절차/신청 방법]
<img src="https://github.com/user-attachments/assets/4c63d06e-cc16-44b4-8ecf-47cb71382cd9">

> [수령 가능 보험료/확률 계산기]
<img src="https://github.com/user-attachments/assets/57833d20-7c37-4fe0-b303-421c409bb90d">
<img src="https://github.com/user-attachments/assets/40f5fb8c-d0fc-44d2-b9a7-66bd7c608706">

> [직업훈련 우수 기관]
<img src="https://github.com/user-attachments/assets/1b0f2b7e-828f-4c6b-aaea-1deca23f0fbd">

> [재활인증 의료 기관]
<img src="https://github.com/user-attachments/assets/c2619400-08f8-42cb-b900-231b0b97f3b3">

> [커뮤니티]
<img src="https://github.com/user-attachments/assets/a8bb6800-09c4-455f-8554-64d487ab865c">
<img src="https://github.com/user-attachments/assets/2aeb8738-a05a-411e-b9f0-fe1332846436">

-------------
## Role
> 프론트엔드 개발을 맡아 전체 퍼블리싱과, 로그인 페이지, 산재 보상 절차 방법 페이지, 보험금 모의 계산기, 수령 확률 계산기, 직업훈련 우수 기관 페이지, 산재 지정 의료기관 페이지, 커뮤니티등 프론트엔드의 모든 부분에 참여했습니다.
-------------
## Current Folder Structure
> #### 🗂 *src/components*
> > ⌙공통 컴포넌트들을 포함하고있다.
> #### 🗂 *src/font*
> > ⌙구현에 필요한 폰트들을 포함하고 있다.
> #### 🗂 *src/img*
> > ⌙구현에 필요한 이미지 파일들을 포함하고 있다.
> #### 🗂 *src/pages*
> > ⌙웹 상의 모든 페이지들이 있다.
-------------
## Project Preview
> 시현 영상 <br>
> https://leeyeeun426.netlify.app/project/7
-------------
## Project Environment
> > <img src = "https://user-images.githubusercontent.com/88296511/217285156-6deaeb5d-38cf-4311-a529-cb6534d53c7f.png" width="250" height="150">
>
-------------
## Organizer
> 고용노동부
-------------
## Project Role
> **frontend** : yeeun426
>
-------------
## Source
> open API 속 제공된 이미지 사용
>
-------------
## open API
> 고용노동부 '산재지정 의료 기관'<br/>
> 고용노동부 '재활인증 의료 기관'<br/>
> Kakaomap API
