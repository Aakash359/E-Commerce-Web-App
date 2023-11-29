import { productListAsync } from "./productListSaga";
import { watchUserAsync } from "./user";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([watchUserAsync(), productListAsync()]);
}
