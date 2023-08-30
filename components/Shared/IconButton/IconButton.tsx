import { PropsWithChildren } from "react";
import { Icon as TIcon } from "@phosphor-icons/react";
import * as S from "./IconButton.style";
import { ButtonProps } from "../Button";
import { LoadingIcon } from "../Button/Button.style";

interface IconButtonProps extends ButtonProps {
  iconBefore?: TIcon;
  iconAfter?: TIcon;
}

export const IconButton = ({
  children,
  iconBefore,
  iconAfter,
  loading,
  disabled,
  ...rest
}: PropsWithChildren<IconButtonProps>) => {
  const IconBefore = iconBefore as TIcon;
  const IconAfter = iconAfter as TIcon;
  return (
    <S.IconButton {...rest} disabled={disabled} isLoading={loading}>
      {!loading && !disabled && iconBefore && (
        <IconBefore size={38} weight="regular" />
      )}
      {!loading && children}
      {!loading && !disabled && iconAfter && (
        <IconAfter size={38} weight="regular" />
      )}

      {loading && (
        <span>
          odesílám <LoadingIcon size={38} weight="fill" />
        </span>
      )}
    </S.IconButton>
  );
};
