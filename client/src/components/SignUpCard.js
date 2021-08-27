import './Landing.css';
import React from 'react';

const SignUpCard = () => {
	return (
		<div className="main">
			<div className="card">
				<div className="item">
					<p>Login with on of the following:</p>
					<div className="google-btn">
						<a className="btn google" href="/auth/google"><i className="fab fa-google"/> Google</a>
					</div>
					<div className="facebook-btn">
						<a className="btn facebook" href="/auth/facebook"><i className="fab fa-facebook-square"/> Facebook</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpCard;