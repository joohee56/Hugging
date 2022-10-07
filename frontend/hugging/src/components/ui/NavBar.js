import styled from "styled-components";
import styles from "./NavBar.module.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header_title}>
          <h4 className={styles.header_title1}>Hug</h4>
          <h4 className={styles.header_title2}>ging</h4>
        </div>
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
            stroke-width="1.0"
            stroke="#ADA4A5"
            class="w-6 h-6"
            width="30px"
            heigth="20px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
