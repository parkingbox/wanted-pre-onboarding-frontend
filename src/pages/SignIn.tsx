import Button from "../elem/Button";
import Input from "../elem/Input";
import useInput from "../hooks/useInput";

function SignIn() {
  const [signInData, onChangeSignInData] = useInput({
    email: "",
    password: "",
  });

  return (
    <div>
      <h1>로그인페이지</h1>
      <Input name="이메일" />
      <Input name="패스워드" />
      <Button.SignInBtn>로그인</Button.SignInBtn>
    </div>
  );
}

export default SignIn;
