import styled, { DefaultTheme } from "styled-components";
import { space, variant } from "styled-system";
import { Colors } from "../theme/types";
import { scaleVariants, styleVariants } from "./theme";
import { TagProps, variants } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }: ThemedProps) => {
  if (outline) {
    // @ts-ignore
    const themeColorKey = styleVariants[variantKey].color as keyof Colors;
    const themeBGColorKey = styleVariants[variantKey].backgroundColor as keyof Colors;

    const color = theme.colors[themeColorKey];
    const background = theme.colors[themeBGColorKey];

    return `
      color: ${color};
      background: ${background};
      border: 2px solid ${color};
    `;
  }

  return "";
};

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  border-radius: 4px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}

  ${getOutlineStyles}
`;

export default null;
