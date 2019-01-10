const initialState = { data: [] };

export function searchData(state = initialState, action) {
	switch (action.type) {
		case 'DROPDOWN_DATA':
			return action.payload;
		default:
			return state;
	}
}
