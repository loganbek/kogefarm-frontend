import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 9c0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5 0 4.14-3.36 7.5-7.5 7.5-4.14 0-7.5-3.36-7.5-7.5zm11.196 3.694a1.039 1.039 0 01-1.472 0l-2.223-2.226-2.213 2.216a1.042 1.042 0 01-1.472-1.474l2.213-2.215-2.224-2.216a1.042 1.042 0 011.472-1.473L9.001 7.52l2.213-2.215a1.042 1.042 0 011.472 1.474l-2.213 2.215 2.212 2.215c.418.408.418 1.077.011 1.484z" fill="#F33"/>
    </Svg>
    
  );
};

export default Icon;
