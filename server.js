const express = require('express');


const RecipeRouter = require('./recipes/recipes-router.js');

const server = express();


server.use(express.json());

server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
    res.send('HELLO TESTING')
  });

module.exports = server