import React, { Component } from 'react'

export default class FriendForm extends Component {
	addFriendHandler = event => {

	}

	render() {
		return (
			<form className="todoForm" onSubmit={this.addFriendHandler}>
				<input type="text" name="name" placeholder="Name" required />
				<input type="email" name="email" placeholder="Email" />
				<input type="number" name="age" placeholder="Age" />
				<button type="submit">Add Friend</button>
			</form>
		)
	}
}
