import { instance } from "./api";

interface ICreateTodo {
  todo: string;
}
interface IUpdateTodo {
  todo: string;
  isCompleted: boolean;
}
interface ISignProps {
  email: string;
  password: string | number;
}

export const signUp = async ({ email, password }: ISignProps) => {
  return await instance({
    method: "post",
    url: "/auth/signup",
    data: {
      email,
      password,
    },
  });
};
export const signIn = async ({ email, password }: ISignProps) => {
  return await instance({
    method: "post",
    url: "/auth/signin",
    data: {
      email,
      password,
    },
  });
};

export const getTodos = async () => {
  return await instance({
    method: "get",
    url: "/todos",
  });
};
export const createTodo = async ({ todo }: ICreateTodo) => {
  return await instance({
    method: "post",
    url: "/todos",
    data: {
      todo,
    },
  });
};
export const updateTodo = async ({ todo, isCompleted }: IUpdateTodo) => {
  return await instance({
    method: "put",
    url: "/todos/:id",
    data: {
      todo,
      isCompleted,
    },
  });
};
export const deleteTodo = async () => {
  return await instance({
    method: "delete",
    url: "/todos/:id",
  });
};
