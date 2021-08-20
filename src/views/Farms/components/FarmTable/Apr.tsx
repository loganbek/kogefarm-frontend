import React from 'react'
import styled from 'styled-components'
import { Skeleton } from 'components/Pancake'

export interface AprProps {
  value: string
  originalValue: number
  hideButton?: boolean
  align?: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const AprWrapper = styled.div`
  min-width: 60px;
  text-align: right;
  text-decoration: line-through;
`

const Apr: React.FC<AprProps> = ({
  value,
  originalValue,
}) => {
  return originalValue !== 0 ? (
    <Container>
      {originalValue ? (
        <>
          <AprWrapper>{value}%</AprWrapper>
        </>
      ) : (
        <AprWrapper>
          <Skeleton width={60} />
        </AprWrapper>
      )}
    </Container>
  ) : (
    <Container>
      <AprWrapper>{originalValue}%</AprWrapper>
    </Container>
  )
}

export default Apr
