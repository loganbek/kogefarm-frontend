import React from "react";
import Svg from "../../Svg/Svg";
import { SvgProps } from "../../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" fill="none" {...props}>
      <path d="M14.444 9.778a6.223 6.223 0 11-6.222-6.222v6.222h6.223z" />
      <path d="M16 8.222A6.222 6.222 0 009.778 2v6.222H16z" />
    </Svg>
  );
};

export default Icon;
