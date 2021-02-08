const knex = require('knex');
const knexfile = require('./knexfile');
const env = process.env.DB_ENVIROMENT || 'development';
const configOptions = knexfile[env];

module.exports= knex(configOptions);
