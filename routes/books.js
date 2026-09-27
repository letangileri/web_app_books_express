const express = require('express');
const Router = express.Router();

const booksController = require('../controllers/bookController') 
// index Route
Router.get('/', booksController.index)
//api/books
// show Route
Router.get('/:id', booksController.show)

module.exports = Router;