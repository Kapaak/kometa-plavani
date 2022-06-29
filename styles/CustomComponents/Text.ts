import styled from "styled-components";

export const Text = styled.p<{ light?: boolean; center?: boolean }>`
	color: ${({ light }) => (light ? "var(--colw)" : "var(--col2)")};
	font-weight: 300;
	text-align: ${({ center }) => (center ? "center" : "left")};
`;
