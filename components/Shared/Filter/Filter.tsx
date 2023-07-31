import { FilterOption } from "@/domains";
import { Popover } from "../Popover";
import { RadioGroup } from "../RadioGroup";
import * as S from "./Filter.style";

interface FilterProps<T> {
  title: string;
  onChange: (val: T) => void;
  selectedValue: string;
  filterOptions: FilterOption[];
}

export const Filter = <T,>({
  title,
  filterOptions,
  onChange,
  selectedValue,
}: FilterProps<T>) => {
  return (
    <S.Filter>
      <Popover title={title}>
        <RadioGroup
          selectedValue={selectedValue}
          radioOptions={filterOptions}
          onChange={onChange}
        />
      </Popover>
    </S.Filter>
  );
};
