import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface SortIconProps extends SvgProps {
  asc: boolean
  on: boolean
}

const Icon: React.FC<SortIconProps> = ({ asc, on, ...rest}) => {
  let ascFill = '#8A8A8A'
  let descFill = '#8A8A8A'

  if (on && asc) {
    ascFill = "#171717"
  } else if (on && !asc) {
    descFill = "#171717"
  }

  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...rest}>
      <path
        d="M6.20711 7.5C5.76165 7.5 5.53857 6.96143 5.85355 6.64645L8.64645 3.85355C8.84171 3.65829 9.15829 3.65829 9.35355 3.85355L12.1464 6.64645C12.4614 6.96143 12.2383 7.5 11.7929 7.5H6.20711Z"
        fill={ascFill}
      />
      <path
        d="M6.20711 10.5C5.76165 10.5 5.53857 11.0386 5.85355 11.3536L8.64645 14.1464C8.84171 14.3417 9.15829 14.3417 9.35355 14.1464L12.1464 11.3536C12.4614 11.0386 12.2383 10.5 11.7929 10.5H6.20711Z"
        fill={descFill}
      />
    </Svg>
  );
};

export default Icon;
