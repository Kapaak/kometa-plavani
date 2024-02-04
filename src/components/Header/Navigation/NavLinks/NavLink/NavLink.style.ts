import styled from "styled-components";

import { dimensions } from "~/utils";

export const Dropdown = styled.div`
  display: none;
  flex-direction: column;
  left: 50%;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;

  @media (${dimensions.desktop}) {
    position: absolute;
    transform: translateX(-50%);
    background-color: var(--colw);
  }
`;

export const NavLink = styled.li.withConfig({
  shouldForwardProp: (prop) => !["light"].includes(prop),
})<{ light?: boolean }>`
  position: relative;
  list-style-type: none;
  text-decoration: none;
  color: var(--colw);
  font-size: var(--fnavlink);
  line-height: 2.4;
  padding-left: 4rem;

  a,
  button {
    cursor: pointer;
    color: var(--colw);
    &:hover {
      color: ${({ light }) => (light ? "var(--colw)" : "var(--col2)")};
    }
  }

  @media (${dimensions.notebook}) {
    padding-left: 0;
    font-size: 1.6rem;

    a,
    button {
      color: ${({ light }) => (light ? "var(--colw)" : "var(--colb)")};
    }
  }

  &:hover {
    ${Dropdown} {
      display: flex;
    }
  }
`;
