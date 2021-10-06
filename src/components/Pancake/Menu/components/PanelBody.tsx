import { Text } from "components/Pancake";
import useNetworkSwitcher from "hooks/useNetworkSwitcher";
import { groupBy, uniqueId } from 'lodash';
import React from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tippy";
import styled, { useTheme } from "styled-components";
import Divider from "views/Farms/components/Divider";
import { SvgProps } from "../../Svg";
import * as IconModule from "../icons";
import { PanelProps, PushedProps } from "../types";
import Accordion from "./Accordion";
import { LinkLabel, LinkStatus, MenuEntry } from "./MenuEntry";
import MenuLink from "./MenuLink";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  showMenu: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<{ showMenu: boolean }>`
  padding-top: 71px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  white-space: nowrap;

  > div:first-child {
    display: none;
  }
`;

const Title = styled.div`
  padding: 0 16px;
  margin-bottom: 13px;
  margin-top: 25px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.menuHeader};
`

const Tip = styled.div`
background: ${({ theme }) => theme.colors.tertiary};
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
width: 100%;
padding: 24px;
margin-top: 15px;
border-radius: 4px;
`

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, showMenu }) => {
  const theme = useTheme()
  const location = useLocation();
  const groupedLinks = groupBy(links, 'group')
  const { getCurrentNetwork } = useNetworkSwitcher()

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  const getHref = (href: string) => {
    if (href === "/" && location.pathname === "/vaults") {
      return "#"
    }
    if (href === location.pathname) {
      return "#"
    }
    return href
  }

  const withToolTip = (key: any, component: React.ReactElement, title: any) => {
    return (
      isPushed ? (
        component
      ) : (
        <Tooltip
          key={key}
          trigger="mouseenter"
          interactive
          useContext
          position="right"
          offset={-500}
          html={(
            <Tip style={{ padding: 12 }}>
              <Text>{title}</Text>
            </Tip>
          )}
        >
          {component}
        </Tooltip>
      )
    )
  }

  const chain = getCurrentNetwork()

  const LeftSideLinks = React.useMemo(() => Object.entries(groupedLinks).map(([label, items]) => (
    <React.Fragment key={uniqueId('frag-')}>
      {
        isPushed ? (
          <Title key={uniqueId('title_')}>{label}</Title>
        ) : (
          <Divider style={{ margin: "5px 0px", backgroundColor: theme.colors.tertiary }} />
        )
      }
      {items.filter(i => !i.disabled?.includes(chain)).map(entry => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;


          return withToolTip(
            entry.label,
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              status={entry.status}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={getHref(item.href)}>
                      <LinkLabel isPushed={isPushed}>{item.label}</LinkLabel>
                      {item.status && (
                        <LinkStatus color="primary">
                          {item.status.text}
                        </LinkStatus>
                      )}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>, entry.label
          );
        }

        return withToolTip(
          entry.label,
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={getHref(entry.href)} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              {entry.status && (
                <LinkStatus color="primary">
                  {entry.status.text}
                </LinkStatus>
              )}
            </MenuLink>
          </MenuEntry>, entry.label
        );
      })}
    </React.Fragment>
  )), [chain, isPushed])

  return (
    <Container showMenu={showMenu}>
      {LeftSideLinks}
    </Container>
  );
};

export default PanelBody;
