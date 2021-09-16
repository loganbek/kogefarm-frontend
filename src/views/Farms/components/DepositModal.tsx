import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Flex } from 'components/Pancake'
import ModalInput from 'components/ModalInput'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface DepositModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onClose?: () => void
  tokenName?: string
  addLiquidityUrl?: string
  depositFee?: number
}

const DepositModal: React.FC<DepositModalProps> = ({
  max,
  onConfirm,
  onClose,
  tokenName = '',
  addLiquidityUrl,
  depositFee
}) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()

  let numDecimals = 18
  if (tokenName==="KogeCoin" || tokenName==="KOGECOIN"){
    numDecimals = 9
  }
  if (tokenName.toUpperCase()==="USDC" || tokenName.toUpperCase()==="USDT"){
    numDecimals = 6
  }
  if (tokenName.toUpperCase()==="BTC"){
    numDecimals = 8
  }

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, numDecimals)
  }, [max, numDecimals])


  const valNumber = new BigNumber(val)
  const fullBalanceNumber = new BigNumber(fullBalance)

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.validity.valid) {
        setVal(e.currentTarget.value.replace(/,/g, '.'))
      }
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <div>
      <ModalInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
        addLiquidityUrl={addLiquidityUrl}
        inputTitle={t('Stake/Harvest')}
        depositFee = {depositFee}
      />
      <Flex mt="12px">
        <Button
          width="100%"
          disabled={pendingTx || !valNumber.isFinite() || valNumber.eq(0) || valNumber.gt(fullBalanceNumber)}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onClose()
          }}
        >
          {pendingTx ? t('Pending...') : t('Deposit')}
        </Button>
        <Button
          variant="tertiary"
          onClick={onClose}
          width="50%"
          disabled={pendingTx}
        >
          {t('Cancel')}
        </Button>
      </Flex>
    </div>
  )
}

export default DepositModal
