import React from "react";
import styles from "../../components/media/TopicMedia.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "../ui/Nav";
import NavBar from "../ui/NavBar";
function EmotionCategory(props) {
  const navigate = useNavigate();
  let state = useSelector((state) => state.emotion);
  return (
    <>
      <Nav></Nav>
      <NavBar></NavBar>
      <div>
        <div className={styles.List}>
          <h6 className={styles.category_title}>감정별 음악 추천🎵</h6>
          {state.map((a, i) => (
            <button
              className={styles.Topic}
              onClick={() => navigate(`/playing_music/${state[i].id}`)}
            >
              <div className={styles.ImgBox}>
                <img
                  src={state[i].thumbnail_url}
                  className={styles.image}
                ></img>
                <img
                  src="../whiteplaybutton.png"
                  alt="play"
                  className={styles.Icon}
                ></img>
                <p className={styles.Text}>{state[i].name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default EmotionCategory;
