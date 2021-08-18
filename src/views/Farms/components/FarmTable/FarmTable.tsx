import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTable, Button, ChevronUpIcon, ColumnType } from 'components/Pancake'
import { useTranslation } from 'contexts/Localization'

import Row, { RowProps } from './Row'

export interface ITableProps {
  data: RowProps[]
  columns: ColumnType<RowProps>[]
  userDataReady: boolean
  sortColumn?: string
}

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  border-radius: 16px;
  margin: 16px 0px;
`

const TableWrapper = styled.div`
  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledTable = styled.table`
  border-collapse: separate; 
  border-spacing: 0 12px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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
  background: ${({ theme }) => theme.colors.rowHeader};

  tr:first-child th:first-child { border-top-left-radius: 10px; }
  tr:first-child th:last-child { border-top-right-radius: 10px; }
  tr:last-child th:first-child { border-bottom-left-radius: 10px; }
  tr:last-child th:last-child { border-bottom-right-radius: 10px; }

  th {
    color: ${({ theme }) => theme.colors.rowHeaderText};
    padding: 22px;
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

const FarmTable: React.FC<ITableProps> = props => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { data, columns, userDataReady } = props

  const { rows, toggleSort, headers } = useTable(columns, data, { sortable: true, sortColumn: 'farm' })

  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const sort = ({ name }) => {
    toggleSort(name)
  }

  return (
    <Container>
      <TableContainer>

        <TableWrapper ref={tableWrapperEl}>
          <StyledTable>
            <TableHeader>
              <tr>
                {headers.map(header => (
                  <th key={header.name} onClick={() => sort(header)}>
                    {header.label}
                    { header.sorted.on &&
                      <span>
                        {header.sorted.asc ? 'up' : 'd'}
                      </span>
                    }
                  </th>
                ))}
              </tr>
            </TableHeader>
            <TableBody>
              {rows.map((row) => {
                return <Row {...row.original} userDataReady={userDataReady} key={`table-row-${row.id}`} />
              })}
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

export default FarmTable
