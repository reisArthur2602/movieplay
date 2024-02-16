export const formatResult = (obj) => {
	return {
		id: obj.id,
		title: obj.title || obj.name,
		description: obj.overview,
		posterPath: obj.poster_path,
		rated: obj.vote_average,
		release: obj.release_date,
	};
};
