const express = require('express');
const apiRouter = express.Router({ mergeParams: true });

const productsRouter = require('./products');
const financialsRouter = require('./financials');
const usersRouter = require('./users');

apiRouter.use('/products', productsRouter);
apiRouter.use('/financials', financialsRouter);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter; 
