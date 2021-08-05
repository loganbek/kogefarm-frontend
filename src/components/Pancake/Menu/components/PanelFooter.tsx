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
`

const SettingsEntry = styled.div`
  display: flex;
  height: 94px;
  padding: 0 8px;
  align-items: flex-start;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
`


const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  // currentLang,
  // langs,
  // setLang,
}) => {
  const [activeIndex, setActiveIndex] = useState(isDark ? 1 : 0)

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
          <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle" onItemClick={ken}>
            <ButtonMenuItem>
              <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
              Dark
            </ButtonMenuItem>
            <ButtonMenuItem>
              <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
              Light
            </ButtonMenuItem>
          </ButtonMenu>
        </Wrapper>
        <Links>
          <a href="example.com">Privacy Policy</a>
          <a href="example.com">Terms of Use</a>
        </Links>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
