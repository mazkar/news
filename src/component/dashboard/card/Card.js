import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import moment from "moment";
import "./../card/style.css";
//action
import { getAllNews, setTitle } from "./../../../redux/dashboard/DashboardAction";
import { Link } from "react-router-dom";
const Card = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const onGetTitle = (e) => {
    dispatch(setTitle(e.title));
  };
  const allNews = useSelector((state) => state.DashboardReducer.allNews);
  return (
    <React.Fragment>
      <div className="mainContainer">
        <div className="divBox">
          {allNews.length !== 0 ? (
            allNews.map((e, i) => {
              return (
                <Link to={"./Detail"} onClick={() => onGetTitle(e)} className="container1">
                  <div className="cardContainer" key={e.title}>
                    <div className="imageContainer">
                      <img src={`${e.urlToImage}`} className="image" />
                    </div>
                    <div className="containerContent">
                      <h2 className="textTitle">{e.title}</h2>
                      <p className="textAuthor">by {e.author}</p>
                      <p className="textDate"> {moment(e.publishedAt).format("d MMMM YYYY")}</p>
                      <p className="textDesc">{e.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
