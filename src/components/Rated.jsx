import React from 'react';
import { HiStar } from 'react-icons/hi';


export const Rated = ({ value }) => {
	return (
		<div className="flex items-center gap-1 text-xl text-grey--50 font-semibold">
			<HiStar color="#FEC84B" size={24} />
			<span>{value.toFixed(1)}</span>
		</div>
	);
};
