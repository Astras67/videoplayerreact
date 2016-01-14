import React from 'react';
const {
	Component
} = React;

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}
	onInputChange(term) {
		console.log(event.target.value);
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
	render() {
		return (
			<div className="search-bar">
			<input 
			onChange={event => this.onInputChange(event.target.value)}
			value={this.state.term}
			/>
			</div>
			);

	}
}
/* {this.onInputChange}
This is equivalent to
{(event) => console.log(event.target.value)}; */