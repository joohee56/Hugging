import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import CounselListRecommList from "../../components/counsel/CounselListRecommList";

const ListCounselor = (props) => {
  const location = useLocation();
  const state = location.state;
  //   console.log(state);
  return (
    <Fragment>
      <CounselListRecommList recommCounselors={state} />
    </Fragment>
  );
};
export default ListCounselor;
