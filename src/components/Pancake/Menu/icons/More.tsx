import React from "react";
import Svg from "../../Svg/Svg";
import { SvgProps } from "../../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" fill="none" {...props}>
      <path d="M10.5 9c0-.825-.675-1.5-1.5-1.5S7.5 8.175 7.5 9s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5zM9 2.25A6.75 6.75 0 002.25 9H0l3 3 3-3H3.75A5.246 5.246 0 019 3.75 5.246 5.246 0 0114.25 9a5.246 5.246 0 01-8.295 4.275l-1.065 1.08A6.75 6.75 0 109 2.25z" />
    </Svg>
  );
};

export default Icon;
