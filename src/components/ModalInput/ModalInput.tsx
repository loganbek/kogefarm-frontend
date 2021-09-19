import React from 'react'
import styled from 'styled-components'
import { Text, Button, Input, InputProps, Link } from 'components/Pancake'
import { useTranslation } from 'contexts/Localization'

interface ModalInputProps {
  max: string
  symbol: string
  onSelectMax?: () => void
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
  addLiquidityUrl?: string
  inputTitle?: string
  depositFee?: number
}

const StyledTokenInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`

const StyledInputWrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 2px;
  }
`

const StyledInput = styled(Input)`
  background-color: transparent;
  width: 100%;
  margin: 0;
  border: 2px solid #1EA306;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 25px;
`

const StyledErrorMessage = styled(Text)`
  position: absolute;
  a {
    display: inline;
  }
  margin: -50px;
`

const ModalInput: React.FC<ModalInputProps> = ({
  max,
  symbol,
  onChange,
  onSelectMax,
  value,
  addLiquidityUrl,
  depositFee,
}) => {
  const { t } = useTranslation()
  const isBalanceZero = max === '0' || !max

  const displayBalance = (balance: string) => {
    if (isBalanceZero) {
      return '0'
    }
    const balanceNumber = Number(balance)
    if (balanceNumber > 0 && balanceNumber < 0.0001) {
      return balanceNumber.toLocaleString(undefined, { maximumFractionDigits: 20 })
    }
    return balanceNumber.toLocaleString()
  }

  return (
    <div style={{ position: 'relative' }}>
      <StyledTokenInput isWarning={isBalanceZero}>
        <StyledInputWrapper>
          <StyledInput
            pattern="^[0-9]*[.,]?[0-9]*$"
            inputMode="decimal"
            step="any"
            min="0"
            onChange={onChange}
            placeholder="0.00"
            value={value}
          />
          <Button
            scale="xs"
            onClick={onSelectMax}
          >
            {t('Max')}
          </Button>
        </StyledInputWrapper>
      </StyledTokenInput>
      {isBalanceZero ? (
        <div>
          <StyledErrorMessage fontSize="10px" color="failure">
            No tokens to stake:{' '}
            <Link bold={false} href={addLiquidityUrl} external color="failure">
              {t('get')} {symbol}
            </Link>
          </StyledErrorMessage>
        </div>
      ) : (
        <Text fontSize="10px" mt="5px">
          {t('Balance')}: {displayBalance(max)} {symbol}
        </Text>
      )}
      {!!depositFee && (
        <Text fontSize="10px" bold={false} color="failure">
          {t('Note: this vault has a ') + (depositFee*100).toString() + t('% third party deposit fee.')}
        </Text>
      )}
    </div>
  )
}

export default ModalInput
