const db = require('./db-config.js');

function find(id) {
  if (id) {
    return db('cars').where({ id: id });
  } else {
    return db('cars');
  }
}

function insert(car) {
  return db('cars').insert(car);
}

module.exports = {
  find,
  insert
}
