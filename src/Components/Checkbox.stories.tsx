
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxRootProps } from "./Checkbox";
import { Text } from "./Text";

export default {
	title: "Components/Checkbox",
	component: Checkbox,
} as Meta<CheckboxRootProps>;

export const Default: StoryObj<CheckboxRootProps> = {};

export const WithLabel: StoryObj<CheckboxRootProps> = {
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