import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovies, tmdbImageSrc } from '../../utils';
import { Image } from '../Image';
import { Rated } from '../Rated';
import { ImSpinner8 } from 'react-icons/im';

export const Details = () => {
	const { id } = useParams();
	const [details, setDetails] = useState();

	const fetchDetails = async () => {
		const data = await getDetailMovies(id);
		setDetails(data);
	};

	useEffect(() => {
		fetchDetails();
	}, []);

	console.log(details);

	return (
		<main className="py-12">
			{details ? (
				<section className="w-full px-[4.6875rem] flex  items-center gap-[68px]">
					{/* image */}
					<Image
						src={tmdbImageSrc(details.posterPath)}
						className="w-[25.5rem] h-[40.25rem]"
					/>

					{/* infos */}
					<div className="flex flex-col gap-5 max-w-[31.25rem]">
						{/* title */}
						<div className="flex flex-col gap-2">
							<h2 className="text-5xl text-grey--50 font-semibold ">
								{details.title}
							</h2>
							{/* tagline */}
							<p className="text-xl">{details.tagline}</p>
						</div>

						{/* sinopse */}
						<div className="flex flex-col gap-2">
							<h2 className="text-2xl text-grey--50 font-semibold ">Sinopse</h2>
							<p className="text-xl">{details.description}</p>
						</div>

						<p className="text-2xl text-grey--50 font-semibold">
							Lançamento:{' '}
							<span className="font-normal text-bluegray--800 text-xl">
								{details.release}
							</span>
						</p>
						<Rated value={details.rated} />
					</div>
				</section>
			) : (
				<ImSpinner8 size={72} className="block animate-spin mx-auto" />
			)}
		</main>
	);
};
