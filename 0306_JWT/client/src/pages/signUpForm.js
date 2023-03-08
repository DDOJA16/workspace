const SignUpForm = () => {
  return (
    <form>
      <p>이메일</p>
      <input placeholder="email" name="email" />
      <p>비밀번호</p>
      <input placeholder="password" name="password" autoComplete="off" />
      <p>비밀번호 확인</p>
      <input placeholder="password confirm" name="passwordconfirm" autoComplete="off" />
      <button>회원가입</button>
    </form>
  );
};

export default SignUpForm;
