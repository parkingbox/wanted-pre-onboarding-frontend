import { ChangeEvent, useState } from "react";
import { ITodoProps } from "../../type/todoType/TodoType";
import { api } from "../../api/api";

interface ITodoList {
  todo?: ITodoProps;
  setTodoList: React.Dispatch<React.SetStateAction<ITodoProps[]>>;
}
function TodoItem({ todo, setTodoList }: ITodoList) {
  const [edit, setEdit] = useState(true);
  const [editContent, setEditContent] = useState(todo?.todo);

  const onEditHandler = () => {
    setEdit((pre) => !pre);
    setEditContent(todo?.todo);
  };

  const onCheckHandler = async () => {
    try {
      const data = await api.put(`/todos/${todo?.id}`, {
        todo: todo?.todo,
        isCompleted: !todo?.isCompleted,
      });
      setTodoList((todoList) =>
        todoList.map((item) => (item.id === todo?.id ? data.data : item))
      );
    } catch {
      alert("잠시 후 다시 시도해보세요");
    }
  };

  const onDeleteHandler = async () => {
    try {
      await api.delete(`/todos/${todo?.id}`);
      setTodoList((pre) => pre.filter((e) => e.id !== todo?.id));
    } catch {
      alert("잠시 후 다시 시도해보세요");
    }
  };

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const submitInputHandler = async () => {
    try {
      const data = await api.put(`/todos/${todo?.id}`, {
        todo: editContent,
        isCompleted: todo?.isCompleted,
      });
      setTodoList((todoList) =>
        todoList.map((item) => (item.id === todo?.id ? data.data : item))
      );
      onEditHandler();
    } catch {
      alert("에러");
    }
  };

  return (
    <>
      {edit ? (
        <li>
          <label>
            <input
              type="checkbox"
              checked={todo?.isCompleted}
              onChange={onCheckHandler}
            />
            <span>{todo?.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={onEditHandler}>
            수정
          </button>
          <button data-testid="delete-button" onClick={onDeleteHandler}>
            삭제
          </button>
        </li>
      ) : (
        <li>
          <label>
            <input
              type="checkbox"
              checked={todo?.isCompleted}
              onChange={onCheckHandler}
            />
            <input
              data-testid="modify-input"
              value={editContent}
              onChange={changeInputHandler}
            />
          </label>
          <button data-testid="submit-button" onClick={submitInputHandler}>
            작성
          </button>
          <button data-testid="cancel-button" onClick={onEditHandler}>
            취소
          </button>
        </li>
      )}
    </>
  );
}

export default TodoItem;
