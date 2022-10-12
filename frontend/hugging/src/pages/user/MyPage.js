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
import { useDispatch, useSelector } from "react-redux";
import { changeImg } from "../../store";
function MyPage() {
  const backgroundArr = [profileimg1, profileimg2, profileimg3];
  // let userprofile = localStorage.getItem("userprofile");
  // userprofile = JSON.parse(userprofile);
  // let profileImage = userprofile.profileImage;
  // console.log(profileImage);
  let userprofile = localStorage.getItem("userprofile");
  userprofile = JSON.parse(userprofile);
  let nickname = userprofile.nickname;
  let memberId = userprofile.id;
  let [modal, setModal] = useState(false);
  let [profileImage, setProfileImage] = useState(userprofile.profileImage);
  let navigate = useNavigate();
  const modalClose = () => {
    setModal(!modal);
  };
  return (
    <>
      <Nav></Nav>
      <NavBar></NavBar>
      <img
        src={backgroundArr[profileImage]}
        className={styles.profile_circ}
      ></img>
      <div className={styles.my_nickname}>
        <p className={styles.my_nickname_txt}>{nickname}님의 프로필</p>
      </div>
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
          class="w-5 h-5"
          width="30"
          height="28"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      <div className={styles.stamp}>
        <p className={styles.mission_stamp}>
          <img
            src={require("../../img/stamp.png")}
            className={styles.stamp_img}
          />
          미션 스탬프
        </p>
        <button
          className={styles.mission_go}
          onClick={() => {
            navigate("/mission/management");
          }}
        >
          미션하러 가기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.0"
            stroke="currentColor"
            class="w-6 h-6"
            width="13px"
            height="13px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <Stamp />
      {modal === true ? (
        <div className={styles.App}>
          <div className={styles.modal_back}>
            <div className={styles.modal}>
              <div className={styles.modal_bar}></div>
              <button
                className={styles.modal_select}
                onClick={() => {
                  setProfileImage(0);
                }}
              ></button>
              <button
                className={styles.modal_select2}
                onClick={() => {
                  setProfileImage(1);
                }}
              ></button>
              <button
                className={styles.modal_select3}
                onClick={() => {
                  setProfileImage(2);
                }}
              ></button>{" "}
              <button
                className={styles.select_btn}
                onClick={
                  (() => {
                    axios
                      .put("https://j7b204.p.ssafy.io/api/members/modify", {
                        memberId,
                        profileImage,
                      })
                      .then((res) => {
                        console.log(res);
                      });
                  },
                  modalClose)
                }
              >
                확인
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
function Modal(props) {
  let dispatch = useDispatch();
  let user = useSelector((state) => {
    return state.user;
  });

  return (
    <div className={styles.App}>
      <div className={styles.modal_back}>
        <div className={styles.modal}>
          <div className={styles.modal_bar}></div>
          <button
            className={styles.modal_select}
            onClick={() => {
              dispatch(changeImg(1));
              console.log(user.profileImage);
            }}
          ></button>
          <button
            className={styles.modal_select2}
            onClick={() => {
              dispatch(changeImg(2));
              console.log(user);
            }}
          ></button>
          <button
            className={styles.modal_select3}
            onClick={() => {
              dispatch(changeImg(3));
              console.log(user);
            }}
          ></button>
        </div>
        <button className={styles.select_btn} onClick={props.modalClose}>
          확인
        </button>
      </div>
    </div>
  );
}
export default MyPage;
