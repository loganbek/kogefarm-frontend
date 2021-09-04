import React from 'react'
import CardValue, { CardValueProps } from './CardValue'

const CardBusdValue: React.FC<CardValueProps> = (props) => {
  return (
    <CardValue lineHeight="1.1" color="textSubtle" prefix="~$" bold={false} decimals={2} {...props} />
  )
}

export default CardBusdValue
