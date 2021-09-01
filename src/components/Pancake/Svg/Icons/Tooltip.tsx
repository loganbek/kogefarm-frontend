import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = props => (
    <Svg 
      {...props}
      width="16" 
      height="16" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8c0-4.416 3.584-8 8-8s8 3.584 8 8-3.584 8-8 8-8-3.584-8-8zm8.8-2.4H7.2V4h1.6v1.6zM8 12c-.44 0-.8-.36-.8-.8V8c0-.44.36-.8.8-.8.44 0 .8.36.8.8v3.2c0 .44-.36.8-.8.8z"
        fill="#1EA306"
      />
  </Svg>
);

export default Icon;
