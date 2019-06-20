const mongoose = require('mongoose');

// const dbURI = 'mongodb://username:password@localhost/mydatabase';

mongoose.connect('mongodb+srv://MyTestUser:Lv47KIN1lKGW4tWy@cluster0-tkmbv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.info(`Mongoose connected`));
mongoose.connection.on('error', () => console.info(`Mongoose connected error`));

module.exports = mongoose;