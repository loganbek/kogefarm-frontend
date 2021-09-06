import React, { useState } from "react";
import styled from "styled-components";

import ButtonMenu from "../../ButtonMenu/ButtonMenu"
import ButtonMenuItem from "../../ButtonMenu/ButtonMenuItem"
import IconButton from "../../Button/IconButton";
import { PanelProps, PushedProps } from "../types";
import { SvgProps, CogIcon } from "../../Svg";
import * as IconModule from "../icons";

interface Props extends PanelProps, PushedProps {}

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

  button {
    font-size: 10px;
  }
`

const Copyright = styled.small`
  font-size: 10px;
  width: 100%;
  margin-top: 19px;
  color: ${({ theme }) => theme.colors.rowHeaderText};
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
}) => {
  const [activeIndex, setActiveIndex] = useState(isDark ? 0 : 1)

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
    setActiveIndex(index)
    toggleTheme(!isDark)
  }

  return (
    <Container>
      <SettingsEntry>
        <Wrapper>
          <StyledButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle" onItemClick={ken}>
            <ButtonMenuItem>
              <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
              Dark
            </ButtonMenuItem>
            <ButtonMenuItem>
              <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
              Light
            </ButtonMenuItem>
          </StyledButtonMenu>
        </Wrapper>
        <Links>
          <a href="privacy">Privacy Policy</a>
          <a href="terms">Terms of Use</a>
        </Links>
        <Copyright>© kogecoin. All rights reserved</Copyright>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
