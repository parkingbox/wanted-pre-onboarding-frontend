import Button from "../elem/Button";
import Flex from "../elem/Flex";

function TodoList() {
  return (
    <div>
      <h1>할일 목록</h1>
      <Flex>
        <Button>추가하기</Button>
      </Flex>
    </div>
  );
}

export default TodoList;
