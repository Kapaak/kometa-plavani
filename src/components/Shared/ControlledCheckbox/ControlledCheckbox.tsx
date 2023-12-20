import { useId } from "react";
import { Controller } from "react-hook-form";

import { Check } from "@phosphor-icons/react";
import * as Checkbox from "@radix-ui/react-checkbox";
import styled from "styled-components";

import { Flex } from "~/styles";

type ControlledCheckboxProps = JSX.IntrinsicElements["input"] & {
  name: string;
  label: string;
  disabled?: boolean;
};

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  position: relative;

  &::after {
    content: "";
    top: 50%;
    left: 50%;
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--colb);
    border-radius: 0.2rem;
  }
`;
const CheckboxRoot = styled(Checkbox.Root)`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ disabled }) =>
    disabled ? "1px solid var(--colg)" : "1px solid var(--colb)"};
  background-color: ${({ disabled }) => (disabled ? "var(--collg)" : "white")};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
`;

export const ControlledCheckbox = ({
  name,
  label,
  disabled,
}: ControlledCheckboxProps) => {
  const id = useId();
  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, ...restField } }) => (
        <Flex direction="row" align="center" gap="2rem">
          <CheckboxRoot
            id={id}
            {...restField}
            onCheckedChange={onChange}
            disabled={disabled}
          >
            <CheckboxIndicator />
          </CheckboxRoot>
          <label htmlFor={id}>{label}</label>
        </Flex>
      )}
      defaultValue={false}
    />
  );
};
