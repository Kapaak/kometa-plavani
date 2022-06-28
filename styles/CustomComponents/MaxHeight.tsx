import React, { ReactNode } from "react";
import Div100vh from "react-div-100vh";

interface Props {
	children: ReactNode;
}

export const MaxHeight = ({ children }: Props) => {
	return <Div100vh>{children}</Div100vh>;
};
