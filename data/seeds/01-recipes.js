
exports.seed = function(knex) {
  return knex('table_name').del()
  .then(function () {
      return knex('recipes').insert([
        {recipe_name: 'pizza'},
        {recipe_name: 'spaghetti'}
      ]);
    }
};
