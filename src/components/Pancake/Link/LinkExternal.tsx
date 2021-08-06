import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      <OpenNewIcon color={props.color ? props.color : "primary"} mr="10px" />
      {children}
    </Link>
  );
};

export default LinkExternal;
