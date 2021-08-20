import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div<{ align: string}>`
  min-height: 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  width: 100%;

  justify-content: ${({ align }) => align === 'right' ? 'flex-end' : 'flex-start'}
`

interface CellLayoutProps {
  label?: string
  align?: string
}

const CellLayout: React.FC<CellLayoutProps> = ({ align, children }) => {
  return (
    // @ts-ignore
    <ContentContainer align={align}>{children}</ContentContainer>
  )
}

export default CellLayout
