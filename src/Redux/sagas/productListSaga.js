import { fetchProductList } from "../../Api/index";
import { put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCT_LIST } from "../types";
import { getProductSlice } from "../slice/product";

export function* getProductListSaga() {
  const product = yield fetchProductList();
  yield put(getProductSlice(product.data.products));
}

export function* productListAsync() {
  yield takeEvery(GET_PRODUCT_LIST, getProductListSaga);
}

export default productListAsync;
