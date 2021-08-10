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
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
`

export const StyledCardInner = styled(Box)<{ isPromotedPool?: boolean }>`
  background: ${({ theme }) => theme.card.background};
  border-radius: ${({ isPromotedPool, theme }) => (isPromotedPool ? '31px' : theme.radii.card)};
`

export default StyledCard
