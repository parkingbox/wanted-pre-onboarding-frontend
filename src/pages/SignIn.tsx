import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInPost } from "../api/util";
import { AxiosResponse } from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });
  const isRegex = !signUp?.email?.includes("@") || signUp?.password?.length < 8;

  const onSignInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInPost(signUp)
      .then((res: any) => {
        console.log(res);

        localStorage.setItem("access_token", res["access_Token"]);

        navigate("/todo");
      })
      .catch((err) => alert(err.statusText));
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
      <h1>로그인</h1>
      <form onSubmit={onSignInHandler}>
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
        <button disabled={isRegex}>로그인</button>
      </form>
    </div>
  );
}

export default SignUp;
