const express = require('express');
const morgan = require('morgan');
const router = require('./routes/user.routes');
const { mongoose } = require('./database');

const app = express();

//Setting
app.set('port', process.env.PORT || 4000)


//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/users',router);

//Starting the server
app.listen(app.get('port'), () =>{
    console.log('server on port '+ app.get('port'));
});