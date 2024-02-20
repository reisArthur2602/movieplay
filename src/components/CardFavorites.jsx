import React from 'react';
import { Image } from './Image';
import { HiTrash } from 'react-icons/hi';
import { tmdbImageSrc } from '../utils';

export const CardFavorites = ({ posterPath, title, release, handle }) => {
	return (
		<div className="w-full bg-[#101323] rounded-3xl py-6 px-8 md:px-4 flex justify-between items-center gap-2">
			<div className="flex gap-4 items-center w-[90%]">
				{/* image */}
				<Image
					src={tmdbImageSrc(posterPath)}
					className="w-[8.75rem] h-[8.75rem] md:w-[4.3125rem] md:h-[4.3125rem] "
				/>
				{/* infos */}
				<div className="flex flex-col truncate">
					<span className="text-2xl text-grey--50 font-semibold md:text-sm ">
						{title}
					</span>
					<span className="text-2xl font-regular md:text-sm">{release}</span>
				</div>
			</div>
			{/* delete */}
			<button onClick={handle} >
				<HiTrash size={30} color="#3538CD" />
			</button>
		</div>
	);
};
