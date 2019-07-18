
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()

      tbl
        .string('recipe_name')
        .notNullable()
        .unique()
  })

  .createTable('recipe_steps', tbl => {
    tbl.increments()

    tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

    tbl
        .string('instructions')
        .notNullable()
})

    .createTable('ingredients', tbl => {
    tbl.increments()

    tbl
        .string('name')
        .notNullable()
        .unique()
})

    .createTable('recipe_ingredients', tbl => {
    tbl.increments()

    tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    

    tbl
        .integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    
    tbl
        .integer('quantity')
        .notNullable()
})

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
 };
