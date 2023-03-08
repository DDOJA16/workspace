import { getLocalToken, getLocalUser } from "utils/auth";

const user = getLocalUser;
const token = getLocalToken;

const initialState = {
  user: user,
  token: token,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
  }
};

export default reducer;
