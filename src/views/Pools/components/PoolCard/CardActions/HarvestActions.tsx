import React from 'react'
import { Flex, Text, Button, Heading, useModal, Skeleton } from 'components/Pancake'
import BigNumber from 'bignumber.js'
import { Token } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance, getBalanceNumber, formatNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import CollectModal from '../Modals/CollectModal'

interface HarvestActionsProps {
  earnings: BigNumber
  earningToken: Token
  sousId: number
  pid: number
  earningTokenPrice: number
  isLoading?: boolean
}

const HarvestActions: React.FC<HarvestActionsProps> = ({
  earnings,
  earningToken,
  sousId,
  pid,
  earningTokenPrice,
  isLoading = false,
}) => {
  const { t } = useTranslation()
  const earningTokenBalance = getBalanceNumber(earnings, earningToken.decimals)
  const formattedBalance = formatNumber(earningTokenBalance, 3, 3)

  const earningTokenDollarBalance = getBalanceNumber(earnings.multipliedBy(earningTokenPrice), earningToken.decimals)
  const earningsDollarValue = formatNumber(earningTokenDollarBalance)

  const fullBalance = getFullDisplayBalance(earnings, earningToken.decimals)
  const hasEarnings = earnings.toNumber() > 0
  const isCompoundPool = sousId === 99

  const [onPresentCollect] = useModal(
    <CollectModal
      formattedBalance={formattedBalance}
      fullBalance={fullBalance}
      earningToken={earningToken}
      earningsDollarValue={earningsDollarValue}
      sousId={sousId}
      pid={pid}
      isCompoundPool={isCompoundPool}
    />,
  )

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          {isLoading ? (
            <Skeleton width="80px" height="48px" />
          ) : (
            <>
              {hasEarnings ? (
                <Balance bold fontSize="20px" decimals={5} value={earningTokenBalance} />
              ) : (
                <Heading color="textDisabled">0</Heading>
              )}
              {earningTokenPrice !== 0 && (
                <Text fontSize="12px" color={hasEarnings ? 'textSubtle' : 'textDisabled'}>
                  ~
                  {hasEarnings ? (
                    <Balance
                      display="inline"
                      fontSize="12px"
                      color="textSubtle"
                      decimals={2}
                      value={earningTokenDollarBalance}
                      unit=" USD"
                    />
                  ) : (
                    '0 USD'
                  )}
                </Text>
              )}
            </>
          )}
        </Flex>
      </Flex>
      <Flex mt="12px">
        <Button
          width="100%"
          disabled={!hasEarnings}
          onClick={onPresentCollect}
        >
          {isCompoundPool ? t('Collect') : t('Harvest')}
        </Button>
        <Button
          variant="tertiary"
          width="50%"
        >
          {t('Cancel')}
        </Button>
      </Flex>
    </div>
  )
}

export default HarvestActions
