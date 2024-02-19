import React from 'react';
import { Image } from './Image';
import { HiTrash } from 'react-icons/hi';
import { tmdbImageSrc } from '../utils';

export const CardFavorites = ({ posterPath, title, release, handle }) => {
	return (
		<div className="w-full bg-[#101323] rounded-3xl py-6 px-8 flex justify-between items-center">
			<div className="flex gap-4 items-center flex-1 ">
				{/* image */}
				<Image
					src={tmdbImageSrc(posterPath)}
					className="w-[8.75rem] h-[8.75rem]"
				/>
				{/* infos */}
				<div className="flex flex-col">
					<span className="text-[1.75rem] text-grey--50 font-semibold">
						{title}
					</span>
					<span className="text-2xl font-regular">{release}</span>
				</div>
			</div>
			<button onClick={handle} >
				<HiTrash size={30} color="#3538CD" />
			</button>
		</div>
	);
};
