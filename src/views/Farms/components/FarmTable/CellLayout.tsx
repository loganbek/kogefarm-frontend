import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  width: 100%;
`

interface CellLayoutProps {
  label?: string
}

const CellLayout: React.FC<CellLayoutProps> = ({ children }) => {
  return (
    <ContentContainer>{children}</ContentContainer>
  )
}

export default CellLayout
