import React, { useState, useMemo } from 'react'
import { Input } from 'components/Pancake'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

const StyledInput = styled(Input)`
  border-radius: 4px;
  margin-left: auto;
  font-size: 12px;
`

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 234px;
    display: block;
  }
`

const Container = styled.div<{ toggled: boolean }>``

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const SearchInput: React.FC<Props> = ({ onChange: onChangeCallback, placeholder }) => {
  const [toggled, setToggled] = useState(false)
  const [searchText, setSearchText] = useState('')

  const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e), 500),
    [onChangeCallback],
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    debouncedOnChange(e)
  }

  return (
    <Container toggled={toggled}>
      <InputWrapper>
        <StyledInput
          value={searchText}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={() => setToggled(false)}
        />
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
