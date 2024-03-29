import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Image, Rated } from '../components';
import { getDetailMovies, tmdbImageSrc } from '../utils';

import { ImSpinner8 } from 'react-icons/im';
import { HiOutlineBookmark } from 'react-icons/hi';

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

	const SaveMovie = () => {
		const ListMovies = JSON.parse(localStorage.getItem('@movies')) || [];

		const HasMovie = ListMovies.some((movie) => movie.id === details.id);

		if (!HasMovie) {
			ListMovies.push(details);
			localStorage.setItem('@movies', JSON.stringify(ListMovies));
		} else {
			alert('Esse filme já está na sua lista!');
		}
	};

	return (
		<main className="py-12">
			{details ? (
				<section className="w-full px-[4.6875rem] flex items-center gap-[68px] sm:flex-col sm:px-0 ">
					{/* image */}
					<Image
						src={tmdbImageSrc(details.posterPath)}
						className="w-[25.5rem] h-[40.25rem] sm:w-[18rem] sm:h-[28.375rem]"
					/>

					{/* infos */}
					<div className="flex flex-col gap-5 max-w-[31.25rem] sm:max-w-[40.8125rem] ">
						{/* title */}
						<div className="flex flex-col gap-2">
							<h2 className="text-5xl md:text-3xl text-grey--50 font-semibold  ">
								{details.title}
							</h2>
							{/* tagline */}
							<p className="text-base">{details.tagline}</p>
						</div>

						{/* genres */}
						<div className="flex flex-wrap gap-2 items-center">
							{details.genres.map((g) => (
								<span
									className="py-2 px-4 text-grey--50 font-semibold rounded-full bg-bluegray--400"
									key={g}
								>
									{g}
								</span>
							))}
						</div>
						{/* sinopse */}
						<div className="flex flex-col gap-2">
							<h2 className="text-xl md:text-base text-grey--50 font-semibold ">
								Sinopse
							</h2>
							<p className="text-base md:text-sm">{details.description}</p>
						</div>

						<p className=" flex items-center gap-1 text-xl md:text-base text-grey--50 font-semibold ">
							Lançamento:{' '}
							<span className="font-normal text-bluegray--800 text-xl">
								{details.release}
							</span>
						</p>
						<Rated value={details.rated} />

						<Button
							className="bg-bluegray--900 max-w-[170px]"
							handle={SaveMovie}
						>
							<HiOutlineBookmark size={20} />
							Adicionar
						</Button>
					</div>
				</section>
			) : (
				<ImSpinner8 size={72} className="block animate-spin mx-auto" />
			)}
		</main>
	);
};
