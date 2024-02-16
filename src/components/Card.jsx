import React from 'react';
import { Image } from './Image';
import { Rated } from './Rated';

export const Card = ({ title, poster, released, rated }) => {
	return (
		<div className="max-w-[17.625rem] flex flex-col gap-6 w-full cursor-pointer hover:animate-pulse">
			{/* image */}
			<Image src={poster} className="w-full h-[25rem]" />

			{/* infos */}
			<div className="flex flex-col gap-2 px-2">
				{/* title */}

				<h3 className="text-grey--50 font-semibold text-cardTitle truncate ">
					{title}
				</h3>

				<div className="flex items-center justify-between">
					{/* realesed */}
					<span className="text-bluegray--800 text-xl">{released}</span>
					{/* rated */}
					<Rated value={rated} />
				</div>
			</div>
		</div>
	);
};
