import { Cookies } from "react-cookie";

const cookies = new Cookies();

const now = new Date();
const after1h = new Date();
after1h.setMinutes(now.getMinutes() + 60);
setCookie("token", refreshToken, {
  path: "/",
  expires: after1h,
  // secure: true,
  // httpOnly: true,
});

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, option);
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};
