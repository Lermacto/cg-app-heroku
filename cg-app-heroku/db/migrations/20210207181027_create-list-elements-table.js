
exports.up = function(knex) {
  return knex.schema.createTable('list-elements', tbl => {
    tbl.increments(); // 'id' campo
    tbl.text('name',128).notNullable();
    tbl.boolean('isStrikedThrough');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('list-elements')
};
