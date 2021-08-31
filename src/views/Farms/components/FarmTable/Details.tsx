import React from 'react'
import styled from 'styled-components'
import { ChevronDownIcon } from 'components/Pancake'

interface DetailsProps {
  actionPanelToggled: boolean
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`

const ArrowIcon = styled(ChevronDownIcon)<{ toggled: boolean }>`
  transform: ${({ toggled }) => (toggled ? 'rotate(180deg)' : 'rotate(0)')};
  height: 20px;
`

const Details: React.FC<DetailsProps> = ({ actionPanelToggled }) => {
  return (
    <Container>
      <ArrowIcon color="primary" toggled={actionPanelToggled} />
    </Container>
  )
}

export default Details
