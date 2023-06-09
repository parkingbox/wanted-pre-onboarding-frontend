import { PropsWithChildren } from "react";

export interface IInputProps extends PropsWithChildren {
  name: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
