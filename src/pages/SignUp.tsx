import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpPost } from "../api/util";

function SignUp() {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });
  const isRegex = !signUp?.email?.includes("@") || signUp?.password?.length < 8;

  const onSignUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpPost(signUp)
      .then((res) => {
        if (res?.status !== 200) {
          alert("회원가입 성공");
          navigate("/signin");
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>회원가입페이지</h1>
      <form onSubmit={onSignUpHandler}>
        <input
          type="text"
          name="email"
          autoComplete="on"
          placeholder="이메일은 @를 포함하여 입력하세요"
          value={signUp.email}
          onChange={onChangeHandler}
          data-testid="email-input"
          required
        />
        <input
          type="password"
          name="password"
          autoComplete="on"
          placeholder="패스워드는 8자리 이상 입력하세요"
          value={signUp.password}
          onChange={onChangeHandler}
          data-testid="password-input"
          required
        />
        <button disabled={isRegex}>회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
