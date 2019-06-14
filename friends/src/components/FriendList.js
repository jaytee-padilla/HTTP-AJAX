import React, { Component } from 'react'
import axios from 'axios';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

export default class FriendList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: []
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(response => this.setState({friends: response.data}))
			.catch(error => console.log(error));
	}

	addFriend = (event, name, email, age) => {

	}

	render() {
		return (
			<div className="friend-list-component">
				<div className="friend-form-container">
					<FriendForm />
				</div>

				<div className="friend-list-container">
					{this.state.friends.map(friend => {
						return <FriendCard key={friend.id} friend={friend} />
					})}
				</div>
			</div>
		)
	}
}
