import styled from 'styled-components'
import { Card, Box } from 'components/Pancake'

interface PromotedStyleCardProps {
  isDesktop: boolean
}

export const StyledCard = styled(Card)<{ isPromoted?: PromotedStyleCardProps; isFinished?: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
`

export const StyledCardInner = styled(Box)<{ isPromotedPool?: boolean }>`
  background: ${({ theme }) => theme.card.background};
  background: linear-gradient(90deg, #F4F4F4 54.07%, rgba(244, 244, 244, 0) 100%);
  border-radius: ${({ isPromotedPool, theme }) => (isPromotedPool ? '31px' : theme.radii.card)};
`

export default StyledCard
