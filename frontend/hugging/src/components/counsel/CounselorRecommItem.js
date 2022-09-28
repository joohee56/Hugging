import classes from "./CounselorRecommItem.module.css";
import Card from "../ui/Card";

const CounselorRecommItem = (props) => {
  return (
    <Card>
      <img
        src="./sampleCounselor1.png"
        alt="counselor"
        className={classes.titleImage}
      ></img>
      <div className={classes.name}>{props.name} 상담사</div>
      <div className={classes.detail}>
        <span className={classes.field}>#{props.field}</span>
        <img src="./Star.png" alt="star" className={classes.starImage}></img>
        <span className={classes.score}>({props.score})</span>
      </div>
    </Card>
  );
};

export default CounselorRecommItem;
