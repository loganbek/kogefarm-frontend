import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal } from '@pancakeswap/uikit'
import ModalActions from 'components/ModalActions'
import ModalInput from 'components/ModalInput'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface WithdrawModalProps {
  max: BigNumber
  displayMax: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
  depositFee?: number
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onConfirm, onDismiss, max, displayMax, tokenName = '', depositFee}) => {
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
//  const withdrawFAQ = 'https://kogecoin-io.gitbook.io/kogefarm/faqs/what-are-lp-shares'

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
    <Modal title={t('Unstake')} onDismiss={onDismiss}>
      <ModalInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullDisplayBalance}
        symbol={tokenName}
        inputTitle={t('LP share')}
        depositFee = {depositFee}
      />
      <ModalActions>
        <Button variant="secondary" onClick={onDismiss} width="100%" disabled={pendingTx}>
          {t('Cancel')}
        </Button>
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
            onDismiss()
          }}
          width="100%"
        >
          {pendingTx ? t('Pending Confirmation') : t('Confirm')}
        </Button>
      </ModalActions>
{/*      <LinkExternal href={withdrawFAQ} style={{ alignSelf: 'center' }}>
        {t('FAQ: What are LP shares?')}
      </LinkExternal> */}
    </Modal>
  )
}

export default WithdrawModal
