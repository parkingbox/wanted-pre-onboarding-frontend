import { styled } from "styled-components";
import { IBtnProps } from "../type/elemType/CommonBtnType";
function Button({ children, ...rest }: IBtnProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button<IBtnProps>`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  &:active {
    background-color: ${({ activebc }) => activebc};
  }
`;
