import React from 'react'
import styled from 'styled-components'
import { Skeleton } from 'components/Pancake'

export interface ApyProps {
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

const ApyWrapper = styled.div`
  min-width: 60px;
  text-align: right;
`

const Apy: React.FC<ApyProps> = ({
  value,
  originalValue,
}) => {
  return originalValue !== 0 ? (
    <Container>
      {originalValue ? (
        <>
          <ApyWrapper>{value}%</ApyWrapper>
        </>
      ) : (
        <ApyWrapper>
          <Skeleton width={60} />
        </ApyWrapper>
      )}
    </Container>
  ) : (
    <Container>
      <ApyWrapper>{originalValue}%</ApyWrapper>
    </Container>
  )
}

export default Apy
