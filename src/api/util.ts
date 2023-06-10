import { ISignProps } from "../type/hookType/HookType";
import { api } from "./api";

export const signInPost = async ({ email, password }: ISignProps) => {
  try {
    const res = await api.post("/auth/signin", { email, password });
    return res;
  } catch (error) {
    alert("이메일과 비밀번호를 다시 확인 해 주세요");
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
