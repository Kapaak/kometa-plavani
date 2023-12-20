//libraries
import styled from "styled-components";
//styles
import { dimensions } from "~/utils";
import { Flex } from "~/styles";

export const Navigation = styled(Flex).attrs({
  as: "nav",
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (${dimensions.notebook}) {
    padding: 0 6rem;
  }
`;
