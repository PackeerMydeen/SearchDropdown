import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovies } from '../../Redux/Actions/index';
import './index.scss';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	onInputChange = e => {
		this.props.getMovies(e.target.value);
	};

	deleteItem = id => {
		let movies = [...this.state.data];
		if (id !== -1) {
			movies.splice(id, 1);
			this.setState({ data: movies });
		}
	};

	componentWillReceiveProps(nextProps) {
		if (this.state.searchData !== nextProps.searchData) {
			this.setState({
				data: nextProps.searchData.searchData.Search
			});
		}
	}
	render() {
		const { data } = this.state;
		return (
			<div className='search-wrapper'>
				<div className='search-container'>
					<div>
						<input
							type='text'
							name='search'
							onChange={this.onInputChange}
							className='search-input'
							placeholder='Search for movie names..'
						/>
						{data ? (
							<ul className='dropdown'>
								{data.map((item, index) => (
									<div key={index} className='dropdown-list'>
										<li>{item.Title}</li>
										<span className='delete-text' onClick={() => this.deleteItem(index)}>
											Delete
										</span>
									</div>
								))}
							</ul>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		searchData: state.SearchData
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getMovies }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
