import styled from "styled-components";

export const MaxWidth = styled.div<{ maxWidth?: string }>`
	height: 100%;
	width: 100%;
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "var(--max-width)")};
	margin: 0 auto;
	padding: var(--vertical-padding) var(--side-padding);
`;
