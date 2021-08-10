import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9 12.75C8.5875 12.75 8.25 12.4125 8.25 12L8.25 9C8.25 8.5875 8.5875 8.25 9 8.25C9.4125 8.25 9.75 8.5875 9.75 9V12C9.75 12.4125 9.4125 12.75 9 12.75ZM9.75 6.75H8.25V5.25L9.75 5.25V6.75Z" fill="#5D5FEF" />
    </Svg>
  );
};

export default Icon;
