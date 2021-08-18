import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="19" height="18" fill="none" {...props}>
      <path d="M5.5 11l8-8m-8 8h5.053M5.5 11V5.947M3.5 15h13" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
