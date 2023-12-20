import React, { PropsWithChildren, ReactNode } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";
import styled, { keyframes } from "styled-components";
import { Headline } from "~/styles";
//todo -> nahrad ten default modal
interface DialogProps {
  isOpen: boolean;
  title: string;
  actions?: ReactNode;
}

const overlayShow = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const contentShow = keyframes`
  0% { opacity: 0; transform: 'translate(-50%, -48%) scale(.96)'; }
  100% { opacity: 1; transform: 'translate(-50%, -50%) scale(1)'; }
`;

const RadixDialogOverlay = styled(RadixDialog.Overlay)`
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const RadixDialogContent = styled(RadixDialog.Content)`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px hsl(206 22% 7% / 35%),
    0px 10px 20px -15px hsl(206 22% 7% / 20%);
  max-height: 85vh;
  max-width: 450px;
  width: 90vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  outline: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: "none";
  }
`;
const RadixDialogTitle = styled(RadixDialog.Title)``;

const RadixIconButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--col11);
  color: var(--col2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--col4);
  }

  &:focus {
    outline: none;

    box-shadow: 0 0 0 2px var(--col7);
  }
`;

export const Dialog = ({
  isOpen,
  children,
  title,
  actions,
}: PropsWithChildren<DialogProps>) => (
  <RadixDialog.Root open={isOpen}>
    <RadixDialog.Portal>
      <RadixDialogOverlay />
      <RadixDialogContent>
        <RadixDialogTitle>
          <Headline>{title}</Headline>
        </RadixDialogTitle>
        <RadixDialog.Description>{children}</RadixDialog.Description>
        <div>{actions}</div>
        <RadixDialog.Close asChild>
          <RadixIconButton aria-label="Close">
            <X />
          </RadixIconButton>
        </RadixDialog.Close>
      </RadixDialogContent>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
