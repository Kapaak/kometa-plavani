import styled from "styled-components";

export const HeroSection = styled.div`
	/* background: url("./images/hero-img.JPG");
	background-size: cover;
	background-position: 50% 50%; */
	background-color: rgba(50, 20, 230, 0.4);
`;

export const ImageContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	z-index: -1;
`;

export const Gradient = styled.div`
	position: absolute;
	background-color: var(--col2);
	width: 100%;
	height: 100%;
	opacity: 0.5;
	z-index: 1;
`;
