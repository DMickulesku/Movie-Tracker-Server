exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (table) => {
    table.increments(),
    table.text('title'),
    table.text('director'),
    table.text('genre'),
    table.integer('year_released')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
