import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from '../Redux/Reducers';

export default function configureStore(initialState) {
	const store = createStore(
		MainReducer,
		initialState,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);
	return store;
}
