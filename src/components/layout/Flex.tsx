import styled from 'styled-components'

const FlexLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  & > * {
    width: 100%;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export default FlexLayout
