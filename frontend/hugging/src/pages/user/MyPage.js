import styled from "styled-components";
import styles from "./MyPage.module.css";
import axios from "axios";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import KaKaoLogin from "react-kakao-login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Stamp from "../../components/mission/Stamp";
import profileimg1 from "../../img/profileimg1.png";
import profileimg2 from "../../img/profileimg2.png";
import profileimg3 from "../../img/profileimg3.png";
import { useState } from "react";
import Nav from "../../components/ui/Nav";
import NavBar from "../../components/ui/NavBar";

function MyPage() {
  const backgroundArr = [profileimg1, profileimg2, profileimg3];
  // let userprofile = localStorage.getItem("userprofile");
  // userprofile = JSON.parse(userprofile);
  // let profileImage = userprofile.profileImage;
  // console.log(profileImage);

  let [modal, setModal] = useState(false);

  let navigate = useNavigate();
  const modalClose = () => {
    setModal(!modal);
  };
  return (
    <>
      <Nav></Nav>
      <NavBar>
        <button
          className={styles.KakaoBtn}
          onClick={() => {
            sessionStorage.removeItem("token");
            localStorage.removeItem("userprofile");
            localStorage.removeItem("emotion");
            localStorage.removeItem("code");
            localStorage.removeItem("token");
            sessionStorage.removeItem("isSocialLogin");
            navigate("/login");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            width="50px"
            heigth="30px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </NavBar>
      <img src={backgroundArr[1]} className={styles.profile_circ}></img>
      <button
        className={styles.profile_edit}
        onClick={() => {
          setModal(!modal);
        }}
      >
        <svg
          color="white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          width="30"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      {/* 로그 아웃 기능 (지우지 마시오) */}

      {modal === true ? (
        <div className={styles.App}>
          <div className={styles.modal_back}>
            <div className={styles.modal}>
              <div className={styles.modal_bar}></div>
              <button className={styles.modal_select}></button>
              <button className={styles.modal_select2}></button>
              <button className={styles.modal_select3}></button>
            </div>
            <button className={styles.select_btn} onClick={modalClose}>
              확인
            </button>
          </div>
        </div>
      ) : null}
      <div className={styles.stamp}>
        <p className={styles.mission_stamp}>
          <img
            src={require("../../img/stamp.png")}
            className={styles.stamp_img}
          />
          미션 스탬프
        </p>
        <p className={styles.mission_go}>미션하러 가기</p>
      </div>

      {/* <Stamp /> */}
    </>
  );
}

export default MyPage;
