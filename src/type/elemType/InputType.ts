import { ChangeEvent } from "react";

export type IValueProps = string | number;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export interface InputProps {
  value?: IValueProps;
  onChange?: (e: InputChangeEvent) => void;
}
