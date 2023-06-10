import { useState } from "react";
import { createTodo } from "../../api/util";

function AddTodo({ getTodoList }: { getTodoList: () => void }) {
  const [todo, setTodo] = useState<string>("");

  const onCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todo).then((res) => {
      getTodoList();
      setTodo("");
    });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };
  return (
    <div>
      <form onSubmit={onCreateTodo}>
        <input
          name="todo"
          type="todo"
          value={todo}
          autoComplete="on"
          required
          onChange={handleChangeInput}
          data-testid="new-todo-input"
          placeholder="내용을 입력하세요"
        />
        <button data-testid="new-todo-add-button">추가하기</button>
      </form>
    </div>
  );
}

export default AddTodo;
