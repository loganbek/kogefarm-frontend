import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = props => {
  return (
		<Svg
			{...props}
			width="18"
			height="18"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
		>
			<path
				d="M5 9l4 4 4-4M5 5l4 4 4-4"
				stroke="#1EA306"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
  );
};

export default Icon;
