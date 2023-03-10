import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "reducer/user";

const useUser = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const login = useCallback(() => {
    dispatch(loginAction().payload);
    console.log(loginAction());
  }, []);

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return { isLoggedIn, login, logout };
};

export default useUser;
