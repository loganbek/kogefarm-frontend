import { Text, useMatchBreakpoints } from 'components/Pancake'
import { useTranslation } from 'contexts/Localization'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import React, { useEffect, useState } from 'react'
import InView from 'react-intersection-observer'
import { useFarmUser } from 'state/hooks'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'
import ActionPanel from './Actions/ActionPanel'
import StakedAction from './Actions/StakedAction'
import Apr, { AprProps } from './Apr'
import Apy, { ApyProps } from './Apy'
import CellLayout from './CellLayout'
import Details from './Details'
import Earned, { EarnedProps } from './Earned'
import Farm, { FarmProps } from './Farm'
import Liquidity, { LiquidityProps } from './Liquidity'
import UserValue, { UserValueProps } from './UserValue'



export interface RowProps {
  details: FarmWithStakedValue
  apr: AprProps
  farm: FarmProps
  earned: EarnedProps
  apy: ApyProps
  apyd: ApyProps
  liquidity: LiquidityProps
  userValue: UserValueProps
  actions: { userValue: string } | any
  platform?: any
  align?: string
  open?: boolean
  sortable?: boolean
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
  onInView?: (inView: boolean) => void
}

const cells = {
  apr: Apr,
  apy: Apy,
  apyd: Apy,
  farm: Farm,
  earned: Earned,
  details: Details,
  liquidity: Liquidity,
  userValue: UserValue,
}

const CellInner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`

const StyledTr = styled.tr`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.row};

  td {
    padding: 8px 24px;
  }

  td:nth-child(3) {
    overflow-wrap: anywhere;
  }

  .details {
    @media screen and (max-width: 576px) {
      padding-right: 0;
    }
  }
`

const ApyMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<RowPropsWithLoading> = props => {
  const { details, userDataReady, open, onInView } = props
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

  useEffect(() => {
    if (open) {
      setActionPanelExpanded(true)
    } else {
      setActionPanelExpanded(false)
    }
  }, [open])

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

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
                  <InView as="td" onChange={onInView} key={key}>
                    <CellInner>
                      <CellLayout align={props.actions.align}>
                        <StakedAction {...details} userDataReady={userDataReady} />
                      </CellLayout>
                    </CellInner>
                  </InView>
                )
              case 'details':
                return (
                  <td key={key} className="details">
                    <CellInner>
                      <CellLayout align={props.details.align}>
                        <Details actionPanelToggled={actionPanelExpanded} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apr':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout align={props.apr.align}>
                        <Apr {...props.apr} hideButton={isMobile} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'platform':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout align={props.platform.align}>
                        <Text fontWeight="bold">{props.platform.userValue}</Text>
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout align={props[key].align}>
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
        <InView as="td" onChange={onInView}>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelExpanded} />
            </CellLayout>
          </CellInner>
        </InView>
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

export default React.memo(Row)
