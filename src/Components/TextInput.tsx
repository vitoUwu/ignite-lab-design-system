import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
	children: ReactNode;
	error?: boolean;
}

function TextInputRoot({ children, error = false }: TextInputRootProps) {
	return (
		<div className={
			clsx("flex items-center px-3 gap-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300", {
				"ring-2 ring-red-200": error
			})}>
			{children}
		</div>
	);
}

export interface TextInputIconProps {
	children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
	return (
		<Slot className="w-6 h-6 text-gray-400">
			{children}
		</Slot>
	)
}

export interface TextInputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputDefault({ ...props }: TextInputDefaultProps) {
	return (
		<input
			className='bg-transparent flex-1 py-4 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
			{...props}
		/>
	);
}

export const TextInput = {
	Root: TextInputRoot,
	Input: TextInputDefault,
	Icon: TextInputIcon
}
