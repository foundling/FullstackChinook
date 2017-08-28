const path = require('path');
const express = require('express');
const productRouter = express.Router();

const products = require(path.join(__dirname,'products'));
const customers = require(path.join(__dirname,'customers'));
//const finances = require(path.join(__dirname,'finances'));

productRouter.use('/products', products);
//productRouter.use('/customers', customers);
//productRouter.use('/finances', finances);
module.exports = productRouter;
