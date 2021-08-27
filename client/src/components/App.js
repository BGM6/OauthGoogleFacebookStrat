import React, {useEffect} from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/fetchUser';
import Navbar from './Navbar';
import Landing from './Landing';

const App = ({fetchUser, auth}) => {

	const Friends = () => {
		return <h1>My Friends!</h1>;
	};

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return (
		<div>
			<BrowserRouter>
				<Route exact path="/" component={Landing}/>
				<div className="ui container">
					{auth ? <Route path="/dashboard" component={Navbar}/> :
						<h1>You are not logged in, Please login <Link to="/">Here</Link></h1>}
					{auth && <Route path="/dashboard/friends" component={Friends}/>}
				</div>
			</BrowserRouter>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps, {fetchUser})(App);