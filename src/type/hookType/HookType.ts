export type IHookProps = {
  [key: string]: any;
};

export type ReturnProps = [
  any,
  (e: React.ChangeEvent<HTMLInputElement> | (() => void)) => void,
  () => void
];
export interface ISignProps {
  email: string;
  password: string;
}
