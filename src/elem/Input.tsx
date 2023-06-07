import React from "react";
import { styled } from "styled-components";
import Flex from "./Flex";

function Input(props: any) {
  if (
    props.type === "email" ||
    props.type === "password" ||
    props.type === "text"
  )
    return (
      <Flex>
        <InputText
          onChange={props._onChange}
          type={props.type}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          id={props.id}
        />
      </Flex>
    );
}

export default Input;

const InputText = styled.input``;
