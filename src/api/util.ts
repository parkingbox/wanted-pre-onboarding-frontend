import { api } from "./api";

interface ICreateTodo {
  todo: string;
}
interface IUpdateTodo {
  todo: string;
  isCompleted: boolean;
}
interface ISignProps {
  email: string;
  password: string;
}

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
  return await api({
    method: "get",
    url: "/todos",
  });
};
export const createTodo = async ({ todo }: ICreateTodo) => {
  return await api({
    method: "post",
    url: "/todos",
    data: {
      todo,
    },
  });
};
export const updateTodo = async ({ todo, isCompleted }: IUpdateTodo) => {
  return await api({
    method: "put",
    url: "/todos/:id",
    data: {
      todo,
      isCompleted,
    },
  });
};
export const deleteTodo = async () => {
  return await api({
    method: "delete",
    url: "/todos/:id",
  });
};
