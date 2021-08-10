import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" fill="none" {...props}>
      <path d="M2.252 15.752H16.15a.752.752 0 00.652-1.125l-6.952-12a.747.747 0 00-1.298 0l-6.952 12a.752.752 0 00.652 1.125zm7.703-2.25h-1.5v-1.5h1.5v1.5zm-.75-3a.752.752 0 01-.75-.75v-1.5c0-.413.337-.75.75-.75.412 0 .75.337.75.75v1.5c0 .412-.338.75-.75.75z" fill="#FFC000"/>
    </Svg>
  );
};

export default Icon;
