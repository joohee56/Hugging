import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./ConfirmModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return <div>Confirm Modal</div>;
};

const ConfirmModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ConfirmModal;
