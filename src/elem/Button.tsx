import { css, styled } from "styled-components";
import { IBtnProps } from "../type/elemType/CommonBtnType";
function DefaultBtn({ children, ...rest }: IBtnProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

// 로그인 버튼
function SignInBtn({ ...rest }) {
  return <DefaultBtn {...rest} bc="#fff" color="#000" activebc="#eee" />;
}

//회원가입 버튼
function SignUpBtn({ ...rest }) {
  return <DefaultBtn {...rest} bc="#eee" color="#000" activebc="#fff" />;
}

const Button = { SignInBtn, SignUpBtn };
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

  ${({ size }) => {
    if ((size = "large")) {
      return css`
        height: 50px;
        width: 200px;
      `;
    } else if ((size = "medium")) {
      return css`
        height: 45px;
        width: 130px;
      `;
    } else {
      return css`
        height: 40px;
        width: 100px;
      `;
    }
  }}
`;
