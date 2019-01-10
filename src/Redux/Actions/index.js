import axios from 'axios';

export function getMovies(searchText) {
	const url = 'https://www.omdbapi.com/';
	return dispatch => {
		const data = axios
			.get(url, {
				params: {
					s: searchText,
					type: 'movie',
					apikey: 'b7048067'
				}
			})
			.then(response => {
				dispatch({ type: 'DROPDOWN_DATA', payload: { searchData: response.data } });
			})
			.catch(function(error) {
				return Promise.reject(error);
			});
		return Promise.resolve(data);
	};
}
