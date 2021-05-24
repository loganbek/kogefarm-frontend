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
}

export type ScrollBarProps = {
  ref: string
  width: number
}

export type TableDataTypes = {
  POOL: string
  APR: string
  APY: string
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
    label: 'APR',
  },
  {
    id: 4,
    name: 'apy',
    translationId: 1072,
    sortable: true,
    label: 'APY',
  },
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
    name: 'farm',
    translationId: 999,
    sortable: true,
    label: '',
  },
/*  {
    id: 2,
    name: 'earned',
    translationId: 1072,
    sortable: true,
    label: 'Earned',
  }, */
  {
    id: 3,
    name: 'apr',
    translationId: 736,
    sortable: true,
    label: 'APR',
  },
  {
    id: 4,
    name: 'apy',
    translationId: 1072,
    sortable: true,
    label: 'APY',
  },
/*  {
    id: 5,
    name: 'multiplier',
    translationId: 999,
    sortable: true,
    label: 'Multiplier',
  }, */
  {
    id: 5,
    name: 'userValue',
    translationId: 99,
    sortable: true,
    label: 'User Staked',
  },
  {
    id: 6,
    name: 'liquidity',
    translationId: 999,
    sortable: true,
    label: 'Total Staked',
  },
  {
    id: 7,
    name: 'details',
    translationId: 999,
    sortable: true,
    label: '',
  },
]

export enum ViewMode {
  'TABLE' = 'TABLE',
  'CARD' = 'CARD',
}
