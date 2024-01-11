import styled from "styled-components";

import { Chip } from "~/styles";

export const FilterCategory = styled(Chip).attrs({
  as: "button",
})<{ selected?: boolean }>`
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? "var(--col3)" : "var(--colw)"};
  color: ${({ selected }) => (selected ? "var(--col2)" : "var(--colg)")};
`;
