const db = require('../data/dbConfig.js')

module.exports = {
    getRecipes
  };

  function getRecipes() {
    return db('recipes')
}

function getShoppingList()