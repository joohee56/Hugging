import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./ConfirmModal.module.css";
import { useSelector } from "react-redux";
import Card from "../ui/Card";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Card>
        <div>
          <span className={classes.grayBar} />
        </div>
        <Card>
          <div className={classes.column}>
            <div>
              <img src="./sampleCounselorSquare.png" alt="counselor" />
              <div>{props.counselor} 상담사</div>
            </div>
            <div>
              <div className={classes.title}>일시</div>
              <div>{props.date}</div>
              <div>{props.time}</div>
              <div>
                <span className={classes.title}>상담사</span>
                <span>{props.counselor}</span>
              </div>
              <div>
                <span className={classes.title}>주제</span>
                <span>{props.subject}</span>
              </div>
            </div>
          </div>
        </Card>
        <div>예약 완료하시겠습니까?</div>
        <div>
          <button className={classes.cancel}>취소</button>
          <button className={classes.reservation}>예약</button>
        </div>
      </Card>
    </div>
  );
};

const ConfirmModal = (props) => {
  const counselor = useSelector((state) => state.counsel.counselor);
  const date = useSelector((state) => state.counsel.date);
  const time = useSelector((state) => state.counsel.time);
  const subject = useSelector((state) => state.counsel.subject);

  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          counselor={counselor}
          date={date}
          time={time}
          subject={subject}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ConfirmModal;
