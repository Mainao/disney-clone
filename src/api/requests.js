const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
	fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US&with_networks=2739`,
	fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=2739`,
	fetchNew: `/movie/top_rated?api_key=${API_KEY}&language=en-US&with_networks=2739?sort_by=first_air_date.desc`,
	search: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
	fetchDetails: `/movie/`
}

export default requests;
