// import React, { useState } from 'react'
import React from 'react'
import BigNumber from 'bignumber.js'
// import styled from 'styled-components'
// import { useTranslation } from 'contexts/Localization'
// import { Flex, CardFooter, ExpandableLabel, HelpIcon, useTooltip, Box } from 'components/Pancake'
import { CardFooter } from 'components/Pancake'
import { Pool } from 'state/types'
// import { CompoundingPoolTag, ManualPoolTag } from 'components/Tags'
import ExpandedFooter from './ExpandedFooter'

interface FooterProps {
  pool: Pool
  account: string
//  isAutoVault?: boolean
  totalCakeInVault?: BigNumber
}

/* const ExpandableButtonWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  button {
    padding: 0;
  }
` */

const Footer: React.FC<FooterProps> = ({ pool, account }) => {
//  const { t } = useTranslation()
//  const [isExpanded, setIsExpanded] = useState(false)

//  const manualTooltipText = t('You must harvest your earnings from this farm manually.')
//  const autoTooltipText = t(
//    'Any funds you stake in this farm will be automagically harvested and restaked (compounded) for you.',
//  )

/*  const { targetRef, tooltip, tooltipVisible } = useTooltip(isAutoVault ? autoTooltipText : manualTooltipText, {
    placement: 'bottom-end',
  }) */

  return (
    <CardFooter>
  {/*    <ExpandableButtonWrapper>
        <Flex alignItems="center">
          {isAutoVault ? <CompoundingPoolTag /> : <ManualPoolTag />}
          {tooltipVisible && tooltip}
          <Box ref={targetRef}>
            <HelpIcon ml="4px" width="20px" height="20px" color="textSubtle" />
          </Box>
        </Flex>
        <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? t('Hide') : t('Details')}
        </ExpandableLabel>
      </ExpandableButtonWrapper> */}
  {/*    {isExpanded && <ExpandedFooter pool={pool} account={account} />} */}
      <ExpandedFooter pool={pool} account={account} />
    </CardFooter>
  )
}

export default Footer
