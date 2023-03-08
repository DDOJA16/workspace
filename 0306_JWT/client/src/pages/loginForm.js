import axios from "axios";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/user");
    console.log(response);
  };
  getUsers();
  return (
    <div>
      <form>
        <input type="email" placeholder="이메일을 입력하세요" defaultValue="email" />
        <input type="password" placeholder="비밀번호를 입력하세요" defaultValue="password" />
        <button>로그인</button>
      </form>
      <button>테스트</button>
      <Link to="/signup">
        <p>회원가입</p>
      </Link>
    </div>
  );
};

export default LoginForm;
