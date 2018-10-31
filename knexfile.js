require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: 'lambda',  //provess.env.DB_NAME
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};
const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/lambda.sqlite3',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
    useNullAsDefault: true,
  },

  //add this configuration to the b-e-project
  production: {
    client: 'pg',  //yarn add pg (in my project, not this one)
    connection: dbConnection,  //could be an object or a string
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
