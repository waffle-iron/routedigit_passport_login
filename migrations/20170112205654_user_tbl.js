
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_tbl', function(table){
    table.increments('id')
    table.string('fullName')
    table.string('username')
    table.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_tbl')
};
