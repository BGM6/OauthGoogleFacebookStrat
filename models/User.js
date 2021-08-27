const {Schema, model} = require('mongoose');

const User = new Schema({
	userAuthId: String,
})

model('Users', User)