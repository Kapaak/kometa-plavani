import styled from "styled-components";

export const Hamburger = styled.div`
	position: relative;
	height: 3rem;
	width: 3.8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;

	p {
		background-color: var(--colw);
		width: 100%;
		height: 0.3rem;
		border-radius: 0.2rem;

		&:last-child {
			width: 50%;
		}
	}
`;
