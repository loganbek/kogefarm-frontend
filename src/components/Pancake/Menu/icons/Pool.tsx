import React from "react";
import Svg from "../../Svg/Svg";
import { SvgProps } from "../../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" fill="none" {...props}>
      <path d="M13.5 9.135l-1.125 1.23 1.5 1.635h-9.75l1.5-1.635L4.5 9.135l-2.25 2.453V15c0 .825.675 1.5 1.5 1.5h10.5c.825 0 1.5-.675 1.5-1.5v-3.405l-2.25-2.46z" fill="#8A8A8A"/><path d="M7.943 10.815c.585.593 1.537.6 2.13.008l3.735-3.735a1.503 1.503 0 000-2.123l-2.655-2.647a1.503 1.503 0 00-2.123 0L5.318 6.03a1.5 1.5 0 00-.008 2.115l2.633 2.67zm2.152-7.44l2.648 2.648-3.705 3.705L6.39 7.08l3.705-3.705z" />
    </Svg>
  );
};

export default Icon;
