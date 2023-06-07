import { styled } from "styled-components";
import { PropsWithChildren } from "react";
import { IFlexProps } from "../type/elemType/FlexType";

function Flex({ children, ...rest }: Partial<IFlexProps> & PropsWithChildren) {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
}

export default Flex;

const StyledFlex = styled.div<Partial<IFlexProps>>`
  display: flex;
  flex-direction: ${({ row = "row" }) => (row ? "row" : "column")};
  justify-content: ${({ jc }) => `${jc}`};
  align-items: ${({ ai }) => `${ai}`};
  gap: ${({ gap }) => `${gap}px`};
`;
