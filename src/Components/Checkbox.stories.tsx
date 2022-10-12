
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
	title: "Components/Checkbox",
	component: Checkbox,
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const WithLabel: StoryObj<CheckboxProps> = {
	decorators: [
		(Story) => {
			return (
				<div className="flex items-center gap-2">
					{Story()}
					<Text size='sm'>Label</Text>
				</div>
			)
		}
	]
};