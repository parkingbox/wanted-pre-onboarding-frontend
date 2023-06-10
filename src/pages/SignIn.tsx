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
        if (res?.status === 200) {
          localStorage.setItem("access_token", res?.data.access_token);
          alert("로그인성공");
          navigate("/todo");
          window.location.reload();
        }
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
      <h1>로그인페이지</h1>
      <form onSubmit={onSignInHandler}>
        <div>
          이메일:
          <input
            name="email"
            type="text"
            autoComplete="on"
            placeholder="이메일은 @를 포함하여 입력하세요"
            value={signValue.email}
            onChange={onChangeHandler}
            data-testid="email-input"
          />
        </div>
        <div>
          패스워드:
          <input
            name="password"
            type="password"
            autoComplete="on"
            placeholder="패스워드는 8자리 이상 입력하세요"
            value={signValue.password}
            onChange={onChangeHandler}
            data-testid="password-input"
          />
        </div>
        <div>
          <button data-testid="signin-button" disabled={isRegex}>
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
