import React from 'react'
import { Button, AutoRenewIcon, Skeleton } from 'components/Pancake'
import { useSousApprove } from 'hooks/useApprove'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import { getAddress } from 'utils/addressHelpers'
import { Pool } from 'state/types'
import useNetworkSwitcher from 'hooks/useNetworkSwitcher'

interface ApprovalActionProps {
  pool: Pool
  isLoading?: boolean
}

const ApprovalAction: React.FC<ApprovalActionProps> = ({ pool, isLoading = false }) => {
  const { sousId, stakingToken } = pool
  const { t } = useTranslation()
  const chain = useNetworkSwitcher().getCurrentNetwork()
  const stakingTokenContract = useERC20(stakingToken.address ? getAddress(stakingToken.address, chain) : '', chain)
  const { handleApprove, requestedApproval } = useSousApprove(stakingTokenContract, sousId, chain)

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <Button
          height="32px"
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={requestedApproval}
          onClick={handleApprove}
          width="100%"
        >
          {t('Enable')}
        </Button>
      )}
    </>
  )
}

export default ApprovalAction
