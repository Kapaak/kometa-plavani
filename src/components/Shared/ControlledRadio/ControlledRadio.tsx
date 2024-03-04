import { useId } from "react";
import { Controller } from "react-hook-form";

import { Flex } from "~/styles";
import { calculatePriceAfterDiscount } from "~/utils";

import * as S from "./ControlledRadio.style";

//-  spis idelane tohle pojmenovat jako LectureRadioGroup
type Option = {
  label: string;
  value: string;
  lectureFrequency?: number;
};

type ControlledRadioProps = {
  name: string;
  discount?: number;
  price?: number;
  options?: Option[];
  onClick?: (option: Option) => void;
};

export const ControlledRadio = ({
  name,
  discount,
  price,
  options,
  onClick,
}: ControlledRadioProps) => {
  const id = useId();

  return (
    <Controller
      name={name}
      render={({ field: { value, ...restField } }) => (
        <S.RadioGroupRoot
          className="RadioGroupRoot"
          defaultValue={options?.[0]?.value}
          aria-label="View density"
          {...restField}
        >
          {options?.map((option, index) => (
            <Flex key={option.value} direction="row" align="center" gap="2rem">
              <S.RadioGroupItem
                className="RadioGroupItem"
                value={option.value}
                id={`${id}-${index}`}
                onClick={() => onClick && onClick(option)}
              >
                <S.RadioGroupIndicator className="RadioGroupIndicator" />
              </S.RadioGroupItem>
              <S.RadioLabel className="Label" htmlFor={`${id}-${index}`}>
                {option.label}{" "}
                {Boolean(discount) ? (
                  <S.DiscountChip>
                    {calculatePriceAfterDiscount(price ?? 0, discount ?? 0)} Kč
                    - sleva {discount} %
                  </S.DiscountChip>
                ) : (
                  <S.NonDiscountChip>{price} Kč</S.NonDiscountChip>
                )}
              </S.RadioLabel>
            </Flex>
          ))}
        </S.RadioGroupRoot>
      )}
      defaultValue={options?.[0]?.value ?? false}
    />
  );
};
