import React, { useState } from "react";
import Calendar, { MonthView } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";

// import '.;
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import moment from "moment";

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  // const [mark, setMark] = useState([]);
  // const now = new Date();
  // const month = now.getMonth();

  let counselorprofile = localStorage.getItem("counselorprofile");
  counselorprofile = JSON.parse(counselorprofile);
  let counselList = counselorprofile.counselList;
  const [mark, setMark] = useState(
    counselList.map(function (a, i) {
      return counselList[i].reservationDate;
    })
  );
  const metaverseHandler = (e) => {
    console.log("입장 클릭 ");
    let url =
      "http://j7b204.p.ssafy.io/unity/index.html?from=OneToOne&nickName=" +
      counselorprofile.name;
    url +=
      "&counselId=" +
      counselorprofile.id +
      "&subject=" +
      counselorprofile.subject;
    window.open(url);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-EN"
        formatDay={(locale, date) => moment(date).format("D")}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          let html = [];
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<div className="dot"></div>);
          }
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                {html}
              </div>
            </>
          );
        }}
      />
      <div className="reservation_date">
        {moment(value).format("YYYY-MM-DD")}일 일정
      </div>

      {counselList.map(function (a, i) {
        if (
          moment(value).format("YYYY-MM-DD") === counselList[i].reservationDate
        ) {
          return (
            <>
              <div className="reservation_div">
                <div className="reservation_num">0{i + 1}</div>
                <div className="reservation_circle"></div>
                <div className="reservation_content">
                  {counselList[i].reservationTime}
                </div>
                <div className="reservation_counselid">
                  {counselList[i].memberNickname}
                </div>
                <button className="meta_btn" onClick={metaverseHandler}>
                  <p className="enter_txt">입장하기</p>
                </button>
              </div>
              <div className="reservation_tag">#{counselList[i].subject}</div>
            </>
          );
        } else {
          <div></div>;
        }
      })}
    </div>
  );
}
export default MyCalendar;
