import React from 'react'
import {NavLink} from 'react-router-dom';
import './FriendCard.scss';

export default function FriendCard(props) {
	const {age, email, id, name} = props.friend
	return (
		<NavLink to={`/friends/${id}`}>
			<div>
				<div className="friend">
					<h2>{name}</h2>
					<p>{email}</p>
					<p>Age: {age}</p>
				</div>
			</div>
		</NavLink>
	)
}