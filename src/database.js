const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-user'

mongoose.connect(URI)
    .then(db => console.log('DB CONNECTED'))
    .catch(err => console.log(err));

module.exports = mongoose;