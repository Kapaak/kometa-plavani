import { Flex } from "@/styles";
import * as S from "./RadioGroup.style";
import { FunctionComponent } from "react";

export type RadioOption = {
  id: string;
  value: string;
  label: string;
};

interface RadioGroupProps<T> {
  radioOptions: RadioOption[];
  onChange: (val: T) => void;
  selectedValue: string;
}

export const RadioGroup = <T,>({
  radioOptions,
  onChange,
  selectedValue,
}: RadioGroupProps<T>) => {
  return (
    <S.RadioGroupRoot<FunctionComponent<any>>
      defaultValue={selectedValue || radioOptions[0]?.value}
      aria-label="Radio group"
      onValueChange={onChange}
    >
      {radioOptions?.map((radioOption, i) => (
        <Flex align="center" direction="row" key={i}>
          <S.RadioGroupItem value={radioOption?.value} id={radioOption?.id}>
            <S.RadioGroupIndicator />
          </S.RadioGroupItem>
          <S.Label htmlFor={radioOption?.id}>{radioOption?.label}</S.Label>
        </Flex>
      ))}
    </S.RadioGroupRoot>
  );
};
