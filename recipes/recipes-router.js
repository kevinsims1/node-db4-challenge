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

router.get('/:id/ingredients', async (req,res) => {
  try {
    const {id} = req.params
    const ingredients = await Recipes.getShoppingList(id)
    res.status(200).json(ingredients)
  } catch(error) {
    res.status(500).json({error: 'Could not return ingredients', error})
  }
})

router.get('/:id/steps', async (req,res) => {
  try{
    const {id} = req.params
    const steps = await Recipes.getInstructions(id)
    res.status(200).json(steps)
  }catch(error){
    res.status(500).json({error: "COULD NOT RETRIEVE STEPS"})
  }
})

module.exports = router;
