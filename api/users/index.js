const express = require('express');
const usersRouter = express.Router({ mergeParams: true });
const customersRouter = require('./customers');

usersRouter.use('/customers', customersRouter);

module.exports = usersRouter; 
