import React, { useEffect, useState } from 'react';
import { Card } from '../Card';

export const Home = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = () => {
		const ItemMovies = [];

		for (let i = 0; i < 20; i++) {
			ItemMovies.push({
				id: i,
				title: 'Nome do Filme',
				poster: '',
				released: '16-02-2024',
				rated: '9.7',
			});
			setMovies(ItemMovies);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<main className="flex gap-6 flex-wrap justify-center">
			{movies.map((movie) => (
				<Card {...movie} />
			))}
		</main>
	);
};
