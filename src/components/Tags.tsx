import React from 'react'
import { Tag, CommunityIcon, BinanceIcon, RefreshIcon, AutoRenewIcon } from 'components/Pancake'

const CoreTag = () => <div>{null}</div>

const SushiTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon width="18px" color="secondary" mr="4px" />} {...props}>
    Sushi
  </Tag>
)

const WaultTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon width="18px" color="secondary" mr="4px" />} {...props}>
    Wault
  </Tag>
)

const DfynTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon width="18px" color="secondary" mr="4px" />} {...props}>
    Dfyn
  </Tag>
)

const ApeTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon width="18px" color="secondary" mr="4px" />} {...props}>
    ApeSwap
  </Tag>
)

const JetSwapTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon width="18px" color="secondary" mr="4px" />} {...props}>
    JetSwap
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon width="18px" color="secondary" mr="4px" />} {...props}>
    Community
  </Tag>
)

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<BinanceIcon width="18px" color="secondary" mr="4px" />} {...props}>
    Binance
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

const ManualPoolTag = (props) => (
  <Tag variant="secondary" outline startIcon={<RefreshIcon width="18px" color="secondary" mr="4px" />} {...props}>
    Manual
  </Tag>
)

const CompoundingPoolTag = (props) => (
  <Tag variant="success" outline startIcon={<AutoRenewIcon width="18px" color="success" mr="4px" />} {...props}>
    Auto-Compounding
  </Tag>

//ROUTERTAGHERE (VAULT_CREATION_AUTOMATOIN_DO_NOT_REMOVE)
)


export { CoreTag, CommunityTag, SushiTag, WaultTag, DfynTag, ApeTag, JetSwapTag, BinanceTag, DualTag, ManualPoolTag, CompoundingPoolTag }
