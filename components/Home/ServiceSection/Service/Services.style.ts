import styled from "styled-components";

export const Service = styled.article`
	position: relative;
	padding: 2rem;
	background: linear-gradient(
		353.53deg,
		#2172dd -10.6%,
		rgba(33, 114, 221, 0.6) 55.75%,
		rgba(33, 114, 221, 0) 103.15%
	);
	height: 30rem;
`;

export const ImageContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: -1;
`;
