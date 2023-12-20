import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Controller, ValidationRule } from "react-hook-form";

import * as S from "./ControlledInput.style";

interface ControlledInputProps {
  name: string;
  placeholder: string;
  required?: boolean | string;
  pattern?: ValidationRule<RegExp>;
  type?: HTMLInputTypeAttribute;
}

export const ControlledInput = ({
  name,
  placeholder,
  required,
  pattern,
  type = "text",
}: ControlledInputProps) => {
  return (
    <Controller
      name={name}
      rules={{ required, pattern }}
      render={({ field }) => (
        <S.FormInput type={type} placeholder={placeholder} {...field} />
      )}
      defaultValue=""
    />
  );
};
