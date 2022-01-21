import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReduxSaga from "redux-saga";
import logger from "redux-logger";

import { allReducer } from "./AllReducer";
import { allSaga } from "./AllSaga";

const persistConfig = {
  key: "web-tett",
  storage: AsyncStorage,
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, allReducer);
const sagaMiddleWare = ReduxSaga();

export const Store = createStore(persistedReducer, {}, applyMiddleware(logger, sagaMiddleWare));

export const Persistor = persistStore(Store);

sagaMiddleWare.run(allSaga);
