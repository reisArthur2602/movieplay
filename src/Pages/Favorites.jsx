import React, { useEffect, useState } from 'react';
import { CardFavorites, EmptyFavorites } from "../components"

export const Favorites = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = () => {
		const data = JSON.parse(localStorage.getItem('@movies')) || [];
		setMovies(data);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	const deleteMovie = (id) => {
		const filterMovies = movies.filter((movie) => movie.id !== id);
		setMovies(filterMovies);
		localStorage.setItem('@movies', JSON.stringify(filterMovies) || '[]');
	};

	return (
		<main className="py-12">
			{movies.length === 0 ? (
				<EmptyFavorites />
			) : (
				<section className="max-w-[50rem] w-full mx-auto flex items-center justify-center flex-col gap-[4.375rem] ">
					<h1 className="text-[4rem] font-bold text-bluegray--400 uppercase md:text-[2.5rem]">
						Meus Filmes
					</h1>
					<div className="flex flex-col gap-5 w-full">
						{movies.map((movie) => (
							<CardFavorites
								key={movie.id}
								{...movie}
								handle={() => deleteMovie(movie.id)}
							/>
						))}
					</div>
				</section>
			)}
		</main>
	);
};
