import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

import { Chip } from "~/styles";
import { dimensions } from "~/utils";

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    top: 50%;
    left: 50%;
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--colb);
  }
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  background-color: #fff;
  width: 1.6rem;
  min-width: 1.6rem;
  min-height: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  box-shadow: 0 2px 10px var(--collg);

  border: 1px solid var(--colb);
`;

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (${dimensions.tablet}) {
    gap: 2rem;
  }
`;

export const DiscountChip = styled(Chip)`
  background-color: var(--col1);
  font-size: 1.4rem;
`;

export const NonDiscountChip = styled(Chip)`
  background-color: var(--col3);
  font-size: 1.4rem;
`;
