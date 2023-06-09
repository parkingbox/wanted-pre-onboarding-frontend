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
      .then(() => {
        alert("성공");
        navigate("/signin");
      })
      .catch((err) => alert(err));
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
          name="email"
          placeholder="이메일을 입력하세요"
          value={signUp.email}
          onChange={onChangeHandler}
          data-testid="email-input"
        />
        <input
          name="password"
          placeholder="패스워드를 입력하세요"
          value={signUp.password}
          onChange={onChangeHandler}
          data-testid="password-input"
        />
        <button disabled={isRegex}>회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
