import React from 'react'
import {Link} from 'react-router-dom';
import './FriendCard.scss';

export default function FriendCard(props) {
	const {age, email, id, name} = props.friend
	return (
		<Link to={`/friends/${id}`}>
			<div className="friend">
				<h2>{name}</h2>
				<p>{email}</p>
				<p>Age: {age}</p>
			</div>
		</Link>
	)
}