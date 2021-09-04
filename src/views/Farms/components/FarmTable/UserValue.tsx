import React from 'react'
import styled from 'styled-components'
import { Text, Skeleton } from 'components/Pancake'
// import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'


export interface UserValueProps {
  userValue: BigNumber
  align?: string
}

const UserValueWrapper = styled.div`
  font-weight: 600;
  text-align: right;
  margin-right: 14px;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: right;
    margin-right: 0;
  }

  @media screen and (max-width: 576px) {
    margin-right: 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const UserValue: React.FunctionComponent<UserValueProps> = ({ userValue }) => {
  const displayUserValue = userValue ? (
    `$${Number(userValue).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
  ) : (
    <Skeleton width={60} />
  )

  return (
    <Container>
      <UserValueWrapper>
        <Text>{displayUserValue}</Text>
      </UserValueWrapper>
    </Container>
  )
}

export default UserValue
