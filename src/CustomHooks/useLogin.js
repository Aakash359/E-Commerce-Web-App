import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../Services/authService";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      navigate("/home");
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("Provide email or password are incorrect");
    },
  });
  return { login, isLoading };
}
