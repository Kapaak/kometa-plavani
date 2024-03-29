import React, { useId } from "react";
import { Controller } from "react-hook-form";
import Select, {
  StylesConfig,
  components,
  DropdownIndicatorProps,
} from "react-select";

import { CaretCircleDown } from "@phosphor-icons/react";
import { ValidationRule } from "react-hook-form/dist/types";

import { Option } from "~/domains";

interface ControlledSelectProps {
  name: string;
  placeholder: string;
  options: Option[];
  required?: boolean | string;
  pattern?: ValidationRule<RegExp>;
}

export const ControlledSelect = ({
  name,
  placeholder,
  options,
  required,
  pattern,
}: ControlledSelectProps) => {
  const styles: StylesConfig = {
    control: (baseStyles, state) => ({
      // ...baseStyles,
      display: "flex",
      flexDirection: "row-reverse",
      borderBottom: "1px solid var(--collg)",
      fontFamily: "var(--font2)",
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      fontSize: "1.3rem",
    }),
  };

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretCircleDown size={22} cursor="pointer" />
      </components.DropdownIndicator>
    );
  };

  const id = useId();

  return (
    <Controller
      name={name}
      rules={{ required, pattern }}
      render={({ field: { onChange, value, name, ...restField } }) => (
        <Select
          name={name}
          instanceId={id}
          isSearchable
          placeholder={placeholder}
          options={options}
          value={options.find((c) => c.value === value) ?? ""}
          onChange={(selectedOption: any) => {
            onChange(selectedOption.value);
          }}
          menuPosition="fixed"
          menuPlacement="auto"
          styles={styles}
          components={{
            DropdownIndicator,
            IndicatorSeparator: null,
          }}
          {...restField}
        />
      )}
    />
  );
};
