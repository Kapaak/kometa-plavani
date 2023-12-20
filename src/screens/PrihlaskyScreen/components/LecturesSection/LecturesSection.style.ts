//libraries
import styled from "styled-components";

//styles
import { Flex as SFlex } from "~/styles";
import { dimensions } from "~/utils";

export const Flex = styled(SFlex)`
  padding: 4rem 0;
  @media (${dimensions.desktop}) {
    gap: 6rem;
    padding: 8rem 0;
  }
`;
