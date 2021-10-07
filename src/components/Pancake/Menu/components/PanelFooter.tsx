import React, { useMemo } from "react";
import styled from "styled-components";

import ButtonMenu from "../../ButtonMenu/ButtonMenu"
import ButtonMenuItem from "../../ButtonMenu/ButtonMenuItem"
import IconButton from "../../Button/IconButton";
import { PanelProps, PushedProps } from "../types";
import { SvgProps, CogIcon } from "../../Svg";
import * as IconModule from "../icons";
import packageJson from '../../../../../package.json';

interface Props extends PanelProps, PushedProps { }

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const SettingsEntry = styled.div`
  display: flex;
  height: 100px;
  padding: 0 8px;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  width: 100%;

  a {
    color: #167505;
    font-size: 10px;
  }
`

const StyledButtonMenu = styled(ButtonMenu)`
  width: 100%;
  cursor: pointer !important;
  button {
    font-size: 10px;
  }
`

const Copyright = styled.small`
  font-size: 10px;
  width: 100%;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.rowHeaderText};
`

const BuildNumber = styled.div`
  color: #167505;
  font-size: 10px;
  width: 100%;
  margin: 5px 0px;
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
}) => {
  const activeIndex = useMemo(() => isDark ? 1 : 0, [isDark])

  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  const ken = index => {
    toggleTheme(index)
  }

  return (
    <Container>
      <SettingsEntry>
        <Wrapper>
          <StyledButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
            <ButtonMenuItem onClick={() => ken(0)}>
              <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
              Light
            </ButtonMenuItem>
            <ButtonMenuItem onClick={() => ken(1)}>
              <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
              Dark
            </ButtonMenuItem>
          </StyledButtonMenu>
        </Wrapper>
        <Links>
          <a href="privacy">Privacy Policy</a>
          <a href="terms">Terms of Use</a>
        </Links>
        <Copyright>© kogecoin. All rights reserved</Copyright>
        <BuildNumber>
          {packageJson.version}
        </BuildNumber>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
