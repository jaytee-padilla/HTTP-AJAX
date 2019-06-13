import React, { Component } from 'react'
import axios from 'axios';
import FriendCard from './FriendCard';

export default class Friend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friend: null
		};
	}

	componentDidMount() {
		const id = this.props.match.params.id

		axios
			.get(`http://localhost:5000/friends/${id}`)
			.then(response => this.setState({friend: response.data}))
			.catch(error => console.log(error));
	}


	render() {
		if (!this.state.friend) {
      return <div>Loading friend information...</div>;
		}

		return (
			<FriendCard friend={this.state.friend} />
		)
	}
}
