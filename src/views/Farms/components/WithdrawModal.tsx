import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Flex } from 'components/Pancake'
import ModalInput from 'components/ModalInput'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface WithdrawModalProps {
  max: BigNumber
  displayMax: BigNumber
  onConfirm: (amount: string) => void
  onClose?: () => void
  tokenName?: string
  depositFee?: number
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  onConfirm,
  onClose,
  max,
  displayMax,
  tokenName = '',
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
  const fullDisplayBalance = useMemo(() => {
    return getFullDisplayBalance(displayMax,numDecimals,numDecimals)
  }, [displayMax, numDecimals])

  const valNumber = new BigNumber(val)
  const fullBalanceNumber = new BigNumber(fullBalance)
  const fullDisplayBalanceNumber = new BigNumber(fullDisplayBalance)

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.validity.valid) {
        setVal(e.currentTarget.value.replace(/,/g, '.'))
      }
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullDisplayBalance)
  }, [fullDisplayBalance, setVal ])

  return (
    <div>
      <ModalInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullDisplayBalance}
        symbol={tokenName}
        inputTitle={t('LP share')}
        depositFee = {depositFee}
      />
      <Flex>
        <Button
          disabled={pendingTx || !valNumber.isFinite() || valNumber.eq(0) || valNumber.gt(fullDisplayBalanceNumber)}
          onClick={async () => {
            let withdrawBalance = valNumber.times(fullBalanceNumber).div(fullDisplayBalanceNumber).toFixed(numDecimals,1)
            if (val===fullDisplayBalance){
              withdrawBalance = fullBalance
            }
            setPendingTx(true)
            await onConfirm(withdrawBalance)
            setPendingTx(false)
            onClose()
          }}
          width="100%"
        >
          {pendingTx ? t('Pending...') : t('Withdraw')}
        </Button>
        <Button variant="secondary" onClick={onClose} width="100%" disabled={pendingTx}>
          {t('Cancel')}
        </Button>
      </Flex>
    </div>
  )
}

export default WithdrawModal
