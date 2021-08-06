import React from "react";
import Svg from "../../Svg/Svg";
import { SvgProps } from "../../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <path d="M5.25 6.75H1.5V5.25H5.25V6.75ZM5.25 9H1.5V10.5H5.25V9ZM15.4425 14.25L12.57 11.3775C11.97 11.7675 11.265 12 10.5 12C8.43 12 6.75 10.32 6.75 8.25C6.75 6.18 8.43 4.5 10.5 4.5C12.57 4.5 14.25 6.18 14.25 8.25C14.25 9.015 14.0175 9.72 13.6275 10.3125L16.5 13.1925L15.4425 14.25ZM12.75 8.25C12.75 7.0125 11.7375 6 10.5 6C9.2625 6 8.25 7.0125 8.25 8.25C8.25 9.4875 9.2625 10.5 10.5 10.5C11.7375 10.5 12.75 9.4875 12.75 8.25ZM1.5 14.25H9V12.75H1.5V14.25Z" />
    </Svg>
  );
};

export default Icon;
