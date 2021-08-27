require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('Users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});

//GOOGLE STRATEGY
passport.use(
	new GoogleStrategy({
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({userAuthId: profile.id});
			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({userAuthId: profile.id}).save();
			done(null, user);
		}
	)
);

//FACEBOOK STRATEGY
// passport.use(
// 	new FacebookStrategy
// 	({
// 			clientID: process.env.FACEBOOK_APP_ID,
// 			clientSecret: process.env.FACEBOOK_SECRET,
// 			callbackURL: '/auth/facebook/callback',
// 		},
// 		async (accessToken, refreshToken, profile, done) => {
// 			const existingUser = await User.findOne({userAuthId: profile.id});
// 			if (existingUser) {
// 				return done(null, existingUser);
// 			}
//
// 			const user = await new User({userAuthId: profile.id}).save();
// 			done(null, user);
// 		}
// 	));