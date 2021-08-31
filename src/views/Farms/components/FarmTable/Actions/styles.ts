import styled from 'styled-components'

export const ActionContainer = styled.div`
  padding: 16px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 0;
    max-height: 100px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-right: 0;
    margin-bottom: 0;
    max-height: 100px;
  }

  @media screen and (max-width: 576px) {
    padding: 0;
    margin-bottom: 0;
    margin-top: 32px;
  }
`

export const ActionTitles = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 8px;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`

export const Subtle = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Earned = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const Staked = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`
