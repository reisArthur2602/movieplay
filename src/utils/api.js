import axios from 'axios';
import { formatResultMovies, formatResultDetails } from './formatResult';

const axiosClient = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});

axiosClient.interceptors.request.use((config) => {
	return {
		...config,

		params: {
			...config.params,
			api_key: 'cd433a67baf30c47348855afaad346fe',
			language: 'pt-br',
		},
	};
});

export const getPopularMovies = async () => {
	try {
		const { data } = await axiosClient.get(`/movie/popular`);

		return data.results.map((movie) => formatResultMovies(movie));
	} catch (error) {
		console.error(error);
	}

	return [];
};

export const getDetailMovies = async (id) => {
	try {
		const { data } = await axiosClient.get(`/movie/${id}`);

		return formatResultDetails(data);
	} catch (error) {
		console.error(error);
	}
};

export const tmdbImageSrc = (path) => {
	if (!path) return '';

	return `https://image.tmdb.org/t/p/original/${path}`;
};
