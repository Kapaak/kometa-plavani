import { dimensions } from "@/components/utils/breakpoints";
import styled from "styled-components";

export const NavLink = styled.li`
  list-style-type: none;
  text-decoration: none;
  color: var(--colw);
  font-family: var(--font1);
  font-size: var(--fnavlink);
  line-height: 2.4;
  cursor: pointer;
  padding-left: 4rem;

  a {
    &:hover {
      color: var(--col1);
    }
  }

  @media (${dimensions.desktop}) {
    padding-left: 0;

    a {
      color: var(--colb);
    }
  }
`;
