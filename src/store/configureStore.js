import { configureStore } from "@reduxjs/toolkit";
import user from "../Redux/slice/user";
import users from "../Redux/slice/users";
import ProductListReducer from "../Redux/slice/product";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../Redux/sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user,
    users,
    ProductListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export default store;
