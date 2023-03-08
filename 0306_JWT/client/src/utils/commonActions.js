import axios from "axios";

export const login = (user, token, onLogin) => {
  return (dispatch) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));

    onLogin();
  };
};

export const logout = () => {
  return (dispatch) => {
    axios.post("/logout").then((response) => {
      dispatch({
        type: "SET_USER",
        payload: null,
      });

      dispatch({
        type: "SET_TOKEN",
        payload: null,
      });

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    });
  };
};
