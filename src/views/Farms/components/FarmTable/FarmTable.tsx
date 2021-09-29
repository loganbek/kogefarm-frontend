import React, { useRef, useState, useEffect } from 'react'
import { Tooltip } from 'react-tippy'
import { isDesktop } from "react-device-detect";
import { InView } from 'react-intersection-observer'
import styled, { css } from 'styled-components'
import { useTable, Button, ChevronUpIcon, ColumnType, Flex, Text } from 'components/Pancake'
import { Sort, Collapsible } from 'components/Pancake/Svg'
import { useTranslation } from 'contexts/Localization'

import _ from 'lodash';
import Row, { RowProps } from './Row'

export interface ITableProps {
  data: RowProps[]
  columns: ColumnType<RowProps>[]
  userDataReady: boolean
  sortColumn?: string
  handleCurrent?: (count: number) => void
}

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  border-radius: 16px;
  margin-bottom: 16px;
`

const TableWrapper = styled.div`
  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledTable = styled.table<{ isDesktop: boolean }>`
  table-layout: ${props => props.isDesktop ? "fixed" : ""};
  border-collapse: separate;
  border-spacing: 0 12px;
  font-size: 12px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const Tip = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 24px;
  margin-top: 15px;
  border-radius: 4px;
`

const TableBody = styled.tbody`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }
  }

  tr td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  tr td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

const TableHeader = styled.thead`
  position: sticky;
  top: 64px;
  z-index: 1;
  background: ${({ theme }) => theme.colors.rowHeader};

  tr th:nth-child(1) { width: 5% }
  tr th:nth-child(2) { width: 10% }
  tr th:nth-child(3) { width: 15% }
  tr th:nth-child(4) { width: 15% }
  tr th:nth-child(5) { width: 15% }
  tr th:nth-child(6) { width: 15% }
  tr th:nth-child(7) { width: 25% }

  tr:first-child th:first-child { border-top-left-radius: 10px; }
  tr:first-child th:last-child { border-top-right-radius: 10px; }
  tr:last-child th:first-child { border-bottom-left-radius: 10px; }
  tr:last-child th:last-child { border-bottom-right-radius: 10px; }

  th {
    padding: 24px;
  }
`

const TableContainer = styled.div`
  position: relative;
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const Header = styled.th`
  vertical-align: middle;
`

const CollapsibleContainer = styled.div`
  margin: 0 28px;
`

const StyledCollapsible = styled(Collapsible) <{ open?: boolean }>`
  cursor: pointer;
  ${({ open }) => open ? css`
    transform: rotate(180deg);
  ` : css`
    transform: rotate(0deg);
  `}
`

const Label = styled(Text) <{ sortable: boolean }>`
  cursor: ${props => props.sortable ? "pointer" : "default"};
  display: inline-block;
  color: ${({ theme }) => theme.colors.rowHeaderText};
`

const SortIcon = styled(Sort)`
  cursor: pointer;
`

const LAZY_NUMBER_OF_FARMS_VISIBLE = 12

const FarmTable: React.FC<ITableProps> = props => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const { data, columns, userDataReady } = props
  const [colSortBy, setColSortBy] = useState({ columnName: "", iscAscOverride: false })
  const [showMore, setShowMore] = React.useState(LAZY_NUMBER_OF_FARMS_VISIBLE)

  const { rows: _rows, headers } = useTable(columns, data)

  const rows = React.useMemo(() => {
    const order = (v: any) => {
      switch (colSortBy.columnName) {
        case "apy": return Number(v?.original?.apy?.originalValue);
        case "farm": return v?.original?.farm?.label;
        case "userValue": return Number(v?.original?.userValue?.userValue);
        case "liquidity": return Number(v?.original?.liquidity?.liquidity);
        case "platform": return v?.original?.platform?.userValue;
        default: break;
      }
    }

    return _.orderBy(_rows, order, colSortBy.iscAscOverride ? "desc" : "asc").slice(0, showMore)
  }, [_rows, colSortBy, showMore])


  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const sort = ({ name }) => {
    if (!colSortBy.columnName) {
      setColSortBy({ columnName: name, iscAscOverride: false })
    } else {
      setColSortBy({ columnName: name, iscAscOverride: colSortBy.columnName === name ? !colSortBy.iscAscOverride : colSortBy.iscAscOverride })
    }
  }
  const handleOpen = () => setOpen(!open)

  return (
    <Container>
      <TableContainer>

        <TableWrapper ref={tableWrapperEl}>
          <StyledTable isDesktop={isDesktop}>
            {isDesktop ? (
              <TableHeader>
                <tr>
                  {headers.map(header => (
                    <Header key={header.name}>
                      <Flex
                        justifyContent={header.align}
                        alignItems="center"
                      >

                        {header.name === 'details' && (
                          <Tooltip
                            trigger="mouseenter"
                            interactive
                            useContext
                            position="bottom"
                            html={(
                              <Tip>
                                <Text>{open ? "Collapse all" : "Expand all"}</Text>
                              </Tip>
                            )}
                          >

                            <CollapsibleContainer>
                              <StyledCollapsible
                                open={open}
                                color="transparent"
                                onClick={handleOpen}
                              />
                            </CollapsibleContainer>
                          </Tooltip>
                        )}

                        {header.display ? (
                          <>
                            {/* @ts-ignore */}
                            <Label sortable={header.sortable} fontWeight="bold" onClick={() => header.sortable && sort(header)}>
                              {header.label}
                            </Label>
                            {/* @ts-ignore */}
                            {header.sortable && (
                              <SortIcon asc={!colSortBy.iscAscOverride} on={colSortBy.columnName === header.name} onClick={() => sort(header)} />
                            )}
                          </>
                        ) : null}
                      </Flex>
                    </Header>
                  ))}
                </tr>
              </TableHeader>
            ) : null}

            <TableBody>
              {rows.map((row, i) => i === rows.length - 1 ? (
                <InView as="div" onChange={showMore === data.length ? undefined : (inView) => inView && setShowMore(showMore + LAZY_NUMBER_OF_FARMS_VISIBLE)}>
                  <Row
                    {...row.original}
                    open={open}
                    userDataReady={userDataReady}
                    key={`table-row-${row.id}`}
                  />
                </InView>
              ) : (
                (
                  <Row
                    {...row.original}
                    open={open}
                    userDataReady={userDataReady}
                    key={`table-row-${row.id}`}
                  />
                )
              ))}
            </TableBody>
          </StyledTable>
        </TableWrapper>
        <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop}>
            {t('To Top')}
            <ChevronUpIcon color="primary" />
          </Button>
        </ScrollButtonContainer>
      </TableContainer>
    </Container>
  )
}

export default React.memo(FarmTable)
