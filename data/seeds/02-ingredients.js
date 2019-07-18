
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, Name: 'tomato'},
        {id: 2, Name: 'garlic'},
        {id: 3, Name: 'eggs'}
      ]);
    });
};
