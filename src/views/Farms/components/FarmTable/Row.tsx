import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useMatchBreakpoints } from 'components/Pancake'
import { Deposit, Withdraw} from 'components/Pancake/Svg'
import { useTranslation } from 'contexts/Localization'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import { useFarmUser } from 'state/hooks'
// import BigNumber from 'bignumber.js'

import ButtonMenu from "components/Pancake/ButtonMenu/ButtonMenu"
import ButtonMenuItem from "components/Pancake/ButtonMenu/ButtonMenuItem"

import Apr, { AprProps } from './Apr'
import Apy, { ApyProps } from './Apy'
import Farm, { FarmProps } from './Farm'
import Earned, { EarnedProps } from './Earned'
import Details from './Details'
// import Multiplier, { MultiplierProps } from './Multiplier'
import Liquidity, { LiquidityProps } from './Liquidity'
import UserValue, { UserValueProps } from './UserValue'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'

export interface RowProps {
  details: FarmWithStakedValue
  apr: AprProps
  farm: FarmProps
  earned: EarnedProps
//  multiplier: MultiplierProps
  apy: ApyProps
  apyd: ApyProps
  liquidity: LiquidityProps
  userValue: UserValueProps
  actions: any
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const cells = {
  apr: Apr,
  apy: Apy,
  apyd: Apy,
  farm: Farm,
  earned: Earned,
  details: Details,
//  multiplier: Multiplier,
  liquidity: Liquidity,
  userValue: UserValue,
}

const CellInner = styled.div`
  padding: 24px 0;
  display: flex;
  width: 100%;
  align-items: flex-end;
`

const StyledTr = styled.tr`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.row};
`

const ApyMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const StyledButtonMenu = styled(ButtonMenu)`
  width: 100%;

  button {
    display: flex;
    padding: 20px;

    svg {
      margin-right: 10px;
    }

    &:first-of-type {
      padding-right: 10px;
    }

    &:last-of-type {
      padding-left: 10px;
    }
  }
`

const Row: React.FunctionComponent<RowPropsWithLoading> = (props) => {
  const { details, userDataReady } = props
  const hasStakedAmount = !!useFarmUser(details.pid).stakedBalance.toNumber()
  const [actionPanelExpanded, setActionPanelExpanded] = useState(hasStakedAmount)
  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)
  const { t } = useTranslation()

  const toggleActionPanel = () => {
    setActionPanelExpanded(!actionPanelExpanded)
  }

  useEffect(() => {
    setActionPanelExpanded(hasStakedAmount)
  }, [hasStakedAmount])

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const vaultAction = () => {
    console.log('hit')
  }


  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'actions':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <StyledButtonMenu
                          scale="sm"
                          variant="outline"
                          onItemClick={vaultAction}
                        >
                          <ButtonMenuItem>
                            <Deposit />
                            Deposit
                          </ButtonMenuItem>
                          <ButtonMenuItem>
                            <Withdraw />
                            Withdraw
                          </ButtonMenuItem>
                        </StyledButtonMenu>
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'details':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelExpanded} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apr':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Apr {...props.apr} hideButton={isMobile} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        {React.createElement(cells[key], { ...props[key], userDataReady })}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <StyledTr onClick={toggleActionPanel}>
        <td>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelExpanded} />
            </CellLayout>
          </CellInner>
        </td>
        <td>
          <tr>
            <FarmMobileCell>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr>
            <ApyMobileCell>
              <CellLayout label={t('APY')}>
              <Apy {...props.apy} hideButton />
              </CellLayout>
            </ApyMobileCell>
          </tr>
        </td>
      </StyledTr>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {shouldRenderChild && (
        <tr>
          <td colSpan={7}>
            <ActionPanel {...props} expanded={actionPanelExpanded} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
