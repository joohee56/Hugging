import classes from "./MyReservationItem.module.css";

const MyReservationItem = (props) => {
  console.log(props.counselId);
  console.log(props.counselorName);
  console.log(props.memberNickname);
  console.log(props.reservationDate);
  console.log(props.reservationTime);
  console.log(props.subject);
  console.log(props.counselorName);

  return (
    <>
      <div className={classes.item}>
        <div className={classes.title}>나의 예약 정보</div>
        <div className={classes.time}>
          {props.reservationDate} {props.reservationTime}
        </div>
        <div className={classes.counselorName}>
          {props.counselorName} 상담사
        </div>
        <div className={classes.Button}>
          <button className={classes.btnCancel}>예약 취소</button>
          <button className={classes.btnEnter}>입장</button>
        </div>
      </div>
    </>
  );
};

export default MyReservationItem;
