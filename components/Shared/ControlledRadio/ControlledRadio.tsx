import { Flex } from "@/styles";
import * as RadioGroup from "@radix-ui/react-radio-group";
import React, { useId } from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

//idelane by bylo sem davat nejakej generic type na ten label value lessons
type ControlledRadioProps = {
  name: string;
  options: {
    label: string;
    value: string;
    lessons?: number;
    level?: "lower" | "higher";
  }[];
  onClick?: (option: {
    label: string;
    value: string;
    lessons?: number;
    level?: "lower" | "higher";
  }) => void;
};

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

export const ControlledRadio = ({
  name,
  options,
  onClick,
}: ControlledRadioProps) => {
  const id = useId();
  return (
    <Controller
      name={name}
      render={({ field: { value, ...restField } }) => (
        <RadioGroupRoot
          className="RadioGroupRoot"
          defaultValue={options[0].value}
          aria-label="View density"
          {...restField}
        >
          {options?.map((option, index) => (
            <Flex key={option.value} direction="row" align="center" gap="2rem">
              <RadioGroupItem
                className="RadioGroupItem"
                value={option.value}
                id={`${id}-${index}`}
                onClick={() => onClick && onClick(option)}
              >
                <RadioGroupIndicator className="RadioGroupIndicator" />
              </RadioGroupItem>
              <label className="Label" htmlFor={`${id}-${index}`}>
                {option.label}
              </label>
            </Flex>
          ))}
        </RadioGroupRoot>
      )}
      defaultValue={options[0].value}
    />
  );
};
