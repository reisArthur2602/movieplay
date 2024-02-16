export const formatResultMovies = (obj) => {
	return {
		id: obj.id,
		title: obj.title || obj.name,
		description: obj.overview,
		posterPath: obj.poster_path,
		rated: obj.vote_average,
		release: obj.release_date,
	};
};

export const formatResultDetails = (obj) => {
	return {
		title: obj.title || obj.name,
		description: obj.overview,
		posterPath: obj.poster_path,
		rated: obj.vote_average,
		release: obj.release_date,
		tagline: obj.tagline,
		genres: obj.genres?.map((g) => g.name),
	};
};
