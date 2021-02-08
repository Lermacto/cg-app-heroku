
const db = require('./dbConfig');

module.exports = {
  add,
  update,
  getElements
};

async function add(listElement){
  await db('list-elements').insert({name: listElement.name, isStrikedThrough:listElement.isStrikedThrough});
}

function update(listElement){
  return db('list-elements').where({id : listElement.id}).update({isStrikedThrough: listElement.isStrikedThrough},['id','name']);
}

function getElements(){
  return db('list-elements');
}
