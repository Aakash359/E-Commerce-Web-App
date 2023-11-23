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

export function* getUsersSaga() {
  const users = yield getUsersAPI();
  yield put(getUserSlice(users.data));
}

export function* getUserByIdSaga(id) {
  yield getUserByIdAPI(id);
  yield put(setUserSlice());
}

export function* createUserSaga(user) {
  yield createUserAPI(user);
  yield put(addUserSlice(user));
}

export function* updateUserSaga(user) {
  yield updateUserAPI(user);
  yield put(editUserSlice(user));
}

export function* deleteUserSaga(id) {
  const user = yield deleteUserByAPI(id);
  yield put(deleteUserSlice(user));
}

export function* combineAllSaga() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(GET_USERS_BY_ID, getUserByIdSaga);
  yield takeEvery(CREATE_USER, createUserSaga);
  yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga);
  yield takeEvery(DELETE_USER_BY_ID, deleteUserSaga);
}
