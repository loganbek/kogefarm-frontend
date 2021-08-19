import React from 'react'
import styled from 'styled-components'
import { Text, Skeleton } from 'components/Pancake'
import BigNumber from 'bignumber.js'


export interface LiquidityProps {
  liquidity: BigNumber
}

const LiquidityWrapper = styled.div`
  font-weight: 600;
  text-align: right;
  margin-right: 14px;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Liquidity: React.FunctionComponent<LiquidityProps> = ({ liquidity }) => {
  const displayLiquidity = liquidity ? (
    `$${Number(liquidity).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  ) : (
    <Skeleton width={60} />
  )

  return (
    <Container>
      <LiquidityWrapper>
        <Text>{displayLiquidity}</Text>
      </LiquidityWrapper>
    </Container>
  )
}

export default Liquidity
