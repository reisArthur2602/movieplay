import React from 'react';
import { Image } from './Image';
import { Rated } from './Rated';
import { tmdbImageSrc } from '../utils';
import { Navigate } from 'react-router-dom';

export const Card = ({ title, posterPath, release, rated, handle }) => {
	return (
		<div
			className="max-w-[17.625rem] flex flex-col gap-2 w-full cursor-pointer hover:animate-pulse"
			onClick={handle}
		>
			{/* image */}
			<Image src={tmdbImageSrc(posterPath)} className="w-full h-[25rem]" />

			{/* infos */}
			<div className="flex flex-col gap-1 px-2">
				{/* title */}

				<h3 className="text-grey--50 font-semibold text-cardTitle truncate ">
					{title}
				</h3>

				<div className="flex items-center justify-between">
					{/* realesed */}
					<span className="text-bluegray--800 text-base">{release}</span>
					{/* rated */}
					<Rated value={rated} />
				</div>
			</div>
		</div>
	);
};
