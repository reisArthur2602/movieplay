import React from 'react';
import { MergeClassName } from '../utils';

export const Image = ({ src, className }) => {
	return (
		<div
			className={MergeClassName(
				'bg-bluegray--900 rounded-xl overflow-hidden',
				className
			)}
		>
			<img src={src} alt={src} className="w-full h-full object-cover" />
		</div>
	);
};
