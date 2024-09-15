import styled from "styled-components";

export const InformationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0rem;
  left: 0;
  width: 100%;
  background-color: var(--col1);
  z-index: 10;
  padding: 1rem var(--side-padding);
`;

export const BiggerText = styled.span`
  font-family: var(--font1);
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

export const SmallerText = styled.span`
  font-size: 1.4rem;
  text-align: end;
`;
