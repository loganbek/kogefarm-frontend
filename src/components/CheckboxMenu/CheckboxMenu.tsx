/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { Text } from "components/Pancake";

const Wrapper = styled.div`
	display: flex;
  background-color: ${({ theme }) => theme.colors.inactiveButtonItem};
  border: 2px solid ${({ theme }) => theme.colors.inactiveButtonItem};
	border-radius: 4px;

	input[type=checkbox] {
		display: none;
	}
`

const Tabs = styled.div`
	display: flex;
`

const Input = styled.input`
  &:checked {
		& ~ label[for=${({ value }) => value}] {
			background-color: ${({ theme }) => theme.colors.activeButtonItem};
		}
	}
`

const Label = styled.label<{ checked?: boolean }>`
	padding: 7px 14px;
	cursor: pointer;
	-webkit-transition: background-color 0.2s, opacity 0.2s;
	transition: background-color 0.2s, opacity 0.2s;

`

const tabs = [
	{
		label: "All",
		value: "all"
	},
	{
		label: "Single Assets",
		value: "single"
	},
	{
		label: "Stable LPs",
		value: "stable"
	},
	{
		label: "No Deposit Fee",
		value: "feeless"
	}
]

const CheckBoxMenu = ({
	onChange,
}: {
	onChange: any
}) => {
	const [checkedState, setCheckedState] = useState(new Set());

	const handleOnChange = value => {
		if (checkedState.has(value)) {
			checkedState.delete(value)
		} else {
			checkedState.add(value)
		}

    setCheckedState(checkedState);
		onChange(checkedState)
  };

	return (
		<Wrapper>
			<Tabs>
				{ tabs.map(({ value }) => (
					<Input
						type="checkbox"
						id={value}
						name={value}
						value={value}
						checked={checkedState.has[value]}
						onChange={() => handleOnChange(value)}
					/>
				))}
				{ tabs.map(({ label, value }) => (
					<Label htmlFor={value} key={value}>
						<Text bold fontSize="12px">
							{label}
						</Text>
					</Label>
				))}
			</Tabs>
		</Wrapper>
	)
}

export default CheckBoxMenu;
