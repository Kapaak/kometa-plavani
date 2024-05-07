import { ReactNode, useId } from "react";
import { Controller } from "react-hook-form";

import { Check } from "@phosphor-icons/react";
import * as Checkbox from "@radix-ui/react-checkbox";
import styled from "styled-components";

import { Flex } from "~/styles";

type ControlledCheckboxProps = JSX.IntrinsicElements["input"] & {
  name: string;
  label: string | ReactNode;
  disabled?: boolean;
};

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  margin-bottom: 0.1rem;
`;
const CheckboxRoot = styled(Checkbox.Root)`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ disabled }) =>
    disabled ? "1px solid var(--colg)" : "1px solid var(--colb)"};
  background-color: ${({ disabled }) => (disabled ? "var(--collg)" : "white")};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
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
        <Flex direction="row" align="center" gap="1rem">
          <CheckboxRoot
            id={id}
            {...restField}
            onCheckedChange={onChange}
            disabled={disabled}
            checked={value}
          >
            <CheckboxIndicator>
              <Check weight="bold" />
            </CheckboxIndicator>
          </CheckboxRoot>
          <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
        </Flex>
      )}
    />
  );
};
