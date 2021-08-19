import React from 'react'
import styled from 'styled-components'
// import ApyButton from 'views/Farms/components/FarmCard/ApyButton'
// import { Address } from 'config/constants/types'
// import BigNumber from 'bignumber.js'
// import { BASE_ADD_LIQUIDITY_URL } from 'config'
// import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Skeleton } from 'components/Pancake'

export interface AprProps {
  value: string
//  multiplier: string
//  lpLabel: string
//  tokenAddress?: Address
//  quoteTokenAddress?: Address
//  cakePrice: BigNumber
  originalValue: number
  hideButton?: boolean
}

const Container = styled.div`
  display: flex;
  align-items: center;
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
