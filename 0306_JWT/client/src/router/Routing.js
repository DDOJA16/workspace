import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginForm from "pages/loginForm";
import SignUpForm from "pages/signUpForm";
// import { Path } from "react-router-dom";

const Routing = () => {
  // const routes = useRoutes([...Path]);
  // return <>{routes}<>;
  // index.tsx 에 BrowserRouter 감싸주기
  // routes를 배열형태로 쉽게 관리 할 수 있습니다
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
