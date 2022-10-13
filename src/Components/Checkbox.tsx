import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxRootProps {
	label?: string;
	id?: string;
}

export function Checkbox({ label, id }: CheckboxRootProps) {
	return (
		<div className='flex items-center gap-3'>
			<CheckboxPrimitive.Root id={id} className='w-6 h-6 p-[2px] bg-gray-800 rounded custom-focus outline-none'>
				<CheckboxPrimitive.Indicator asChild>
					<Check weight='bold' className='h-5 w-5 text-cyan-500' />
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Root>
			{ label && <label htmlFor={id}>{label}</label> }
		</div>
	);
}
