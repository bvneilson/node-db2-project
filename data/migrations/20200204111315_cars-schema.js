
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('vin', 32).unique().notNullable();
    tbl.text('make', 32).notNullable();
    tbl.text('model', 32).notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.text('transmission', 32);
    tbl.text('title', 32);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
