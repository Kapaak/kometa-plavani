import styled from "styled-components";

import { Chip } from "~/styles";

export const DiscountChip = styled(Chip)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--col1);
  transform: translate(20%, -50%);
`;
