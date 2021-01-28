const express = require('express');
const app = express();
const sequelize = require('./db');

const workoutLog = require('./controllers/WorkoutLogcontroller');
const User = require('./controllers/usercontroller');

sequelize.sync();
//sequelize.sync({force: true})

app.use(express.json());

app.use('/user', User);

app.use('/WorkoutLog', workoutLog);


app.listen(3000, function(){
    console.log('App is listening on port 3000');
});