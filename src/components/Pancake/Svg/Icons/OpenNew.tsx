import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.917 10.972a.5.5 0 01.008-.706l5.73-5.595h-1.11a.5.5 0 010-1h2.282a.499.499 0 01.415.148l.004.004a.5.5 0 01.142.348v2.441a.5.5 0 01-1 0v-1.26L7.623 10.98a.5.5 0 01-.706-.009zM4.892 5.048a.5.5 0 00-.5.5V13a.5.5 0 00.5.5h7.452a.5.5 0 00.5-.5V8.742a.5.5 0 00-1 0V12.5H5.393V6.048h4.024a.5.5 0 100-1H4.892z" />
    </Svg>
  );
};

export default Icon;
