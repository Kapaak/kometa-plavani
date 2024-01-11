import { BLOG_CATEGORIES } from "~/constants";
import { Category, categoryTranslation } from "~/domains";
import { HorizontalStack } from "~/styles";

import * as S from "./BlogFilter.style";

interface BlogFilterProps {
  getIsCategoryActive: (filterCategory: Category) => boolean;
  onChange: (filterValue: Category) => void;
}

export function BlogFilter({ getIsCategoryActive, onChange }: BlogFilterProps) {
  const handleChange = (filterValue: Category) => {
    onChange(filterValue);
  };

  return (
    <HorizontalStack gap="2rem">
      {BLOG_CATEGORIES.map((category) => {
        return (
          <S.FilterCategory
            key={category}
            selected={getIsCategoryActive(category)}
            onClick={() => handleChange(category)}
          >
            {categoryTranslation(category)}
          </S.FilterCategory>
        );
      })}
    </HorizontalStack>
  );
}
