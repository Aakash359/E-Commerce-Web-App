import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_LIST } from "../Redux/types";

const Profile = () => {
  const product = useSelector((state) => state.ProductListReducer);
  const dispatch = useDispatch();
  useEffect(() => dispatch({ type: GET_PRODUCT_LIST }), [dispatch]);
  return <div></div>;
};

export default Profile;
