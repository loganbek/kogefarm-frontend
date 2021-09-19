import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  if (variant === 'outline') {
    return theme.colors.bronze;
  }

  return theme.colors.inactiveButtonItem
};

const getBorderColor = ({ theme, variant }: StyledButtonMenuProps) => {
  switch (variant) {
    case 'primary':
    case 'outline':
    default:
      return theme.colors.toggleActive
  }
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: 4px;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  border: 2px solid ${getBorderColor};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")};
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button,
  & a {
    box-shadow: none;
    border-radius: 2px;
  }

  ${({ disabled, theme, variant }) => {
    if (variant === 'outline') {
      return `
        border: 1px solid #A8A8A8;
        background-color: transparent;
        border-radius: 4px;

        svg {
          margin-right: 10px;
        }

        div {
          &:first-of-type {
            button {
              padding-left: 20px;
              padding-right: 10px;
            }
          }

          &:last-of-type {
            button {
              padding-left: 10px;
              padding-right: 20px;
            }
          }
        }

        button {
          color: red;
          font-size: 12px;
        }
      `
    }

    if (disabled) {
      return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle};
        }
    `;
    }
    return "";
  }}
  ${space}
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButtonMenu
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    >
      {Children.map(children, (child: ReactElement, index) => {
        let onClick = onItemClick ? () => onItemClick(index) : undefined
        if (child.props.onClick) {
          onClick = child.props.onClick
        }

        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick,
          scale,
          variant,
          disabled,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
