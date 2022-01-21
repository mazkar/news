import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewsDetail } from "./../../../redux/dashboard/DashboardAction";
import moment from "moment";
import "./../cardDetail/detail.style.css";

const CardDetail = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsDetail());
  }, [dispatch]);

  const news = useSelector((state) => state.DashboardReducer.newsDetail);
  return (
    <React.Fragment>
      <div className="mainContainerDetail">
        {news.map((e, i) => {
          return (
            <div className="divBoxDetail">
              <div className="containerText1">
                <h1>{e.title}</h1>
                <p className="author">Author By : {e.author}</p>
                <p className="textDate"> {moment(e.publishedAt).format("d MMMM YYYY")}</p>
              </div>
              <div className="containerImageDetail">
                <img src={e.urlToImage} className="imageDetail" />
              </div>

              <div className="containerContentDetail">
                <p>{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default CardDetail;
