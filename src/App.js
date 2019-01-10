import React, { Component } from 'react';
import './App.scss';
import Search from './Components/Search';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Search />
			</div>
		);
	}
}

export default App;
