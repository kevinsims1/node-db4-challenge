
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'tomato'},
        {id: 2, name: 'garlic'},
        {id: 3, name: 'eggs'}
      ]);
    });
};
