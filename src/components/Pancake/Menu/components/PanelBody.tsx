import React from "react";
import styled from "styled-components";
import { groupBy, uniqueId } from 'lodash'
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
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

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();
  const groupedLinks = groupBy(links, 'group')

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {Object.entries(groupedLinks).map(([label, items]) => (
        <React.Fragment key={uniqueId('frag-')}>
          <Title key={uniqueId('title_')}>{label}</Title>
          {items.map(entry => {
            const Icon = Icons[entry.icon];
            const iconElement = <Icon width="24px" mr="8px" />;
            const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

            if (entry.items) {
              const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
              const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

              return (
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
                        <MenuLink href={item.href}>
                          <LinkLabel isPushed={isPushed}>{item.label}</LinkLabel>
                          {item.status && (
                            <LinkStatus color="primary">
                              {item.status.text}
                            </LinkStatus>
                          )}
                        </MenuLink>
                      </MenuEntry>
                    ))}
                </Accordion>
              );
            }
            return (
              <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
                <MenuLink href={entry.href} onClick={handleClick}>
                  {iconElement}
                  <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                  {entry.status && (
                    <LinkStatus color="primary">
                      {entry.status.text}
                    </LinkStatus>
                  )}
                </MenuLink>
              </MenuEntry>
            );
          })}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default PanelBody;
