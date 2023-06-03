import React from "react";
import Header from "../components/Header";
import { MainStyled } from "../styles/MainStyled";
import { Link } from 'react-router-dom';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

export default function MainPage() {

  SwiperCore.use([Navigation, Autoplay])	

  return (
    <MainStyled>
        <Header />
        <Swiper
          slidesPerView={1.44}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="main-banner"
        >      
          <SwiperSlide>
            <img src = "images/banner1.png" alt="산업재해"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src = "images/banner1.png" alt="process"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src = "images/banner1.png" alt="process"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src = "images/banner1.png" alt="process"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src = "images/banner1.png" alt="process"/>
          </SwiperSlide>
        </Swiper>

        <div className = "main-services">
          <div>NDGD가 제공하는 서비스</div>
          
          <div className = "main-service-btn">
            <Link to = "/procedure">
              <button className = "main-service-items">
                <img src = "images/process.png" alt="process"/>
                <div>산재보상절차/신청</div>
              </button>
            </Link>
            <Link to = "/calc">
              <button className = "main-service-items">
                <img src = "images/calculator.png" alt="process"/>
                <div>4대 보험금 모의계산</div>
              </button>
            </Link>
            <Link to = "/percent">
              <button className = "main-service-items">
                <img src = "images/percentage.png" alt="process"/>
                <div>보험금 승인 확률</div>
              </button>
            </Link>
            <Link to = "/training">
              <button className = "main-service-items">
                <img src = "images/best.png" alt="process"/>
                <div>직업훈련 우수 기관</div>
              </button>
            </Link>
            <button className = "main-service-items">
              <img src = "images/medical.png" alt="process"/>
              <div>산재 지정 의료 기관</div>
            </button>
            <button className = "main-service-items">
              <img src = "images/job.png" alt="process"/>
              <div>직업 재활 기관 현황</div>
            </button>
          </div>
        </div>
    </MainStyled>
  );
}