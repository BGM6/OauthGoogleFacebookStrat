import './Landing.css';
import React from 'react';

const Landing = () => {
	return(
		<div className="landing-background ">
				<div className="card-link">
					<div className="item-link">
						<p>Login with one of the following:</p>
						<div className="google-btn">
							<a className="btn google" href="/auth/google"><i className="fab fa-google"/> Google</a>
						</div>
						<div className="facebook-btn">
							<a className="btn facebook" href="/auth/facebook"><i className="fab fa-facebook-square"/> Facebook</a>
						</div>
					</div>
				</div>11
			</div>
	);
}

export default Landing;