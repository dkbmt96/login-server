require('rootpath')();
import express from 'express';
const app = express();
import cors from 'cors';
import { urlencoded, json } from 'body-parser';
import jwt from '_helper/jwt';
import errorHandler from '_helper/error-handler';

app.use(urlencoded({extended: false}));
app.use(json());
app.use(cors());

//use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.unsubscribe(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});