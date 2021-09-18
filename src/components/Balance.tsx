import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { Text, TextProps } from 'components/Pancake'

interface BalanceProps extends TextProps {
  value: number
  decimals?: number
  unit?: string
  isDisabled?: boolean
  prefix?: string
}

const Balance: React.FC<BalanceProps> = ({
  value,
  color = 'text',
  decimals = 3,
  isDisabled = false,
  unit,
  prefix,
  ...props
}) => {
  const previousValue = useRef(0)

  useEffect(() => {
    previousValue.current = value
  }, [value])

  const showPrefix = Boolean((value||value===0) && prefix)
  const showUnit = Boolean((value || value===0) && unit)

  return (
    <Text color={isDisabled ? 'textDisabled' : color} {...props}>
      {showPrefix && <span>{prefix}</span>}
      <CountUp start={previousValue.current} end={value} decimals={decimals} duration={1} separator="," />
      {showUnit && <span>{unit}</span>}
    </Text>
  )
}

export default Balance
