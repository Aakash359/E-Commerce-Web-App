import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../Services/authService";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, user, isAutheticated: user?.role === "authenticated" };
};
