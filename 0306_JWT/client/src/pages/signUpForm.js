import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Axios } from "apis/@core";

function Register() {
  const [cookies, setCookies, removeCookies] = useCookies();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const doSignUp = async () => {
    try {
      const { data } = await Axios.post("/register", inputValue);
      console.log(data);
      // 쿠키추가 (path:"/" -> 전체 웹사이트에서 사용가능)
      setCookies("accessToken", data["accessToken"], { path: "/" });
      // 회원가입 성공시 메인페이지 이동
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input name="email" onChange={inputChangeHandler} />
      <input name="password" type="password" onChange={inputChangeHandler} />
      <button onClick={doSignUp}>회원가입</button>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default Register;
