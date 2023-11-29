import {
  addUserSlice,
  deleteUserSlice,
  editUserSlice,
  getUserSlice,
} from "../slice/users";
import {
  createUserAPI,
  deleteUserByAPI,
  getUserByIdAPI,
  getUsersAPI,
  updateUserAPI,
} from "../../Api/index";
import { setUserSlice } from "../slice/user";
import { put, takeEvery } from "redux-saga/effects";
import {
  GET_USERS,
  GET_USERS_BY_ID,
  CREATE_USER,
  DELETE_USER_BY_ID,
  UPDATE_USER_BY_ID,
} from "../types";

export function* getUsersSaga(action) {
  const users = yield getUsersAPI();
  yield put(getUserSlice(users.data));
}

export function* getUserByIdSaga(action) {
  yield getUserByIdAPI(action.id);
  yield put(setUserSlice(action.id));
}

export function* createUserSaga(action) {
  yield createUserAPI(action.user);
  yield put(addUserSlice(action.user));
}

export function* updateUserSaga(action) {
  yield updateUserAPI(action.user);
  yield put(editUserSlice(action.user));
}

export function* deleteUserSaga(action) {
  const user = yield deleteUserByAPI(action.id);
  yield put(deleteUserSlice(action.id));
}

export function* watchUserAsync() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(GET_USERS_BY_ID, getUserByIdSaga);
  yield takeEvery(CREATE_USER, createUserSaga);
  yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga);
  yield takeEvery(DELETE_USER_BY_ID, deleteUserSaga);
}

export default watchUserAsync;
