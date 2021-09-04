import React from "react";
import styled, { css, useTheme } from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{
  isPushed: boolean; 
  showMenu: boolean;
  isDark: boolean
}>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "71px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  background-repeat: no-repeat;
  background-position: bottom left;
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100%;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  ${({ isPushed }) => !isPushed && "white-space: nowrap;"};

  ${({ isDark }) => isDark ? css`
    background-image: url('/images/sidebar-bg-black.png');
  ` : css`
    background-image: url('/images/sidebar-bg-white.png');
  `}

  background-image: ${({ isPushed }) => !isPushed && "none"};

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const Panel: React.FC<Props> = (props) => {
  const theme = useTheme();
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu} isDark={theme.isDark}>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
