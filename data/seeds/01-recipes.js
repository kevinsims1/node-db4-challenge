
exports.seed = function(knex) {
  return knex('recipes').truncate()
  .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'pizza'},
        {id: 2, recipe_name: 'spaghetti'}
      ]);
    })
};
