import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signUpPost } from "../api/util";
import { token } from "../api/api";

function SignUp() {
  const navigate = useNavigate();
  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password: "",
  });
  const isRegex =
    !signUpInput?.email?.includes("@") || signUpInput?.password?.length < 8;

  const onSignUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpPost(signUpInput)
      .then((res) => {
        if (res?.status === 200) {
          alert("회원가입 성공");
          navigate("/signin");
        } else if (res?.status === 400) {
          alert("동일한 이메일이 존재합니다.");
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          alert("다시해주세요");
        }
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInput({
      ...signUpInput,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>회원가입페이지</h1>
      <form onSubmit={onSignUpHandler}>
        <div>
          이메일:
          <input
            type="text"
            name="email"
            autoComplete="on"
            placeholder="이메일은 @를 포함하여 입력하세요"
            value={signUpInput.email}
            onChange={onChangeHandler}
            data-testid="email-input"
            required
          />
        </div>
        <div>
          패스워드:
          <input
            type="password"
            name="password"
            autoComplete="on"
            placeholder="패스워드는 8자리 이상 입력하세요"
            value={signUpInput.password}
            onChange={onChangeHandler}
            data-testid="password-input"
            required
          />
        </div>
        <button data-testid="signup-button" disabled={isRegex}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;
