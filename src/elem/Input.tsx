import { styled } from "styled-components";
import Flex from "./Flex";
import { IInputProps } from "../type/elemType/InputType";

function Input({ name, children }: IInputProps) {
  return (
    <Flex>
      <ListTitle>{name} </ListTitle>
      <ListContent>{children}</ListContent>
    </Flex>
  );
}

export default Input;

const ListTitle = styled.label``;
const ListContent = styled.input``;
