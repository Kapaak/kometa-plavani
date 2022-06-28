import styled from "styled-components";

export const ImageContainer = styled.div``;

export const Navigation = styled.nav<{ isActive: boolean }>`
	position: absolute;
	width: 100%;
	height: ${({ isActive }) => (isActive ? "100%" : "auto")};
	padding: 2rem;
	background-color: ${({ isActive }) => (isActive ? "var(--col2)" : "none")};
	z-index: 9;

	${ImageContainer} {
		display: ${({ isActive }) => (isActive ? "none" : "block")};
	}
`;
