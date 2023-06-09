import { useCallback, useEffect, useState } from "react";
import Flex from "../elem/Flex";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../api/util";
import { token } from "../api/api";
import { useNavigate } from "react-router-dom";
import { ITodoProps } from "../type/todoType/TodoType";

function TodoList() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState<string>("");
  const [editTodo, setEditTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodoProps[]>([]);
  const [edit, setEdit] = useState(true);
  console.log(todoList);

  const getTodoList = useCallback(() => {
    getTodos().then((res) => {
      if (res) {
        setTodoList(res.data);
      }
    });
  }, []);

  const onCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todo).then((res) => {
      getTodoList();
      setTodo("");
    });
  };

  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    let newTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodos);
  };

  useEffect(() => {
    if (token) {
      getTodoList();
    } else {
      navigate("/signin");
    }
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };

  const onEditHandler = () => {
    setEdit((prev) => !prev);
  };
  return (
    <div>
      <h1>할일 목록</h1>
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
        <Flex>
          {edit ? (
            <ul>
              {todoList.map((todo) => (
                <li key={todo.id}>
                  <input type="checkbox" />
                  <span>{todo?.todo}</span>
                  <button data-testid="modify-button" onClick={onEditHandler}>
                    수정
                  </button>
                  <button
                    data-testid="delete-button"
                    onClick={() => {
                      onDeleteTodo(todo?.id);
                    }}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {todoList.map((todo) => (
                <li key={todo.id}>
                  <input type="checkbox" />
                  <input data-testid="modify-input" value={todo.todo} />
                  <button data-testid="modify-button">작성</button>
                  <button data-testid="delete-button" onClick={onEditHandler}>
                    취소
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Flex>
      </div>
    </div>
  );
}

export default TodoList;
