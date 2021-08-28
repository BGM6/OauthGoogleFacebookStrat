const passport = require('passport');

module.exports = app => {
	//GOOGLE ROUTES
	app.get('/auth/google', passport.authenticate('google', {
			scope: ['profile', 'email']
		}
	));

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/dashboard');
		}
	);

	//LOGOUT
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	//GET CURRENT USER
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
	//FACEBOOK ROUTES
	// app.get('/auth/facebook', passport.authenticate('facebook', {
	// 		scope: ['public_profile', 'email']
	// 	}, (err, user) => {
	// 		if (err) throw err;
	//
	// 	}
	// ));
	//
	// app.get(
	// 	'/auth/facebook/callback',
	// 	passport.authenticate('facebook'),
	// 	(req, res) => {
	// 		res.redirect('/dashboard');
	// 	}
	// );
};