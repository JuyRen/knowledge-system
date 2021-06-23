import createSagaMiddleware from "@redux-saga/core";
import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "./models/user";
import { rootSaga } from "./models/user";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    userReducer: user,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
