import styled from 'styled-components'

const FlexLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  & > * {
    width: 100%;
    margin-bottom: 32px;
  }
`

export default FlexLayout
