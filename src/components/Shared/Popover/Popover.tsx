import { PropsWithChildren } from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import * as S from "./Popover.style";
import { Flex } from "~/styles";

interface PopoverProps extends PropsWithChildren {
  title?: string;
  headline?: string;
  accesibilityLabel?: string;
}

export const Popover = ({
  title,
  headline,
  accesibilityLabel,
  children,
}: PopoverProps) => {
  return (
    <RadixPopover.Root>
      <S.PopoverTrigger asChild>
        <button aria-label={accesibilityLabel}>
          <span>{title}</span>
          <S.CaretIcon />
        </button>
      </S.PopoverTrigger>
      <RadixPopover.Portal>
        <S.PopoverContent sideOffset={5}>
          <Flex gap="1rem">
            <S.Text>{headline}</S.Text>
            {children}
          </Flex>
          <S.PopoverArrow />
        </S.PopoverContent>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};
