import React, { Fragment } from "react";
import MyReservationList from "../../components/counsel/MyReservationList";
import CounselSubjectList from "../../components/counsel/CounselSubjectList";
import CounselorRecommList from "../../components/counsel/CounselorRecommList";
import classes from "./ReserveCounsel.module.css";
import FooterNavigation from "../../Layout/FooterNavigation";
import Header from "../../Layout/Header";
const DUMMY_RESERVE = [
  {
    id: "r1",
    time: "22/10/01 11:00~12:00",
    counselorName: "조성규",
  },
  {
    id: "r2",
    time: "22/10/03 11:00~12:00",
    counselorName: "이주희",
  },
  {
    id: "r3",
    time: "22/10/05 11:00~12:00",
    counselorName: "김호진",
  },
];

const DUMMY_COUNSELOR = [
  {
    id: "c1",
    name: "이주희",
    field: "번아웃",
    score: 3.5,
  },
  {
    id: "c2",
    name: "김호진",
    field: "우울",
    score: 3.5,
  },
  {
    id: "c3",
    name: "김성규",
    field: "불안",
    score: 3.5,
  },
];

const ReserveCounsel = () => {
  return (
    <Fragment>
      <Header />
      <MyReservationList reservations={DUMMY_RESERVE} />
      <CounselSubjectList />
      <CounselorRecommList counselors={DUMMY_COUNSELOR} />
      <div> Calendar</div>
      <div> Time </div>
      <div className={classes.btn}>
        <button>예약</button>
      </div>
      {/* <FooterNavigation /> */}
    </Fragment>
  );
};

export default ReserveCounsel;
