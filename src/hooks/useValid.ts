import { useState } from "react";
import { ISignProps } from "../type/hookType/HookType";

function useValid(target: ISignProps) {
  const [emailValid, setEmailValid] = useState({
    helperText: "",
    isError: true,
  });
  const [passwordValid, setPasswordValid] = useState({
    helperText: "",
    isError: true,
  });

  const isValidEmail = (email: string) => email.includes("@");
  const isValidPassword = (password: string) => password.length >= 8;

  if (isValidEmail(target.email)) {
    setEmailValid({
      helperText: "사용가능한 이메일입니다.",
      isError: false,
    });
  } else {
    setEmailValid({
      helperText: "이메일 형식을 확인해주세요.",
      isError: true,
    });
  }
  if (isValidPassword(target.password)) {
    setPasswordValid({
      helperText: "사용가능한 비밀번호입니다.",
      isError: false,
    });
  } else {
    setPasswordValid({
      helperText: "비밀번호 8자 이상이어야 합니다.",
      isError: true,
    });
  }

  return [emailValid, passwordValid];
}

export default useValid;
