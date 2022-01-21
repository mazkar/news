import axios from "axios";

import { put, takeLatest, select } from "redux-saga/effects";

//action
import { setAllNews, setNewsDetail } from "./DashboardAction";

function* sagaGetAllNews(action) {
  try {
    const res = yield axios.get("https://newsapi.org/v2/top-headlines", { params: { apikey: `c6ddb308ea094967832400e2217a7f09`, country: "us" } });
    console.log(res, "result get news");
    yield put(setAllNews(res.data.articles));
  } catch (error) {
    console.log(error, "eroor get news");
  }
}

function* sagaGetNewsDetail(action) {
  const title = yield select((state) => state.DashboardReducer.title);
  try {
    const res = yield axios.get("https://newsapi.org/v2/top-headlines", { params: { apikey: `c6ddb308ea094967832400e2217a7f09`, country: "us", q: title } });
    console.log(res, "result get news detail");
    yield put(setNewsDetail(res.data.articles));
  } catch (error) {
    console.log(error, "eroor get news detail");
  }
}
export function* SagaDashboardWorker() {
  yield takeLatest("GET_ALL_NEWS", sagaGetAllNews);
  yield takeLatest("GET_NEWS_DETAIL", sagaGetNewsDetail);
}
