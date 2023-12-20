import styled from "styled-components";

import { Flex } from "~/styles";
import { dimensions } from "~/utils";

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
