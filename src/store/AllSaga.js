import { all } from "redux-saga/effects";
import { SagaDashboardWorker } from "../redux/dashboard/DashboardSaga";

export function* allSaga() {
  yield all([SagaDashboardWorker()]);
}
