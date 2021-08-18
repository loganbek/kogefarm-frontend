import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
		<Svg width="19" height="18" fill="none" {...props}>
			<path d="M13.5 3l-8 8m8-8H8.447M13.5 3v5.053M3.5 15h13" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		</Svg>
  );
};

export default Icon;
