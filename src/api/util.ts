import { ISignProps } from "../type/hookType/HookType";
import { ITodoProps } from "../type/todoType/TodoType";
import { api } from "./api";

export const signInPost = async ({ email, password }: ISignProps) => {
  try {
    const res = await api.post("/auth/signin", { email, password });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const signUpPost = async ({ email, password }: ISignProps) => {
  try {
    const res = await api.post("/auth/signup", { email, password });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async () => {
  try {
    const data = await api.get("/todos");
    return data;
  } catch {
    alert("에러");
  }
};
export const createTodo = async (todo: string) => {
  try {
    const data = await api.post("/todos", { todo });
    return data;
  } catch {
    alert("에러");
  }
};
export const updateTodo = async ({ id, todo, isCompleted }: ITodoProps) => {
  try {
    const data = await api.post("/todos", {
      todo,
      isCompleted
    });
    return data;
  } catch {
    alert("에러");
  }
};
export const deleteTodo = async (id: number) => {
  try {
    const data = await api.delete(`/todos/${id}`);
    return data;
  } catch {
    alert("에러");
  }
};
