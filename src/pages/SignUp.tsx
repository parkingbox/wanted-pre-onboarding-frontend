import Button from "../elem/Button";
import Input from "../elem/Input";

function SignUp() {
  return (
    <div>
      <h1>회원가입페이지</h1>
      <Input name="이메일" />
      <Input name="패스워드" />
      <Button.SignInBtn>회원가입</Button.SignInBtn>
    </div>
  );
}

export default SignUp;
