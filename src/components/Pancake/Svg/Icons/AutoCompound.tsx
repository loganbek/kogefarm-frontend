import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" fill="none" {...props}>
      <circle cx="12" cy="12" r="12" fill="#F4F4F4"/>
      <path d="M12 7.5v2.25l3-3-3-3V6c-3.315 0-6 2.685-6 6 0 1.178.345 2.273.93 3.195L8.025 14.1A4.403 4.403 0 017.5 12c0-2.482 2.018-4.5 4.5-4.5zm5.07 1.305L15.975 9.9c.33.63.525 1.342.525 2.1 0 2.482-2.018 4.5-4.5 4.5v-2.25l-3 3 3 3V18c3.315 0 6-2.685 6-6a5.948 5.948 0 00-.93-3.195z" fill="#1EA306"/>
    </Svg>
    
  );
};

export default Icon;
