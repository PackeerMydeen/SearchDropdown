import { combineReducers } from 'redux';
import { searchData } from './SearchData';

const MainReducer = combineReducers({
	SearchData: searchData
});

export default MainReducer;
