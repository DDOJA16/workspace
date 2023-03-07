import axios from "axios";

const LoginForm = () => {
  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/user");
    console.log(response);
  };
  getUsers();
  return (
    <div>
      <div>
        <input type="email" placeholder="이메일을 입력하세요" value="email" />
        <input type="password" placeholder="비밀번호를 입력하세요" value="password" />
        <button>로그인</button>
      </div>
      <button>테스트</button>
    </div>
  );
};

export default LoginForm;
