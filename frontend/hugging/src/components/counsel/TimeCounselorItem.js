import classes from "./TimeCounselorItem.module.css";

const TimeCounselorItem = (props) => {
  // 영어 주제 -> 한글 주제로 변경
  let value = "우울";
  if (props.subject === "Depressed") value = "우울";
  if (props.subject === "Insomnia") value = "불면";
  if (props.subject === "Family") value = "가족";
  if (props.subject === "School") value = "학교";
  if (props.subject === "Company") value = "직장/진로";
  if (props.subject === "Relationship") value = "대인관계";
  if (props.subject === "Love") value = "연애/결혼";
  if (props.subject === "SelfUnderstanding") value = "자기이해";

  return (
    <div className={classes.back}>
      <img
        src="./sampleCounselor1.png"
        alt="counselor"
        className={classes.titleImage}
      ></img>
      <div className={classes.name}>{props.name} 상담사</div>
      <div className={classes.field}>#{value}</div>
      <div className={classes.score}>
        <img src="./Star.png" alt="star" className={classes.starImage}></img>
        <img src="./Star.png" alt="star" className={classes.starImage}></img>
        <img src="./Star.png" alt="star" className={classes.starImage}></img>
        <img src="./Star.png" alt="star" className={classes.starImage}></img>
        <img src="./Star.png" alt="star" className={classes.starImage}></img>
        <span className={classes.number}>({props.average})</span>
      </div>
    </div>
  );
};

export default TimeCounselorItem;
