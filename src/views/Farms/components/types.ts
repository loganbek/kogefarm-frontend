export type TableProps = {
  data?: TableDataTypes[]
  selectedFilters?: string
  sortBy?: string
  sortDir?: string
  onSort?: (value: string) => void
}

export type ColumnsDefTypes = {
  id: number
  label: string
  name: string
  translationId: number
  sortable: boolean
  align?: string
}

export type ScrollBarProps = {
  ref: string
  width: number
}

export type TableDataTypes = {
  POOL: string
//  APR: string
  APY: string
  APYD: string
  EARNED: string
  STAKED: string
  DETAILS: string
  LINKS: string
}

export const MobileColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'farm',
    translationId: 999,
    sortable: true,
    label: '',
  },
  {
    id: 3,
    name: 'apr',
    translationId: 736,
    sortable: true,
    label: '',
  },
  {
    id: 4,
    name: 'apy',
    translationId: 1072,
    sortable: true,
    label: '',
  },
/*  {
    id: 5,
    name: 'apyd',
    translationId: 1073,
    sortable: true,
    label: 'Daily',
  }, */
  {
    id: 6,
    name: 'details',
    translationId: 999,
    sortable: true,
    label: '',
  },
]

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'details',
    translationId: 999,
    sortable: false,
    label: '',
  },
  {
    id: 2,
    name: 'farm',
    translationId: 999,
    sortable: true,
    label: 'Asset',
  },
  {
    id: 3,
    name: 'apr',
    translationId: 736,
    sortable: true,
    label: 'Apr',
    align: 'right'
  },
  {
    id: 4,
    name: 'apy',
    translationId: 1072,
    sortable: true,
    label: 'APY',
    align: 'right'
  },
  {
    id: 5,
    name: 'userValue',
    translationId: 99,
    sortable: true,
    label: 'User Staked',
    align: 'right'
  },
  {
    id: 6,
    name: 'liquidity',
    translationId: 999,
    sortable: true,
    label: 'Total Staked',
    align: 'right'
  },
  {
    id: 7,
    name: 'actions',
    translationId: 999,
    sortable: false,
    label: 'Actions',
  },
]

export enum ViewMode {
  'TABLE' = 'TABLE',
  'CARD' = 'CARD',
}
