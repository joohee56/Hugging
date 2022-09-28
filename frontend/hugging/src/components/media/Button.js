import React, { useRef, useState } from "react";
import styles from './Button.module.css'


function Button() {
  const [toggle, setToggle] = useState(true);
  const ClickedToggle = () => {
    setToggle((prev) => !prev);
  };
  
  return (
    <div>
      {toggle ?
      <div className={styles.FirstButton}>
        <div className={styles.MoreCircle} onClick={ClickedToggle}>

        </div>
      </div>
       : 
      <div>
        <img src="./halfcircle.png" className={styles.BigCircle} alt='bigcircle'></img>
        <img src='./bordercircle.png' className={styles.CloseButton} onClick={ClickedToggle} alt='close'></img>
        <img src="./playbutton.png" className={styles.PlayButton} alt='play'></img>
        <img src="./Document.png" className={styles.TextButton} alt='text'></img>
        <img src="./Heart2.png" className={styles.HeartButton} alt='heart'></img>
      </div>
      

      }   
    </div>

  )
}
export default Button;
