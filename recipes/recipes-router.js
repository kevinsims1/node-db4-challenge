const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get Recipes' });
  }
});

module.exports = router;
