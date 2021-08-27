require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

require('./models/User');
require('./services/passport');

const app = express();

//Mongo Connection
connectDB().then(() => console.log('MongoDB connected successfully...'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Cookie-Session Code
app.use(cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //This is 30 days
		keys: [process.env.COOKIE_KEY]
	})
);

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

require('./routes/authRoutes')(app);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));