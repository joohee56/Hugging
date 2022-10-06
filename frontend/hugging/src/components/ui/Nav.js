import styled from "styled-components";
import styles from "./Nav.module.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.nav}>
        <button
          className={styles.home_btn}
          onClick={() => {
            navigate("/main");
          }}
        >
          <i className="xi-home-o xi-2x" style={{ color: "white" }}></i>
        </button>
        <button
          className={styles.nav_btn}
          onClick={() => {
            navigate("/mission/management");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ADA4A5"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>

          <p className={styles.nav_btn_title}>mission</p>
        </button>
        <button
          className={styles.nav_btn2}
          onClick={() => {
            navigate("/recommend_media");
          }}
        >
          <svg
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ADA4A5"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
          <p className={styles.nav_btn_title}>music</p>
        </button>
        {/* <NavBtn><i className="xi-music xi-2x" style={{ color:'#ADA4A5'}}></i><NavBtnTitle>music</NavBtnTitle></NavBtn> */}
        <button
          className={styles.nav_btn3}
          onClick={() => {
            navigate("/recommend_media");
          }}
        >
          <i className="xi-maker xi-2x" style={{ color: "#E19CD9" }}></i>
          <p className={styles.nav_btn_title}>counsel</p>
        </button>
        <button
          className={styles.nav_btn4}
          onClick={() => {
            navigate("/mypage");
          }}
        >
          <i className="xi-profile-o xi-2x" style={{ color: "#ADA4A5" }}></i>
          <p className={styles.nav_btn_title}>my</p>
        </button>
      </div>
    </div>
  );
}

export default Nav;
