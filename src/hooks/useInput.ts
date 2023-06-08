import { useState } from "react";

interface DefaultType {
  [key: string]: any;
}

type ReturnTypes = [
  any,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (values: any) => void
];

const useInputs = (initialValue: DefaultType): ReturnTypes => {
  const [values, setValues] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, onChange, setValues];
};

export default useInputs;
