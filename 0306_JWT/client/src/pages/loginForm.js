import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Axios } from "apis/@core";

const LoginForm = () => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const doLogin = async () => {
    try {
      const { data } = await Axios.post("/login", inputValue);
      console.log(data);
      setCookies("accessToken", data["accessToken"], { path: "/" });
      // 회원가입 성공시 메인페이지 이동
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <input type="email" placeholder="이메일을 입력하세요" defaultValue="email" />
        <input type="password" placeholder="비밀번호를 입력하세요" defaultValue="password" />
        <button onClick={doLogin}>로그인</button>
      </form>

      <Link to="/signup">
        <p>회원가입</p>
      </Link>
    </div>
  );
};

export default LoginForm;
