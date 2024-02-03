import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

export const getUsersAPI = async () => axios.get("/users");

export const getUserByIdAPI = async (id) => axios.get(`/users/${id}`);

export const createUserAPI = async (user) => axios.post(`/users`, user);

export const updateUserAPI = async (user) =>
  axios.put(`/users/${user.id}`, user);

export const deleteUserByAPI = async (id) => axios.delete(`/users/${id}`);

export const fetchProductList = async () =>
  axios.get(`https://dummyjson.com/products`);
