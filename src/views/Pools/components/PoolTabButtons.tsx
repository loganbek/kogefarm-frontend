import React from 'react'
import {
  Toggle,
  Text,
  Flex,
} from 'components/Pancake'
import { useTranslation } from 'contexts/Localization'



const PoolTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems="center" justifyContent="center" mb="32px">
      <Flex alignItems="center" flexDirection={['column', null, 'row', null]}>
        <Flex mt={['4px', null, 0, null]} ml={[0, null, '24px', null]} justifyContent="center" alignItems="center">
          <Toggle scale="sm" checked={stakedOnly} onChange={() => setStakedOnly((prev) => !prev)} />
          <Text ml="8px">{t('Staked only')}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PoolTabButtons
