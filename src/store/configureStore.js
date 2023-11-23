import { configureStore } from "@reduxjs/toolkit";
import user from "../Redux/slice/user";
import users from "../Redux/slice/users";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../Redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user,
    users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
