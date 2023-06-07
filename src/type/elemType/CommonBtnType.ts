import { ComponentPropsWithoutRef } from "react";

export interface IBtnProps extends ComponentPropsWithoutRef<"button"> {
  bc?: string;
  color?: string;
  activebc?: string;
  size?: string;
}
