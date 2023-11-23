import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logOutApi } from "../Services/authService";
import toast from "react-hot-toast";

export const useLogOut = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logOutApi,
    onSuccess: (data) => {
      queryClient.removeQueries();
      console.log("Sucees", data);
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("Provide email or password are incorrect");
    },
  });
  return { logout, isLoading };
};
