import { useCallback, useEffect, useState } from "react";
import { getTodos } from "../api/util";
import { useNavigate } from "react-router-dom";
import { ITodoProps } from "../type/todoType/TodoType";
import AddTodo from "../components/todo/AddTodo";
import TodoItem from "../components/todo/TodoItem";
import { token } from "../api/api";

function TodoList() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<ITodoProps[]>([]);

  const getTodoList = useCallback(() => {
    getTodos().then((res) => {
      if (res) {
        setTodoList(res.data);
      }
    });
  }, []);

  useEffect(() => {
    if (token) {
      getTodoList();
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <h1>할일 목록</h1>
      <div>
        <AddTodo getTodoList={getTodoList} />
        {todoList.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} setTodoList={setTodoList} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
