/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import styled from 'styled-components'

import { Text } from "components/Pancake";
import { isDesktop } from 'react-device-detect';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

const TabWrapper = styled.div`
	display: flex;
  background-color: ${({ theme }) => theme.colors.inactiveButtonItem};
  border: 2px solid ${({ theme }) => theme.colors.inactiveButtonItem};
	border-radius: 4px;
	overview: hidden;

	input[type=checkbox] {
		display: none;
	}
`

const Tabs = styled.div`
	display: flex;
	align-items:center;
  &:first-of-type {
		overview: hidden;
		border-radius: 4px 0 0 4px;
	}
`

const Input = styled.input`
  &:checked {
		& ~ label[for=${({ value }) => value}] {
			background-color: ${({ theme }) => theme.colors.activeButtonItem};
		}
	}
`

const Label = styled.label<{ checked?: boolean }>`
	padding: 14px 14px;
	cursor: pointer;
	-webkit-transition: background-color 0.2s, opacity 0.2s;
	transition: background-color 0.2s, opacity 0.2s;

`

const tabs = [
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
	const [checkedState, setCheckedState] = useState(["all"]);

	const handleOnChange = value => {
		if (value === "all") {
			setCheckedState(["all"]);
			onChange(new Set(["all"]))
		} else {
			let _checkedState = checkedState.filter(e => e !== "all")
			if (checkedState.includes(value)) {
				_checkedState = _checkedState.filter(e => e !== value)
			} else {
				_checkedState.push(value)
			}
			if (!_checkedState.length) {
				_checkedState = ["all"]
			}
			setCheckedState(Array.from(_checkedState) as string[]);
			onChange(new Set(_checkedState))
		}
	};

	return (
		<Wrapper>
			<Text bold mr="12px">Vault type</Text>
			<TabWrapper>
				<Tabs>
					{tabs.map(({ value }) => (
						<Input
							key={value}
							type="checkbox"
							id={value}
							name={value}
							value={value}
							checked={checkedState.includes(value)}
							onChange={() => handleOnChange(value)}
						/>
					))}
					{tabs.map(({ label, value }) => (
						<Label htmlFor={value} key={value} style={value === "all" && !isDesktop ? { padding: "22px 14px" } : {}}>
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
