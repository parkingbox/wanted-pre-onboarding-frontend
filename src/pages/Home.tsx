import Button from "../elem/Button";
import Flex from "../elem/Flex";
import Input from "../elem/Input";

function Home() {
  function testClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <Flex gap={10}>
      <Button.SignInBtn size="medium">
        ㅂ2
      </Button.SignInBtn>
      <Button.SignUpBtn>ㅎㅇ</Button.SignUpBtn>
      <form >
        <Input placeholder />
        <Button.SignInBtn size="small">제출</Button.SignInBtn>
      </form>
    </Flex>
  );
}

export default Home;
