import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInPost } from "../api/util";
import { token } from "../api/api";

function SignUp() {
  const navigate = useNavigate();
  const [signValue, setSignValue] = useState({
    email: "",
    password: "",
  });
  const isRegex =
    !signValue?.email?.includes("@") || signValue?.password?.length < 8;

  const onSignInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInPost(signValue)
      .then((res) => {
        console.log(res?.data.access_token);
        localStorage.setItem("access_token", res?.data.access_token);
        navigate("/todo");
      })
      .catch((err) => alert(err.response.data.message));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignValue({
      ...signValue,
      [name]: value,
    });
  };
  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, []);
  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={onSignInHandler}>
        <input
          name="email"
          placeholder="이메일을 입력하세요"
          value={signValue.email}
          onChange={onChangeHandler}
          data-testid="email-input"
        />
        <input
          name="password"
          placeholder="패스워드를 입력하세요"
          value={signValue.password}
          onChange={onChangeHandler}
          data-testid="password-input"
        />
        <button data-testid="signin-button" disabled={isRegex}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default SignUp;
