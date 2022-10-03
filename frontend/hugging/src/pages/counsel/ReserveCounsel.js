import React, { useState, useEffect, useCallback, Fragment } from "react";
import MyReservationList from "../../components/counsel/MyReservationList";
import CounselSubjectList from "../../components/counsel/CounselSubjectList";
import CounselorRecommList from "../../components/counsel/CounselorRecommList";
import classes from "./ReserveCounsel.module.css";
import Header from "../../Layout/Header";
import CounselCalendar from "../../components/counsel/CounselCalendar";
import CounselTime from "../../components/counsel/CounselTime";
import { useSelector } from "react-redux";
import ErrorModal from "../../components/ui/ErrorModal";
import ConfirmModal from "../../components/ui/ConfirmModal";

const DUMMY_RESERVE = [
  {
    id: "r1",
    counselId: "1",
    memberNickname: "주희",
    reservationDate: "22/10/01",
    reservationTime: "18:00",
    subject: "Depressed",
    counselorName: "조성규",
  },
  {
    id: "r2",
    counselId: "2",
    memberNickname: "주희",
    reservationDate: "22/10/03",
    reservationTime: "11:00",
    subject: "Depressed",
    counselorName: "이주희",
  },
  {
    id: "r3",
    counselId: "3",
    memberNickname: "주희",
    reservationDate: "22/10/05",
    reservationTime: "11:00",
    subject: "Depressed",
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
    field: "가족관계",
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
  // 예약 체크
  // 상담사, 날짜, 시간
  const [reservations, setReservation] = useState(DUMMY_RESERVE);
  const [error, setError] = useState();
  const [confirm, setConfirm] = useState();

  const counselor = useSelector((state) => state.counsel.counselor);
  const date = useSelector((state) => state.counsel.date);
  const time = useSelector((state) => state.counsel.time);
  console.log({ counselor });

  const reservationClickHandler = () => {
    if (counselor === undefined) {
      setError({
        title: "상담 예약 불가",
        message: "상담사를 선택해 주세요.",
      });

      return;
    }

    if (date === undefined) {
      setError({
        title: "상담 예약 불가",
        message: "상담 예약 날짜를 선택해 주세요.",
      });

      return;
    }

    if (time === undefined) {
      setError({
        title: "상담 예약 불가",
        message: "상담 예약 시간을 선택해 주세요.",
      });

      return;
    }

    setConfirm(true);
  };

  const errorHandler = () => {
    setError(null);
  };
  const confirmHandler = () => {
    setConfirm(null);
  };

  const fetchMyreservationHandler = useCallback(async () => {
    try {
      const response = await fetch("https://j7b204.p.ssafy.io/api/counsels/1"); // 프로미스 객체 반환
      if (!response.ok) {
        throw new Error("Something went wront!");
      }
      const data = await response.json(); // 프로미스 객체 반환
      console.log(data.data);
      setReservation(data.data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const counselCancelHandler = () => {
    console.log("상담 취소");

    // 1. db 에서 삭제
    // MyReservationItem.js 에서 삭제

    // 2. reservation 다시 setting
    fetchMyreservationHandler();
  };

  useEffect(() => {
    fetchMyreservationHandler(); // 처음 랜더링 됐을 때 호출되도록
  }, [fetchMyreservationHandler]); // 의존성을 추가하지 않으면 무한루프에 빠질 수 있음

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      {confirm && <ConfirmModal onConfirm={confirmHandler} />}
      <Header />
      <MyReservationList
        reservations={reservations}
        onCancle={counselCancelHandler}
      />
      <CounselSubjectList title="상담 주제" />
      <CounselorRecommList counselors={DUMMY_COUNSELOR} />
      <CounselCalendar />
      <CounselTime />
      <div className={classes.btn} onClick={reservationClickHandler}>
        <button>예약</button>
      </div>
      {/* <FooterNavigation /> */}
    </Fragment>
  );
};

export default ReserveCounsel;
