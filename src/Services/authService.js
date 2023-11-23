import axios from "axios";
import supabase from "./supabase";
const API_URL = "http://localhost:3000/api/auth/";

// const register = (username, email, password) => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

export const loginApi = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
};

export const logOutApi = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

// const logout = () => {
//   localStorage.removeItem("user");
//   return axios.post(API_URL + "signout").then((response) => {
//     return response.data;
//   });
// };

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  console.log("data", data);
  if (error) throw new Error(error.message);
  return data?.user;
};

// const AuthService = {
//   register,
//   login,
//   logout,
//   getCurrentUser,
// };
