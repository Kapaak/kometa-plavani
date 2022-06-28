import styled from "styled-components";

export const NavLink = styled.li`
	list-style-type: none;
	text-decoration: none;
	color: var(--colw);
	font-family: var(--font1);
	font-size: 2rem;
	line-height: 2.4;
`;

export const NavLinks = styled.ul<{ isActive: boolean }>`
	display: ${({ isActive }) => (isActive ? "flex" : "none")};
	flex-direction: column;
	align-self: ${({ isActive }) => (isActive ? "center" : "baseline")};

	${NavLink} {
		padding-left: ${({ isActive }) => (isActive ? "4rem" : "0")};
	}
`;
