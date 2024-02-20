import React from 'react';
import { MergeClassName } from '../utils';

export const Button = ({ children, handle, className }) => {
	return (
		<button
    onClick={handle}
			className={MergeClassName(
				'flex items-center gap-2 rounded-full border-2 border-solid border-bluegray--700 py-3 px-5  text-bluegray--600 text-xl font-bold hover:animate-pulse',
				className
			)}
		>
			{children}
		</button>
		
};
