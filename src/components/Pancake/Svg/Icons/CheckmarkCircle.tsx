import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM6.9675 12.2175L4.275 9.525C3.9825 9.2325 3.9825 8.76 4.275 8.4675C4.5675 8.175 5.04 8.175 5.3325 8.4675L7.5 10.6275L12.66 5.4675C12.9525 5.175 13.425 5.175 13.7175 5.4675C14.01 5.76 14.01 6.2325 13.7175 6.525L8.025 12.2175C7.74 12.51 7.26 12.51 6.9675 12.2175Z" fill="#1EA306" />
    </Svg>
  );
};

export default Icon;
