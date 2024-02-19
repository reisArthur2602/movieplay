import React, { useEffect, useState } from 'react';

import { getPopularMovies } from '../utils';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components';

export const Home = () => {
	const [movies, setMovies] = useState([]);

	const fetchPopularMovies = async () => {
		const data = await getPopularMovies();
		setMovies(data);
	};

	const navigate = useNavigate();

	useEffect(() => {
		fetchPopularMovies();
	}, []);

	return (
		<main className="flex gap-6 flex-wrap justify-center py-12">
			{movies.map((movie) => (
				<Card
					key={movie.id}
					{...movie}
					handle={() => navigate(`/filme/${movie.id}`)}
				/>
			))}
		</main>
	);
};
