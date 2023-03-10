import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Axios } from "apis/@core";
import { useDispatch, useSelector } from "react-redux";
import { signUpAsync } from "reducer/user";

function Register() {
  const userInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cookies, setCookies, removeCookies] = useCookies();
  const [inputValue, setInputValue] = useState("");
  console.log(userInfo.reducer);

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const doSignUp = (e) => {
    dispatch(signUpAsync(inputValue));

    console.log(userInfo);
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
