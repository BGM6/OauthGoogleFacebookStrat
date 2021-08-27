import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Navbar = ({auth}) => {

	const renderContent = () => {
		switch (auth) {
			case null:
				return;
			case false:
				return (
					<Redirect to="/"/>
				);
			default: return (
				<a href="/api/logout"><h3>Logout</h3></a>
			)
		}
	}

	return (
			<div className="ui secondary pointing menu">
				<a className="active item">
					<h3>Home</h3>
				</a>
				<a className="item">
				<h3>Message</h3>
				</a>
				<a className="item">
					<h3>Friends</h3>
				</a>
				<div className="right menu">
					<a className="ui item">
						{renderContent()}
					</a>
				</div>
			</div>
	);
};

const mapStateToProps = (state) => {
	return{
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Navbar);