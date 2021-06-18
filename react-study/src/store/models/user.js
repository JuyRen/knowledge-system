import { all, put, takeLatest, call } from "redux-saga/effects";
import delay from "../../utils/delay";

export const USER_ACTION_TYPE = {
  SET_USER_NAME: Symbol(),
  SET_USER_NAME_ASYNC: Symbol(),
  SET_USER_PERMISSION: Symbol(),
};

const initialState = {
  userName: "",
  userPermission: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_ACTION_TYPE.SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case USER_ACTION_TYPE.SET_USER_PERMISSION:
      return {
        ...state,
        userPermission: action.payload,
      };
    default:
      return state;
  }
}

// effect
function* incrementAsync() {
  const date = yield call(delay, 1000, Date.now());
  yield put({ type: USER_ACTION_TYPE.SET_USER_NAME, payload: date });
}

// 监听
function* watchIncrementAsync() {
  yield takeLatest(USER_ACTION_TYPE.SET_USER_NAME_ASYNC, incrementAsync);
}

export function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
