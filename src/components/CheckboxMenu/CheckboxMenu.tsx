/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { remove } from 'lodash'

import { Text } from "components/Pancake";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

const TabWrapper = styled.div`
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
	const [checkedState, setCheckedState] = useState([]);
	const currentTabs = new Set()

	const handleOnChange = value => {
		if (value === 'all') {
			if (currentTabs.has('all')) {
				currentTabs.clear()
			} else {
				currentTabs.add("all")
				currentTabs.add("single")
				currentTabs.add("stable")
				currentTabs.add("feeless")
			}
		}

		if (value !== 'all') {
			if (currentTabs.has(value)) {
				currentTabs.delete(value)
			} else {
				currentTabs.add(value)
			}
		}


    setCheckedState(Array.from(currentTabs));
		onChange(currentTabs)
  };

	return (
		<Wrapper>
			<Text bold mr="12px">Vault type</Text>
			<TabWrapper>
				<Tabs>
					{ tabs.map(({ value }) => (
						<Input
							type="checkbox"
							id={value}
							name={value}
							value={value}
							checked={checkedState.includes(value)}
							onChange={() => handleOnChange(value)}
						/>
					))}
					{ tabs.map(({ label, value }) => (
						<Label htmlFor={value} key={value}>
							<Text bold fontSize="10px">
								{label}
							</Text>
						</Label>
					))}
				</Tabs>
			</TabWrapper>
		</Wrapper>
	)
}

export default CheckBoxMenu;
