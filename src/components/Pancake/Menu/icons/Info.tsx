import React from "react";
import Svg from "../../Svg/Svg";
import { SvgProps } from "../../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" fill="none" {...props}>
      <path d="M10.5 1.5H3v15h12V6l-4.5-4.5zm1.5 12H6V12h6v1.5zm0-3H6V9h6v1.5zM9.75 6.75V2.625l4.125 4.125H9.75z" />
    </Svg>
  );
};

export default Icon;
