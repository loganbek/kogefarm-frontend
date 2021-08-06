import React from "react";
import Svg from "../../Svg/Svg";
import { SvgProps } from "../../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="19" height="18" fill="none" {...props}>
      <path d="M8.807 2.736A6.3 6.3 0 003.2 9c0 3.483 2.817 6.3 6.3 6.3a6.306 6.306 0 006.264-5.598c.063-.549-.549-.99-1.07-.666A3.78 3.78 0 018.88 5.85c0-.747.215-1.44.584-2.025.306-.468-.027-1.143-.657-1.089z" />
    </Svg>
  );
};

export default Icon;
