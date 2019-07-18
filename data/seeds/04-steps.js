
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {id: 1, recipe_id: 2, step_number: 1, instructions: 'de-frost'},
        {id: 2, recipe_id: 2, step_number: 2, instructions: 'keep in the oven for 30 min'},
        {id: 3, recipe_id: 2, step_number: 3, instructions: 'enjoy!!'},
      ]);
    });
};
