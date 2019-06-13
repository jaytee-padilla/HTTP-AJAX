import React from 'react';
import { Route } from 'react-router-dom';
import FriendList from './components/FriendList';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		return (
			<div className="App">
				<Route exact path="/" render={props => <FriendList {...props} />} />
			</div>
		);
	}
}

export default App;
