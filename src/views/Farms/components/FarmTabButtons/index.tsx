import React from 'react'
import styled from 'styled-components'
import { useLocation, Link, useRouteMatch } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, NotificationDot } from 'components/Pancake'
import { useTranslation } from 'contexts/Localization'
import { BaseButtonProps, PolymorphicComponent } from "components/Pancake/Button/types";

interface FarmTabButtonsProps {
  hasStakeInFinishedFarms: boolean
}

interface ButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
  to: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`

const StyledButtonMenuItem: PolymorphicComponent<ButtonProps, "button"> = styled(ButtonMenuItem)<ButtonProps>`
  font-size: 12px;
`

const FarmTabButtons: React.FC<FarmTabButtonsProps> = ({ hasStakeInFinishedFarms }) => {
  const { url } = useRouteMatch()
  const location = useLocation()
  const { t } = useTranslation()

  let activeIndex
  switch (location.pathname) {
    case '/vaults':
      activeIndex = 0
      break
    case '/vaults/history':
      activeIndex = 1
      break
    case '/vaults/archived':
      activeIndex = 2
      break
    default:
      activeIndex = 0
      break
  }

  return (
    <Wrapper>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <StyledButtonMenuItem forwardedAs={Link} to={`${url}`}>
          {t('Active')}
        </StyledButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedFarms}>
          <StyledButtonMenuItem forwardedAs={Link} to={`${url}/history`}>
            {t('Inactive')}
          </StyledButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons
