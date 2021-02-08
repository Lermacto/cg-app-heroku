
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('list-elements').del()
    .then(function () {
      // Inserts seed entries
      return knex('list-elements').insert([
        {id: 1, name: 'task one',isStrikedThrough:false},
        {id: 2, name: 'task two',isStrikedThrough:true},
        {id: 3, name: 'task three',isStrikedThrough:false}
      ]);
    });
};
